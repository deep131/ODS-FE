import React,{useContext} from 'react';
import {Text, TouchableOpacity,View} from 'react-native';
import {useTranslation} from 'react-i18next'; 
import {colors} from '../../../styles/variables';
import moment from 'moment';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Header from '../../../components/Header/Header';
import {styles} from './BookingDetailsStyles';
import {ThemeContext} from '../../../Theme/Theme';

const BookingDetails = ({navigation,route}: any) => {
  const bookingdetails = route.params.bookingdetails; 
  const {theme, setTheme} = useContext(ThemeContext);
  const {t, i18n} = useTranslation();
  return (
    <View style={{backgroundColor:theme == "light" ? colors.white : colors.black,flex:1}}>
      <Header
        name={t('Booking Details')}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.darkPrimary}
        iconColor={colors.white}
        back={true}
        theme={theme}
      />

      <View style={styles.container}>
        <View style={styles.bookContainer}>
          <Text style={[styles.bookingTitle,{color: theme == 'light' ? colors.secondary : colors.white }]}>{t("Booking Id")}: </Text>
          <Text style= {styles.bookingNumber}>{bookingdetails._id}  </Text>

          <TouchableOpacity activeOpacity={0.8} style={styles.order}>
            <Text style={[styles.orderStatus, {color: colors.white}]}>
              
              {t("Invoice")}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.orderPending, { backgroundColor:  bookingdetails.status==="Pending" ?colors.lightblue:colors.lightgreen}]}>
          <Text style={[styles.orderStatus, { color:  bookingdetails.status==="Pending" ?colors.darkSecondary:colors.darkPrimary}]}>
            {bookingdetails.status}
          </Text>
        </View>

        <View style={styles.calendar}>
          <IonIcon name="calendar" color={colors.darkSecondary} size={20} />

          <Text style={[styles.bookingDate,,{color: theme == 'light' ? colors.secondary : colors.white }]}>
          {t("Booking Date")} : {moment.utc(bookingdetails.orderDate).local().format('DD MMM yyyy HH:mm')}
          </Text>
        </View>

        <View style={styles.bookContainer}>
          <IonIcon name="calendar" color={colors.darkSecondary} size={20} />
          <Text style={[styles.bookingDate,{color: theme == 'light' ? colors.secondary : colors.white }]}>
          {t("Service Date")}  :{moment.utc(bookingdetails.serviceDate).local().format('DD MMM yyyy HH:mm')}
            
          </Text>
        </View>
        <View style={styles.bookContainer}>
          <IonIcon name="location" color={colors.darkSecondary} size={20} />
          <Text style={[styles.userLocatiton, ,{color: theme == 'light' ? colors.secondary : colors.white }]}>
          {bookingdetails.address.street}, {bookingdetails.address.city}, {bookingdetails.address.state},
          {bookingdetails.address.pincode},{bookingdetails.address.country}
          </Text>
        </View>
        <View style={styles.top}>
          <Text style={[styles.paymentMethod,{color: theme == 'light' ? colors.secondary : colors.white }]}>{t("Payment Method")}</Text>
        </View>
        <View style={styles.cash}>
          <Text style={[styles.cashTitle,{color: theme == 'light' ? colors.darkGray : colors.white }]}>Online</Text>

          <Text style={[styles.payment,{color: theme == 'light' ? colors.darkGray : colors.white }]}>
            {t("Payment status")}: <Text style={{color:bookingdetails.isPaid===true? colors.darkPrimary:colors.red}}>{bookingdetails.isPaid===true?"Paid":"Unpaid"}</Text>
          </Text>
        </View>
        <View style={styles.top}>
          <Text style={[styles.paymentMethod,{color: theme == 'light' ? colors.secondary : colors.white }]}>{t("Amount")}: {bookingdetails.payableAmount}₹</Text>
        </View>
      </View>
      <View style={[styles.hr,{borderBottomColor: theme == 'light' ? colors.secondary : colors.white }]} />
      <View style={styles.container}>
        <Text style={[styles.paymentMethod,{color: theme == 'light' ? colors.secondary : colors.white }]}>{t("Booking Summary")}</Text>
      </View>
      <View style={[styles.serviceCol,{backgroundColor: theme == 'light' ? colors.lightblue : colors.lightblue }]}>
        <View style={styles.service}>
          <Text style={[styles.paymentMethod,{color: theme == 'light' ? colors.secondary : colors.black }]}>{t("Service Info")}</Text>
          <Text style={[styles.paymentMethod,{color: theme == 'light' ? colors.secondary : colors.black }]}>{t("Service Cost")}</Text>
        </View>
      </View>
      <View style={styles.top}>
        <View style={styles.summaryView}>
          <Text style={[styles.serviceLeftText, {color: theme == 'light' ? colors.secondary : colors.white }]}> {bookingdetails.title} x {bookingdetails.quantity}</Text>
          <Text style={[styles.itemAmount, {color: theme == 'light' ? colors.secondary : colors.white }]}>{bookingdetails.price}₹</Text>
        </View>

        <Text style={[styles.repair,{color: theme == 'light' ? colors.secondary : colors.white }]}>{bookingdetails.orgTitle}</Text>

        <View style={[styles.hrHaf,{borderBottomColor: theme == 'light' ? colors.secondary : colors.white }]} />

        <View style={styles.summaryView}>
          <Text style={[styles.serviceLeftText,{color: theme == 'light' ? colors.secondary : colors.white }]}>{t("Discounted Price")}</Text>
          <Text style={[styles.subTotalAmount,{color: theme == 'light' ? colors.secondary : colors.white }]}>{bookingdetails.discountedPrice}₹</Text>
        </View>

        <View style={styles.summaryView}>
          <Text style={[styles.serviceLeftSubText,{color: theme == 'light' ? colors.secondary : colors.white }]}>{t("Tax")}</Text>
          <Text style={[styles.discountAmount,{color: theme == 'light' ? colors.secondary : colors.white }]}>{bookingdetails.taxAmount}₹</Text>
        </View>
        <View style={[styles.hrHaf,{borderBottomColor: theme == 'light' ? colors.secondary : colors.white }]} />
        <View style={styles.summaryView}>
          <Text style={[styles.serviceLeftText,{color: theme == 'light' ? colors.secondary : colors.white }]}>{t("Grand Total")}</Text>
          <Text style={[styles.subTotalAmount,{color: theme == 'light' ? colors.secondary : colors.white }]}>{bookingdetails.total}₹</Text>
        </View>
      </View>

      <View style={styles.btn}>
        <TouchableOpacity activeOpacity={0.7} style={styles.btnView}>
          <Text style={[styles.orderStatus, {color: '#FF6800'}]}>{t("Cancel")}</Text>
        </TouchableOpacity>
      </View>
   
    </View>
  );
};

export default BookingDetails;
