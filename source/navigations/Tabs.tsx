import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState,useContext} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu from '../components/BottomSheets/Menu/Menu';
import Bookings from '../screens/Home/Bookings/Bookings';
import Home from '../screens/Home/Dashboard/Dashboard';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../Theme/Theme';
import Profile from '../screens/Home/Profile/Profile';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  tabHeight,
} from '../styles/variables';
import { t } from 'i18next';


const Tab = createBottomTabNavigator();



type TabViewProps = {
  focused: boolean;
  source: any;
};
const Tabs = ({navigation}: any) => {
  const [visitModal, setModalVisible] = useState(false);
  const {theme,setTheme}:any = useContext(ThemeContext);

  const screenOptions = {
    headerShown: false,
    tabBarActiveTintColor:theme == 'light'? colors.charcol :colors.white,
    tabBarStyle: {
      backgroundColor:theme=='light'?colors.white:colors.black,
      height: Platform.OS === 'ios' ? tabHeight + 25 : tabHeight,
      // borderTopLeftRadius: borderRadius.boxRadius,
    //  borderTopRightRadius: borderRadius.boxRadius,
      borderTopWidth: 0,
      // borderWidth: 3,
      borderColor: '#eee',
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 3},
      elevation: 10,
    },

    tabBarShowLabel: true,

    tabBarItemStyle: {
      margin: 2,
    },
    tabBarLabelStyle: {
      fontFamily: fontFamily.medium,
      fontSize: fontSize.extraSmall,
      marginBottom: Platform.OS === 'ios' ? 8 : 0,
    },
  };

  const styles = StyleSheet.create({
    middleBtn: {
      justifyContent: 'center',
      borderRadius: borderRadius.circle,
      zIndex: 5,
  
    },
  });

  const TabView = ({focused, source}: TabViewProps) => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Ionicons
          name={source}
          style={{
            color: focused ? colors.darkPrimary : '#AFB2B5',
          }}
          size={22}
        />
      </View>
    );
  };

  const TabViewMiddle = ({focused, source}: TabViewProps) => {
    return (

        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
          style={{
            width: responsiveWidth(11),
            height: responsiveWidth(11),
            justifyContent: 'center',
            borderRadius: borderRadius.circle,left:5
          }}>
       <Ionicons
          name={source}
          style={{
            color: focused ? colors.darkPrimary : '#AFB2B5',left:5
          }}
          size={22}
        />
        <Text style={{fontFamily:fontFamily.medium,fontSize:fontSize.extraSmall,top:5,color:"gray"}}>{t("Menu")}</Text>
        </TouchableOpacity>
      //</LinearGradient>
    );
  };

  return (
    <>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name={t("Home")}
          component={Home}
          options={{
            tabBarIcon: ({focused}: any) => {
              return <TabView focused={focused} source={`home-outline`} />;
            },
          }}
        />


<Tab.Screen
          name="Menu"
          component={Home}
          options={{
            tabBarIcon: ({focused}: any) => {
              return <TabViewMiddle focused={focused} source={`grid-outline`} />;
            },
            tabBarLabel: () => {
              return null;
            },
          }}
        />
         <Tab.Screen
          name={t("Bookings")}
          component={Bookings}
          options={{
            tabBarIcon: ({focused}: any) => {
              return <TabView focused={focused} source={`calendar-outline`} />;
            },
          }}
        />

        <Tab.Screen
          name={t("Profile")}
          component={Profile}
          options={{
            tabBarIcon: ({focused}: any) => {
              return <TabView focused={focused} source={`person-outline`} />;
            },
          }}
        />
      </Tab.Navigator>

      <Menu
        visitModal={visitModal}
        navigation={navigation}
        setModalVisible={(value: boolean) => {
          setModalVisible(value);
        }}
      />
    </>
  );
};

export default Tabs;
