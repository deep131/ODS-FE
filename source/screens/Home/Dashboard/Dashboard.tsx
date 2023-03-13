import React, {useEffect, useState, useContext} from 'react';
import {
  Alert as alert,
  Image,
  PermissionsAndroid,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../styles/variables';
import {useTranslation} from 'react-i18next';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import {ScrollView} from 'react-native-gesture-handler';
import {ThemeContext} from '../../../Theme/Theme';
import CategoriesComp from '../../../components/Categories/Categories';
import CategoryText from '../../../components/CategoryText/CategoryText';
import ImageSlider from '../../../components/ImageSlider/ImageSlider';
import TopRatedComp from '../../../components/TopRated/TopRated';
import TrendingComp from '../../../components/Trending/Trending';
import {GOOGLE_API_KEY} from '../../../utils/commonUtils';
import {ODSgetActiveCategories} from '../../../utils/service';
import {styles} from './Dashboardstyle';

const imagesPages: any = [
  {
    id: 1,
    image: require('../../../assets/Images/banner1.jpg'),
  },
  {
    id: 2,
    image: require('../../../assets/Images/banner2.png'),
  },
  {
    id: 3,
    image: require('../../../assets/Images/banner3.png'),
  },
];

const Dashboard = ({navigation}: any) => {
  const latitudeDelta = 0.025;
  const longitudeDelta = 0.025;

  const [region, setregion] = useState({
    latitudeDelta,
    longitudeDelta,
    latitude: 22.33644,
    longitude: 70.76797,
  });

  const [latitude, setlatitude] = useState(22.33644);
  const [longitude, setlongitude] = useState(70.76797);
  const [formattedAddress, setformattedAddress] = useState('');
  const [catrgories, setCategories] = useState([]) as any;
  const {t, i18n} = useTranslation();
  const {theme, setTheme}:any = useContext(ThemeContext);

  useEffect(() => {
    const getCategories = async () => {
      const Categories = await ODSgetActiveCategories();
      setCategories(Categories.data.result);
      console.log(Categories);
    };
    getCategories();
  }, []);

  const searchview = () => {
    navigation.navigate('Search');
  };

  useEffect(() => {
    locateCurrentPosition();
  }, []);

  const locateCurrentPosition = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'On Demand Service',
          message: 'ODS App needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
        alert.alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }

    Geolocation.getCurrentPosition(
      position => {
        setlatitude(position.coords.latitude);
        setlongitude(position.coords.longitude);

        setregion({
          ...region,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        if (position.coords.latitude && position.coords.longitude) {
          getPostalAddress(position.coords.latitude, position.coords.longitude);
        }
      },
      error => {
        alert.alert(error.message.toString());
      },
    );
  };

  async function getPostalAddress(lat: any, long: any) {
    await Geocoder.init(GOOGLE_API_KEY);
    Geocoder.from(lat, long)
      .then(async json => {
        setformattedAddress(json.results[0].formatted_address);
      })
      .catch(error => {
        console.warn(error);
      });
  }
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.charcol} barStyle="light-content" />

        <View style={styles.locationview}>
          <View style={styles.locationContainer}>
            <Image
              style={styles.iclocation}
              resizeMode="contain"
              source={require('../../../assets/Images/location.png')}></Image>

            <View style={styles.locationTitle}>
              <Text style={styles.locationtext}>
                {t('Location For Service')}
              </Text>
              <Text style={styles.locationtext1}>
                {latitude},{longitude}
              </Text>
            </View>
          </View>

          <Image
            style={styles.appLogo}
            resizeMode="contain"
            source={require('../../../assets/Images/applogo.png')}
          />
        </View>
        <View style={theme == 'light' ? styles.body : styles.body_dark}>
          <View style={[styles.searchbarview]}>
            <TouchableOpacity onPress={searchview}>
              <Image
                resizeMode="contain"
                style={styles.searchicon}
                source={require('../../../assets/Images/serachicon.png')}></Image>
            </TouchableOpacity>
            <TextInput
              style={[styles.input]}
              placeholder={t('Search Services')}
              onPressIn={searchview}></TextInput>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CategoryText
              seeall={true}
              name={t('Categories')}
              titleStyle={
                theme == 'light' ? styles.loc_color : styles.white_col
              }
              seeallStyle={
                theme == 'light' ? styles.gray_color : styles.white_col
              }></CategoryText>
            <CategoriesComp data={catrgories?.genCat} navigation={navigation} />
            <ImageSlider data={imagesPages} />
            <CategoryText
              name={t('Top Rated')}
              titleStyle={
                theme == 'light' ? styles.loc_color : styles.white_col
              }></CategoryText>

            <TopRatedComp data={catrgories?.topRated} navigation={navigation} />
            <CategoryText
              name={t('Trending')}
              titleStyle={
                theme == 'light' ? styles.loc_color : styles.white_col
              }>
              {' '}
            </CategoryText>
            <TrendingComp data={catrgories?.trending} navigation={navigation} />
          </ScrollView>
        </View>
      </View>
    </>
  );
};
export default Dashboard;
