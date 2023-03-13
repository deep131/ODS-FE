import React, {useEffect, useState, useContext} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../styles/variables';
import {useTranslation} from 'react-i18next';
import ImageViewer from 'react-native-image-zoom-viewer';
import PagerView from 'react-native-pager-view';
import {ThemeContext} from '../../../Theme/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ODSsubservices} from '../../../utils/service';
import {styles} from './ServiceDetailStyles';
import Alert from '../../../components/Alert/Alert';
import {useSelector} from 'react-redux';

const ServiceDetail = ({navigation, route}: any) => {
  const params = route.params;
  const searchdata = params.searchdata;
  const [subservices, setSubServices] = useState([]) as any;
  const [imagearray, setimagearray] = useState([]);
  const [AlertVisible, setAlertVisible] = useState(false);
  const [AskForLogin, setAskForLogin] = useState(false);
  const [activeIndex, setactiveIndex] = useState(0);
  const [show, setShow] = useState(false);
  const {t, i18n} = useTranslation();
  const {theme, setTheme} = useContext(ThemeContext);
  const appState = useSelector((state: any) => state.authReducers);
  const user_token = appState?.token;
  const newArray: any = [];

  useEffect(() => {
    const getService = async () => {
      const serviceId = searchdata;
      const service = await ODSsubservices({
        serviceId,
      });
      setSubServices(service.data);
      setimagearray(newArray);
      {
        service.data.serviceDetail?.serviceImages.map((item: any, index: any) =>
          newArray.push({url: item}),
        );
      }
    };
    getService();
  }, []);

  const getCurrentPageIndex = (e: any) => {
    setactiveIndex(e.nativeEvent.position);
  };

  const renderItem = ({item, index}: any) => (
    <View style={styles.renderItem}>
      <View
        style={[
          styles.flatlistcardview,
          {backgroundColor: theme == 'light' ? colors.charcol : colors.black},
        ]}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            resizeMode="contain"
            style={styles.flatimageStyle}
            source={{uri: item.image}}
          />
          <View>
            <Text style={styles.names}>{item.name}</Text>
            <Text style={styles.flatlistitemdesc}>{item.vendorName}</Text>

            <Text style={styles.flatlistitemdesc}>{item.description}</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.priceView}></View>
              <Text style={styles.actualprice}>₹ {item.price} </Text>
              <Text style={styles.discountprice}>
                ₹ {item.price - item.discount}
              </Text>
            </View>

            <View style={styles.ratingView}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.logoStar}
                  source={require('../../../assets/Images/star.png')}
                />
                <Text style={styles.rating}>{item.avgRating}</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            user_token === 'TOKEN_AS_GUEST'
              ? setAskForLogin(true)
              : bookService(item)
          }
          style={styles.bookView}>
          <Text style={styles.bookText}>{t('Book Now')}</Text>
          <Image
            style={styles.logoRight}
            resizeMode="contain"
            source={require('../../../assets/Images/right_icon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const bookService = (item: any) => {
    const select_service = {
      name: item.name,
      price: item.price,
      vendor: item.vendorName,
      quantity: 1,
      id: item._id,
    };

    navigation.navigate('SelectDateTime', {
      select_service,
    });
  };

  return (
    <>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={[
            styles.container,
            {backgroundColor: theme == 'light' ? colors.white : colors.black},
          ]}
          showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <Modal
              animationType="slide"
              onRequestClose={() => {
                setShow(false);
              }}
              visible={show}
              transparent={true}>
              <ImageViewer imageUrls={imagearray} />
            </Modal>

            <Ionicons
              name="chevron-back"
              color={colors.white}
              size={30}
              onPress={() => {
                navigation.goBack();
              }}></Ionicons>
          </View>
          <PagerView
            style={styles.pager}
            initialPage={0}
            onPageSelected={e => {
              getCurrentPageIndex(e);
            }}>
            {subservices.serviceDetail?.serviceImages.map(
              (item: any, index: any) => (
                <Pressable
                  onPress={() => {
                    setShow(true);
                  }}
                  key={index}>
                  <Image source={{uri: item}} style={styles.logo}></Image>
                </Pressable>
              ),
            )}
          </PagerView>

          <View style={styles.serviceView}>
            <View
              style={[
                styles.cardview,
                {
                  backgroundColor:
                    theme == 'light' ? colors.white : colors.charcol,
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  resizeMode="contain"
                  style={styles.imageStyle}
                  source={{uri: subservices?.serviceDetail?.thumbnail}}
                />
                <View style={{margin: 10}}>
                  <Text
                    style={[
                      styles.serviceDes,
                      {
                        color:
                          theme == 'light' ? colors.secondary : colors.white,
                      },
                    ]}>
                    {subservices?.serviceDetail?.serviceName}
                  </Text>
                  <Text
                    style={[
                      styles.itemdesc,
                      {
                        color:
                          theme == 'light' ? colors.secondary : colors.white,
                      },
                    ]}>
                    {subservices?.serviceDetail?.serviceDes}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <FlatList
              nestedScrollEnabled={true}
              data={subservices?.vendorServices}
              renderItem={renderItem}
              keyExtractor={item => item}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainerStyle}
            />
          </View>
        </ScrollView>

        <Alert
          AlertVisible={
            user_token === 'TOKEN_AS_GUEST' ? AskForLogin : AlertVisible
          }
          setAlertVisible={(value: any) =>
            user_token === 'TOKEN_AS_GUEST'
              ? setAskForLogin(value)
              : setAlertVisible(value)
          }
          AlertMsgType="loggedInasGuest"
          AlertMsg={
            user_token === 'TOKEN_AS_GUEST'
              ? 'Please login to Book Service'
              : ''
          }
          navigation={navigation}
        />
      </View>
    </>
  );
};

export default ServiceDetail;
