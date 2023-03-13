import React, {useEffect, useState, useContext} from 'react';
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../styles/variables';
import {useTranslation} from 'react-i18next';
import moment from 'moment';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Alert from '../../../components/Alert/Alert';
import Button from '../../../components/Button/Button';
import Header from '../../../components/Header/Header';
import {ThemeContext} from '../../../Theme/Theme';
import {Odspayment, Odspublishablekey} from '../../../utils/service';
import {styles} from './CheckoutStyles';
import {useStripe} from '@stripe/stripe-react-native';

const Checkout = ({navigation, route}: any) => {
  const address = route.params.select_address;
  const service = route.params.select_service;
  const momentObj = route.params.momentObj;
  const order = route.params.order_details;
  const datatime = momentObj.toISOString();
  const {t, i18n} = useTranslation();

  const [selectedPaymentMethod, setselectedPaymentMethod]: any = useState('');
  const [shouldShow, setShouldShow] = useState(false);
  const [AlertVisible, setAlertVisible] = useState(false);
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [loading, setLoading] = useState(false);

  const [publishablekey, setPublishableKey] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const {theme, setTheme} = useContext(ThemeContext);

  const paymentMethods: any = [
    {
      id: 1,
      name: 'Online Payment',
      icon: 'card',
      checked: false,
    },
    {
      id: 2,
      name: 'Cash',
      icon: 'wallet',
      checked: false,
    },
  ];

  const selectedPaymentGateway = (item: any) => {
    setselectedPaymentMethod(item);
    if (selectedPaymentMethod.id == item.id) {
      setShouldShow(true);
    }
  };

  const fetchPaymentSheetParams = async () => {
    const orderId = order.orderId;

    const apicall = await Odspayment({
      orderId,
    });

    if (apicall.status === 200) {
      setClientSecret(apicall.data.clientSecret);
    }

    return {
      paymentIntent: apicall.data.clientSecret,
    };
  };

  const initializePaymentSheet = async () => {
    const {paymentIntent} = await fetchPaymentSheetParams();

    const {error} = await initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
      paymentIntentClientSecret: paymentIntent, // used on bhalf of paymentIntent
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe', // set to users name in future
      },
    });

    if (!error) {
      console.log(error, 'is error ..>>>>>');
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const {error} = await presentPaymentSheet();

    if (error) {
      console.log(`Error code: ₹{error.code}`, error.message);
    } else {
      navigation.navigate('Tabs', {screen: 'Bookings'});
    }
  };

  const getpk = async () => {
    const key = await Odspublishablekey();
    if (key.status === 200 && key.data) {
      setPublishableKey(key.data);
    }
  };

  useEffect(() => {
    getpk();
  }, []);

  useEffect(() => {
    const opensheet = () => {
      setLoading(true);
      initializePaymentSheet();
    };
    opensheet();
  }, []);

  const alertCallBack = () => {
    setAlertVisible(false);
    navigation.navigate('Bookings');
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme == 'light' ? colors.white : colors.black},
      ]}>
      <Header
        name={t('Checkout')}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.darkPrimary}
        iconColor={colors.white}
        back={true}
        theme={theme}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mtLarge}>
          <Text
            style={[
              styles.scheduleTitle,
              {color: theme == 'light' ? colors.secondary : colors.white},
            ]}>
            {t('Service Schedule')}
          </Text>

          <View
            style={[
              styles.serviceScheduleView,
              {
                backgroundColor:
                  theme == 'light' ? colors.lightgreen : colors.charcol,
              },
            ]}>
            <Text
              style={[
                styles.dateTitle,
                {color: theme == 'light' ? colors.secondary : colors.white},
              ]}>
              {moment(datatime).format('MM/DD/YYYY')}
            </Text>

            <View
              style={[
                styles.verticleLine,
                {backgroundColor: theme == 'light' ? '#909090' : colors.white},
              ]}></View>

            <View>
              <Text
                style={[
                  styles.dayTitle,
                  {color: theme == 'light' ? colors.secondary : colors.white},
                ]}>
                {moment(datatime).format('dddd')}
              </Text>
              <Text
                style={[
                  styles.timeTitle,
                  {color: theme == 'light' ? colors.secondary : colors.white},
                ]}>
                {moment(datatime).format('HH:mm')}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.mtLarge}>
          <Text
            style={[
              styles.scheduleTitle,
              {color: theme == 'light' ? colors.secondary : colors.white},
            ]}>
            {t('Service Information')}
          </Text>

          <View
            style={[
              styles.serviceScheduleView1,
              {
                backgroundColor:
                  theme == 'light' ? colors.lightgreen : colors.charcol,
              },
            ]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={[
                  styles.infoTitle,
                  {color: theme == 'light' ? colors.secondary : colors.white},
                ]}>
                {t('Address')}
              </Text>
            </View>

            <View style={styles.loctionIconView}>
              <IonIcon name="location" color={colors.darkPrimary} size={20} />
              <Text
                style={[
                  styles.addressTitle,
                  {color: theme == 'light' ? colors.secondary : colors.white},
                ]}>
                {address.street}, {address.city}, {address.pincode},{' '}
                {address.state}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.hr,
            {
              borderBottomColor:
                theme == 'light' ? colors.secondary : colors.white,
            },
          ]}
        />
        <View style={styles.mtLarge}>
          <Text
            style={[
              styles.scheduleTitle,
              {color: theme == 'light' ? colors.secondary : colors.white},
            ]}>
            {t('Cart Summary')}
          </Text>

          <View style={styles.summaryView}>
            <Text
              style={[
                styles.dayTitle,
                ,
                {color: theme == 'light' ? colors.secondary : colors.white},
              ]}>
              {service.name} X {service.quantity}
            </Text>

            <Text
              style={[
                styles.price,
                ,
                {color: theme == 'light' ? colors.secondary : colors.white},
              ]}>
              {order.price}₹
            </Text>
          </View>

          <Text
            style={[
              styles.dateTitle,
              ,
              {color: theme == 'light' ? colors.secondary : colors.white},
            ]}>
            {service.vendor}
          </Text>

          <View
            style={[
              styles.hrHaf,
              {
                borderBottomColor:
                  theme == 'light' ? colors.secondary : colors.white,
              },
            ]}
          />

          <View style={styles.summaryView}>
            <Text
              style={[
                styles.dayTitle,
                {color: theme == 'light' ? colors.secondary : colors.white},
              ]}>
              {t('Discounted Price')}
            </Text>

            <Text
              style={[
                styles.price,
                ,
                {color: theme == 'light' ? colors.secondary : colors.white},
              ]}>
              {order.subTotal}₹
            </Text>
          </View>

          <View style={styles.summaryView}>
            <Text
              style={[
                styles.timeTitle,
                ,
                {color: theme == 'light' ? colors.secondary : colors.white},
              ]}>
              {t('Tax')}
            </Text>

            <Text
              style={[
                styles.price,
                {color: theme == 'light' ? colors.secondary : colors.white},
              ]}>
              {order.tax}₹
            </Text>
          </View>

          <View
            style={[
              styles.hrHaf,
              {
                borderBottomColor:
                  theme == 'light' ? colors.secondary : colors.white,
              },
            ]}
          />

          <View style={styles.summaryView}>
            <Text
              style={[
                styles.dayTitle,
                {color: theme == 'light' ? colors.secondary : colors.white},
              ]}>
              {t('Grand Total')}
            </Text>

            <Text
              style={[
                styles.price,
                {color: theme == 'light' ? colors.secondary : colors.white},
              ]}>
              {order.totalAmount}₹
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.mt}>
        <Button
          name={t('Confirm Order')}
          color={colors.darkPrimary}
          onPress={() => openPaymentSheet()}
        />
      </View>

      {/* <Alert
        AlertVisible={AlertVisible}
        setAlertVisible={(value: any) => setAlertVisible(value)}
        AlertMsgType="confirmOrder"
        AlertMsg="Are you sure want to Order?"
        navigation={navigation}
        callBack={alertCallBack}
      /> */}
    </View>
  );
};

export default Checkout;
