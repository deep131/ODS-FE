import React, {useEffect, useState,useContext} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/variables';
import {useTranslation} from 'react-i18next';
import SubServices from '../../../components/BottomSheets/SubServices/SubServices';
import Header from '../../../components/Header/Header';
import {ODSgetServices} from '../../../utils/service';
import {ThemeContext} from '../../../Theme/Theme';
import {styles} from './ServiesStyles';

const Services = ({navigation, route}: any) => {
  const params = route.params;
  const subcategories = params.subcategory;
  const subcategoriesname = params.name;
  const [visitModal, setModalVisible] = useState(false);
  const [services, setServices] = useState([]);
  const {t, i18n} = useTranslation();
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    const getService = async () => {
      const service = await ODSgetServices({subcategory: subcategories});
      setServices(service.data.result.service);
    };
    getService();
  }, []);

  const gotoDetails = (item: any) => {
    navigation.navigate('ServiceDetail', {
      searchdata: item._id,
    });
  };

  const renderGrid = ({item, index}: any) => (
    <View style={[styles.cardView]}>
      <View style={[styles.cardViewInner, {backgroundColor : theme == 'light' ? colors.white : colors.black}]}>
        <View style={styles.cardContent}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => gotoDetails(item)}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                source={
                  item.thumbnail
                    ? {uri: item.thumbnail}
                    : require('../../../assets/Images/applogo.png')
                }
                resizeMode="cover"
                style={
                  item.thumbnail ? styles.imageView : styles.blankimageView
                }></Image>
            </View>

            <View>
              <Text style={[styles.textTitle,  {color : theme == 'light' ? colors.charcol : colors.white}]}>{item.name}</Text>
              <View
              style={styles.descView}>
                <View style={styles.description}>
                  <Text
                    style={[styles.descriptionTitle ,  {color : theme == 'light' ? colors.charcol : colors.white}]}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => gotoDetails(item)}
              style={styles.services}>
              <Text
                style={styles.serviceText}>
                {t("Related Services")}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <Header
        name={subcategoriesname}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.darkPrimary}
        iconColor={colors.white}
        back={true}
        right={true}
        theme={theme}
      />
      <View style={[styles.mainContainer, {backgroundColor : theme == 'light' ? colors.white : colors.black}]}>
          <FlatList
            data={services}
            renderItem={renderGrid}
            keyExtractor={(item:any) => item._id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 20}}
          />
      </View>

      <SubServices
        visitModal={visitModal}
        navigation={navigation}
        setModalVisible={(value: boolean) => {
          setModalVisible(value);
        }}
      />
    </>
  );
};

export default Services;
