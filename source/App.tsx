import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import messaging, {
  firebase,
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState, useContext} from 'react';
import {Appearance, LogBox, Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {AuthContext} from './contexts/authContext';
import Tabs from './navigations/Tabs';
import Store from './redux/Store';
import Login from './screens/Auth/Login/Login';
import OnBoarding from './screens/Auth/OnBoarding/OnBoarding';
import Otpverification from './screens/Auth/Otp/OtpVerification';
import ResetPassword from './screens/Auth/ResetPassword/ResetPassword';
import SignUp from './screens/Auth/SignUp/SignUp';
import AboutUs from './screens/Home/AboutUs/AboutUs';
import BookingDetails from './screens/Home/BookingDetails/BookingDetails';
import Bookings from './screens/Home/Bookings/Bookings';
import Cart from './screens/Home/Cart/Cart';
import ChatwithAdmin from './screens/Home/ChatwithAdmin/ChatwithAdmin';
import Checkout from './screens/Home/Checkout/Checkout';
import Coupons from './screens/Home/Coupons/Coupons';
import Help from './screens/Home/HelpandSupport/Help';
import Notification from './screens/Home/Notification/Notification';
import ParticularPolicy from './screens/Home/ParticularPolicy/ParticularPolicy';
import Policies from './screens/Home/Policies/Policies';
import Profile from './screens/Home/Profile/Profile';
import Search from './screens/Home/Search/Search';
import SelectDateTime from './screens/Home/SelectDateTime/SelectDateTime';
import SelectLocation from './screens/Home/SelectLocation/SelectLocation';
import ServiceDetail from './screens/Home/ServiceDetail/ServiceDetail';
import Services from './screens/Home/Services/Services';
import SubCategories from './screens/Home/SubCategories/SubCategories';
import AddressList from './screens/Home/AddressList/AddressList';
import {colors, darkColors} from './styles/variables';
import {
  FCM_TOKEN,
  PAGER,
  STORAGE,
  TOKEN_PREFIX,
  THEME,
} from './utils/commonUtils';
import {StripeProvider} from '@stripe/stripe-react-native';
import './Languages/Langi18';
import {ThemeContext } from './Theme/Theme'

const RootStack = createStackNavigator();

const options = {
  headerShown: false,
};

LogBox.ignoreAllLogs(); // Ignore log notification by message

const GetStarted = () => (
  <RootStack.Navigator screenOptions={options}>
    <RootStack.Screen name="OnBoarding" component={OnBoarding} />
  </RootStack.Navigator>
);

const AuthStack = () => (
  <RootStack.Navigator screenOptions={options}>
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="SignUp" component={SignUp} />
    <RootStack.Screen name="Otpverification" component={Otpverification} />
    <RootStack.Screen name="ResetPassword" component={ResetPassword} />
    <RootStack.Screen name="HomeStack" component={HomeStack} />
  </RootStack.Navigator>
);

const HomeStack = () => (
  <RootStack.Navigator screenOptions={options}>
    <RootStack.Screen name="Tabs" component={Tabs} />
    <RootStack.Screen name="Notification" component={Notification} />
    <RootStack.Screen name="Bookings" component={Bookings} />
    <RootStack.Screen name="SubCategories" component={SubCategories} />
    <RootStack.Screen name="Services" component={Services} />
    <RootStack.Screen name="ServiceDetail" component={ServiceDetail} />
    <RootStack.Screen name="Cart" component={Cart} />
    <RootStack.Screen name="SelectDateTime" component={SelectDateTime} />
    <RootStack.Screen name="SelectLocation" component={SelectLocation} />
    <RootStack.Screen name="Checkout" component={Checkout} />
    <RootStack.Screen name="BookingDetails" component={BookingDetails} />
    <RootStack.Screen name="Profile" component={Profile} />
    <RootStack.Screen name="AddressList" component={AddressList} />
    <RootStack.Screen name="Coupons" component={Coupons} />
    <RootStack.Screen name="AboutUs" component={AboutUs} />
    <RootStack.Screen name="Help" component={Help} />
    <RootStack.Screen name="Policies" component={Policies} />
    <RootStack.Screen name="ParticularPolicy" component={ParticularPolicy} />
    <RootStack.Screen name="ChatwithAdmin" component={ChatwithAdmin} />
    <RootStack.Screen name="Search" component={Search} />
  </RootStack.Navigator>
);

const App = () => {
  // const [internetCheck, setinternetCheck] = useState(false);
  const [userStateLogginCheck, setuserLogginCheck] = useState(false);
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  useEffect(() => {
    getUserLoggedIn();
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);

    PushNotification.createChannel(
      {
        channelId: 'channel_id', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: true, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }, []);

  useEffect(() => {
    appUser();
    checkMode();
    const type = 'notification';
    if (Platform.OS === 'ios') {
      registerForRemoteMessages();
      setTimeout(() => {
        getToken();
      }, 500);
      PushNotificationIOS.addEventListener(type, onRemoteNotification);
    } else {
      getToken();
      onMessage();
    }

    return () => {
      PushNotificationIOS.removeEventListener(type);
    };
  }, []);

  const checkMode = async () => {
    try {
      let currentMode: any = await AsyncStorage.getItem(THEME);
      if (currentMode) {
        setTheme(currentMode);
      } else {
        setTheme(Appearance.getColorScheme());
      }
    } catch (error) {
      console.log(error, 'while fetching apperance');
    }
  };

  const LightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.bgColor,
    },
  };

  const Dark = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.black,
    },
  };

  const getUserLoggedIn = async () => {
    let userLoginCheck = await AsyncStorage.getItem('login');
    if (userLoginCheck === 'true') {
      setuserLogginCheck(true);
    } else {
      setuserLogginCheck(false);
    }
    console.log('User LoggedIn:', userStateLogginCheck);
  };

  const onRemoteNotification = (notification: any) => {
    const isClicked = notification.getData().userInteraction === 1;

    if (isClicked) {
      // Navigate user to another screen
    } else {
      // Do something else with push notification
    }
  };

  const getToken = async () => {
    await messaging()
      .getToken()
      .then(x => {
        AsyncStorage.setItem(FCM_TOKEN, x);
      })
      .catch(e => console.log('getToken error=', e));
  };

  const registerForRemoteMessages = () => {
    firebase
      .messaging()
      .registerDeviceForRemoteMessages()
      .then(() => {
        requestPermissions();
      })
      .catch(e => console.log(e));
  };

  const requestPermissions = () => {
    firebase
      .messaging()
      .requestPermission()
      .then((status: FirebaseMessagingTypes.AuthorizationStatus) => {
        if (status === 1) {
          onMessage();
        } else {
        }
      })
      .catch(e => console.log(e));
  };

  const showNotification = (notification: any) => {
    PushNotification.localNotification({
      channelId: 'channel_id',
      title: notification.title,
      message: notification.body!,
    });
  };

  const onMessage = async () => {
    firebase.messaging().onMessage(response => {
      showNotification(response.notification);
    });
  };

  const [state, dispatch] = React.useReducer(
    (prevstate: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevstate,
            userToken: action.token,
            initialRoute: action.initialRoute,
            isLoading: false,
            pager: action.pager,
          };

        case 'SIGN_UP':
          return {
            ...prevstate,
            isSignout: false,
            initialRoute: action.data.initialRoute,
          };

        case 'SIGN_OUT':
          return {
            ...prevstate,
            pager: action.data.pager,
            userToken: null,
            isSignout: true,
            // initialRoute: action.data.initialRoute
          };

        case 'Verify_OTP':
          return {
            ...prevstate,
            isSignout: false,
            userToken: action.data.token,
            initialRoute: action.data.initialRoute,
          };

        case 'Get_Started':
          return {
            ...prevstate,
            userToken: null,
            pager: action.data.pager,
            initialRoute: action.data.initialRoute,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      initialRoute: 'GetStarted',
      pager: false,
      storage: false,
    },
  );

  const appUser = async () => {
    try {
      let userToken = await AsyncStorage.getItem(TOKEN_PREFIX);
      let pager = await AsyncStorage.getItem(PAGER);
      let initialRoute = 'App';
      dispatch({
        type: 'RESTORE_TOKEN',
        token: userToken,
        initialRoute,
        pager: pager,
      });
    } catch (e) {}
  };

  const authContext = React.useMemo(
    () => ({
      getStarted: async () => {
        try {
          await AsyncStorage.setItem(PAGER, 'true');
          await AsyncStorage.setItem(STORAGE, 'false');
          let initialRoute = 'Auth';
          let pager = true;
          let storage = 'true';
          dispatch({
            type: 'Get_Started',
            data: {pager: pager, initialRoute, storage: storage},
          });
        } catch (e) {}
      },

      verifyOTP: (data: any, setverfying: any) => {
        try {
          setverfying(false);
          let token = 'token';
          let initialRoute = 'App';
          dispatch({
            type: 'Verify_OTP',
            data: {token: token, initialRoute},
          });
          AsyncStorage.setItem(TOKEN_PREFIX, token);
          // API.post(`enduser/Verify_OTP/`, data).then(async (res: any) => {
          //   try {
          //     if (res.data.response_code == 200) {
          //       let a = decryptData(res.data.response_data);
          //       setverfying(false);
          //       // await AsyncStorage.setItem(TOKEN_PREFIX, res.data.data.token);
          //       // await AsyncStorage.setItem(USER_DATA, JSON.stringify(res.data.data.user));
          //     }
          //   }
          //   catch (e) {
          //     setverfying(false);
          //   }
          // }).catch((err: any) => {
          //   setverfying(false);
          // })
        } catch (e) {
          setverfying(false);
        }
      },

      signOut: async (setloggingOut: any, loggingOut: any) => {        
        try {
          await AsyncStorage.removeItem(TOKEN_PREFIX);
          await AsyncStorage.removeItem(THEME);
          await AsyncStorage.removeItem(FCM_TOKEN);
          await firebase.messaging().deleteToken();
          setTheme('light');
          let pager = await AsyncStorage.getItem(PAGER);
          dispatch({
            type: 'SIGN_OUT',
            data: {pager: pager},
          });
          setloggingOut(false);
        } catch (e) {
          setloggingOut(false);
        }
      },
    }),
    [],
  );


  return (
    <StripeProvider publishableKey="pk_test_51MOFcuSBaXXm2CghG09GQthk5S5wBI63jfsmWjn3EzjcHY82pyGKkOdHUNTNZyt3BYcWHXfBjsk0rKaJC7b5sZA400ncw9uLmT">
      <ThemeContext.Provider
        value={{
          colors: theme == 'light' ? colors : darkColors,
          setTheme,
          theme,
        }}>
        <Provider store={Store}>
          <AuthContext.Provider value={{...authContext, ...state}}>
            <NavigationContainer theme={theme == 'light' ? LightTheme : Dark}>
              <RootStack.Navigator screenOptions={options}>
                {state?.userToken != null ? (
                  <>
                    <RootStack.Screen name="App" component={HomeStack} />
                  </>
                ) : (
                  <>
                    {state?.pager && !state?.userToken ? (
                      <>
                        <RootStack.Screen name="Auth" component={AuthStack} />
                      </>
                    ) : (
                      <>
                        <RootStack.Screen
                          name="GetStarted"
                          component={GetStarted}
                        />
                      </>
                    )}
                  </>
                )}
              </RootStack.Navigator>
            </NavigationContainer>
          </AuthContext.Provider>
        </Provider>
      </ThemeContext.Provider>
    </StripeProvider>
  );
};

export default App;
