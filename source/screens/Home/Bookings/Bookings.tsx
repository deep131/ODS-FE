import React, {useState,useEffect,useContext} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../styles/variables';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {tokenStorage} from '../../../redux/Actions/AuthanticationAction/AuthAction';
import Header from '../../../components/Header/Header';
import { ODSbooking, ODSpostbooking} from '../../../utils/service';
import {AuthContext} from '../../../contexts/authContext';
import {styles} from './BookingStyles';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../../Theme/Theme';

const Bookings = ({navigation}: any) => {

  const orderType = [
    {
      id: 1,
      name: 'All',
      image: require('../../../assets/Images/all.png'),
    },
    {
      id: 2,
      name: 'Pending',
      image: require('../../../assets/Images/pending.png'),
    },
    {
      id: 3,
      name: 'Confirmed',
      image: require('../../../assets/Images/accepted.png'),
    },
    
    
   
  ];

 
  const appState = useSelector((state: any) => state.authReducers);
  const user_token = appState?.token;
  const {t, i18n} = useTranslation();
  const [selectedOrderTypeId, setselectedOrderTypeId] = useState(1);
  const {signOut}: any = useContext(AuthContext);
  const [loggingOut, setloggingOut] = useState(false);
  const [bookingData, setBookingData]: any = useState([]);
  const dispatch = useDispatch();
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      
      getbooking();
    });

    return unsubscribe;
  }, [navigation]);
 
    const getbooking = async () => {
      const data = await ODSbooking();
      if (data.status===200) {
      setBookingData(data.data.result)
      console.log("length",data.data.result);
      
        }
    };
    let confirm=[];


  const renderItem = ({item, index}: any) => (
    <TouchableOpacity
      style={[
        styles.renderItem,
        {
          backgroundColor:
            selectedOrderTypeId == item.id ? colors.darkPrimary : '#f2f2f2',
        },
      ]}
      activeOpacity={0.9}
      onPress={() => {
        setselectedOrderTypeId(item.id);
      }}>
      <Image
        resizeMode="contain"
        style={styles.orderLogo}
        source={item.image}
      />
      <Text
        style={[
          styles.orderName,
          {
            color:
              selectedOrderTypeId == item.id ? colors.white : colors.secondary,
          },
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderItem1 = ({item, index}: any) => (
    <View style={[styles.cardview,{backgroundColor: theme == "light" ? colors.white : colors.black}]}>
      <View style={styles.renderItem1}>
        <Text style={[styles.bookingNumber,{color: theme == "light" ? colors.secondary : colors.white}]}>{t("Booking Id")} : <Text style={{color:colors.darkSecondary}}>{item._id}</Text> </Text>
        <View
          style={[
            styles.statusView,
            {
              backgroundColor: item.status === "Pending" ? colors.lightblue : colors.lightgreen
            },
          ]}>
          <Text style={[styles.orderStatus, {color: item.status === "Pending" ? colors.darkSecondary : colors.darkPrimary}]}>

            {item.status}
          </Text>
        </View>
      </View>
      <Text style={[styles.bookingDate, {color: theme == "light" ? colors.secondary : colors.white}]}>{t("Service")}: {item.title}</Text>
      <Text style={[styles.bookingDate,{color: theme == "light" ? colors.secondary : colors.white}]}>{t("Booking Date")}: {moment.utc(item.orderDate).local().format('DD MMM yyyy HH:mm')}</Text>

      <Text style={[styles.serviceDate,{color: theme == "light" ? colors.secondary : colors.white}]}>{t("Service Date")} :{moment.utc(item.serviceDate).local().format('DD MMM yyyy HH:mm')}</Text>

      <View style={styles.bookingAmount}>
        <Text style={[styles.totalAmount,{color: theme == "light" ? colors.darkGray : colors.white}]}>{t("Total Amount")} :<Text style={{color:colors.green}}>{item.total}₹</Text></Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{position: 'absolute', right: 10}}
          onPress={() => pressBooking(item)}>
          <Text style={[styles.viewDetails,{color: theme == "light" ? colors.darkGray : colors.white}]}>{t("View Details")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const pressBooking =async(item:any)=>{
      const orderId = item._id
      const data = await ODSpostbooking({
        orderId
      });
      if(data.status ===200){
         navigation.navigate("BookingDetails",{
          bookingdetails:data.data.result
        })
      }
    };


  const logOut = () => {
    signOut(setloggingOut, loggingOut);
    dispatch(tokenStorage('') as any);
    navigation.navigate('Login');
  };

  return (
    <>
      <Header
        name={t('My Bookings')}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.darkPrimary}
        iconColor={colors.white}
        back={false}
        theme= {theme} 
      />

      <View style={styles.container}>
        {user_token == 'TOKEN_AS_GUEST' ? (
          <View style={{alignSelf: 'center',backgroundColor:theme==='light'?colors.white:colors.black,justifyContent:'center',flex:1}}>
            <Image
              style={styles.appLogo}
              resizeMode="contain"
              source={require('../../../assets/Images/applogo.png')}
            />

            <Text style={theme==="light"?styles.title:styles.title_dark}>You're logged in by guest user.</Text>
            <TouchableOpacity onPress={() => logOut()} style={theme==="light"?styles.btn:styles.btn_dark}>
              <Text style={theme==="light"?styles.btnText:styles.btnText_dark}>Login</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            {/* <View style={styles.searchbarview}>
              <TextInput
                style={styles.input}
                placeholder="Search Here"
                placeholderTextColor={'gray'}></TextInput>
              <View style={styles.verticleLine}></View>
              <TouchableOpacity>
                <Image
                  resizeMode="contain"
                  style={styles.searchicon}
                  source={require('../../../assets/Images/serachicon.png')}></Image>
              </TouchableOpacity>
            </View> */}

            <View style={[styles.top,{backgroundColor:theme == "light" ? colors.white:colors.black}]}>
              <FlatList
                data={orderType}
                renderItem={renderItem}
                horizontal={true}
                keyExtractor={(item: any) => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.containerOrder}
              />
            </View>

            <View style={[styles.hr,{borderBottomColor:theme=="light" ? colors.secondary : colors.white}]} />
          </View>
        )}

        {user_token == 'TOKEN_AS_GUEST' ? null : (
          <View style={theme == 'light' ? styles.flex : styles.flex_dark}>
            <FlatList
              data={bookingData.reverse()}
              renderItem={renderItem1}
              keyExtractor={(item: any) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.containerBooking}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default Bookings;