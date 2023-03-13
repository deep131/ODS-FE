import React, {useEffect, useState, useContext} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import {colors, responsiveHeight} from '../../../styles/variables';
import {useTranslation} from 'react-i18next';
import {launchImageLibrary} from 'react-native-image-picker';
import {Dropdown} from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Alert from '../../../components/Alert/Alert';
import Header from '../../../components/Header/Header';
import {AuthContext} from '../../../contexts/authContext';
import {tokenStorage} from '../../../redux/Actions/AuthanticationAction/AuthAction';
import {ODSprofile} from '../../../utils/service';
import {styles} from './ProfileStyles';
import {ThemeContext} from '../../../Theme/Theme';
import {THEME} from '../../../utils/commonUtils';

const Profile = ({navigation}: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [AlertVisible, setAlertVisible] = useState(false);
  const [AskForLogin, setAskForLogin] = useState(false);
  const [ImageSelected, setImageSelected]: any = useState('');
  const [uploadedImage, setUploadImage]: any = useState([]);
  const appState = useSelector((state: any) => state.authReducers);
  const user_token = appState?.token;
  const {signOut}: any = React.useContext(AuthContext);
  const [loggingOut, setloggingOut] = useState(false);
  const [profile, setProfile]: any = useState('');
  const dispatch = useDispatch();
  const [language, setLanguage]: any = useState('');
  const {t, i18n} = useTranslation();
  const { setTheme, theme }:any = React.useContext(ThemeContext);

  const languageData = [
    {label: 'English', value: 'en'},
    {label: 'Italian', value: 'it'},
    {label:"French", value:"fr"}
  ];


  const toggleSwitch = () => {
    var themeValue = theme === 'light' ? 'dark' : 'light';
    console.log("themeValue",themeValue );
    
     AsyncStorage.setItem(THEME,themeValue)
     setTimeout(() => {
      setTheme(themeValue);
     }, 100);
     if(themeValue == 'light'){
      setIsEnabled(false)
     }else{
      setIsEnabled(true)
     }
    // setIsEnabled(previousState => !previousState);
    // setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const getprofile = async () => {
      if(theme == 'light'){
        setIsEnabled(false)
       }else{
        setIsEnabled(true)
       }
      const data = await ODSprofile();
      if (data.status === 200) {
        setProfile(data.data);
      }
    };
    getprofile();
  }, []);

  const OPENPICKER = () => {
    var options: any = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response: any) => {
      if (response.didCancel != true) {
        setUploadImage(response?.assets[0]);
        setImageSelected(response?.assets[0].uri);
      }
    });
  };



  const logOut = () => {
    signOut(setloggingOut, loggingOut);
    dispatch(tokenStorage('') as any);
    navigation.navigate('Login');
  };


  return (
    <SafeAreaView>
      <Header
        name={t('Profile')}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.darkPrimary}
        iconColor={colors.white}
        back={true}
        theme={theme}
      />
  

      <ScrollView contentContainerStyle={{backgroundColor:theme==="light"?colors.white:colors.black,
    paddingBottom:responsiveHeight(2)  }}>
        {user_token == 'TOKEN_AS_GUEST' ? (
          <TouchableOpacity onPress={() => logOut()} style={theme==="light"? styles.btn:styles.btn_dark}>
            <Text style={theme==="light"?styles.btnText:styles.btnText_dark}>{t('Login')}</Text>
          </TouchableOpacity>
        ) : (
          <View
            style={theme == 'light' ? styles.container : styles.container_dark}>
            <View style={styles.logoContainer}>
              <View style={styles.profile}>
                {ImageSelected ? (
                  <Image
                    source={{uri: ImageSelected}}
                    style={styles.profileImg}
                  />
                ) : (
                  <Image
                    style={styles.profileImg}
                    source={require('../../../assets/Images/noimage.jpeg')}
                  />
                )}

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.editOpacity}
                  onPress={() =>
                    user_token === 'TOKEN_AS_GUEST'
                      ? setAskForLogin(true)
                      : OPENPICKER()
                  }>
                  <LinearGradient
                    colors={[colors.darkPrimary, colors.darkSecondary]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.edit}>
                    <IonIcon name="pencil" size={18} color={colors.white} />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View></View>
            </View>

            <View style={{alignSelf: 'center'}}>
              <Text
                style={[
                  styles.profileName,
                  {color: theme == 'light' ? colors.secondary : colors.white},
                ]}>
                {user_token === 'TOKEN_AS_GUEST'
                  ? 'Guest User'
                  : profile?.userdetails?.firstName +
                    ' ' +
                    profile.userdetails?.lastName}
              </Text>
            </View>

            <View
              //
              style={[
                styles.bookingContainer,
                {
                  backgroundColor:
                    theme == 'light' ? colors.lightblue : colors.darkSecondary,
                },
              ]}>
              <View style={styles.infoView}>
                <View style={{alignItems: 'center'}}>
                  {profile == '' ? (
                    <></>
                  ) : (
                    <>
                      {profile.tb.length === 0 ? (
                        <Text
                          style={[
                            styles.value,
                            {
                              color:
                                theme == 'light'
                                  ? colors.darkSecondary
                                  : colors.white,
                            },
                          ]}>
                          0
                        </Text>
                      ) : (
                        <Text
                          style={[
                            styles.value,
                            {
                              color:
                                theme == 'light'
                                  ? colors.darkSecondary
                                  : colors.white,
                            },
                          ]}>
                          {profile.tb[0].totalbookings}
                        </Text>
                      )}
                    </>
                  )}

                  <Text
                    style={[
                      styles.desc,
                      {
                        color:
                          theme == 'light' ? colors.darkGray : colors.white,
                      },
                    ]}>
                   {t("Bookings")}
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={[
                      styles.value,
                      {
                        color:
                          theme == 'light'
                            ? colors.darkSecondary
                            : colors.white,
                      },
                    ]}>
                    {user_token === 'TOKEN_AS_GUEST'
                      ? '-'
                      : profile?.userdetails?.createdAt.substring(0, 10)}
                  </Text>
                  <Text
                    style={[
                      styles.desc,
                      styles.descContain,
                      {
                        color:
                          theme == 'light' ? colors.darkGray : colors.white,
                      },
                    ]}>
                    {t('Since joined')}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        <View
          style={[
            styles.top,
            {backgroundColor: theme == 'light' ? colors.white : colors.black},
          ]}>
          <TouchableOpacity
            onPress={() =>
              user_token === 'TOKEN_AS_GUEST'
                ? setAskForLogin(true)
                : navigation.navigate('AddressList')
            }
            style={[
              styles.cardview,
              {borderColor: colors.white},
              {backgroundColor: theme == 'light' ? colors.white : colors.black},
            ]}>
            <Image
              style={styles.categoryimage}
              source={require('../../../assets/Images/addresses.png')}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.links,
                {color: theme == 'light' ? colors.secondary : colors.white},
              ]}>
              {t('My Addresses')}
            </Text>
          </TouchableOpacity>
          <View
            style={[
              styles.cardview,
              {borderColor: colors.white, paddingVertical: 5},
              {backgroundColor: theme == 'light' ? colors.white : colors.black},
            ]}>
            <Image
              style={styles.categoryimage}
              source={require('../../../assets/Images/languages.png')}
              resizeMode="contain"
            />
            <Dropdown
              style={{width: 250}}
              data={languageData}
              itemTextStyle={[
                styles.links,
                {color: theme == 'light' ? colors.secondary : colors.black},
              ]}
              selectedTextStyle={{
                color: theme == 'light' ? colors.secondary : colors.white,
              }}
              labelField="label"
              valueField="value"
              placeholder="Change Language"
              placeholderStyle={[
                styles.links,
                {color: theme == 'light' ? colors.secondary : colors.white},
              ]}
              value={i18n.language === 'en' ? language : language}
              onChange={item => {
                i18n.changeLanguage(item.value);
                setLanguage(item.value);
              }}
              renderRightIcon={() => (
                <IonIcon
                  name="chevron-forward-outline"
                  size={20}
                  color={theme == 'light' ? '#3e3e3e' : colors.white}></IonIcon>
              )}
            />
          </View>
          <View
            style={[
              styles.cardview,
              {borderColor: colors.white},
              {backgroundColor: theme == 'light' ? colors.white : colors.black},
            ]}>
            <Image
              style={styles.categoryimage}
              source={require('../../../assets/Images/dark.png')}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.links,
                {color: theme == 'light' ? colors.secondary : colors.white},
              ]}>
              {t('Dark Mode')}
            </Text>
            <View style={{position: 'absolute', right: 10}}>
              <Switch
                trackColor={{false: '#767577', true: colors.darkSecondary}}
                thumbColor={isEnabled ? colors.lightblue : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          {user_token === 'TOKEN_AS_GUEST'?null:(


               <TouchableOpacity
               style={[
                 styles.cardview,
                 {borderColor: colors.white},
                 {backgroundColor: theme == 'light' ? colors.white : colors.black},
               ]}
               activeOpacity={0.9}
               onPress={() => {
                 setAlertVisible(true);
               }}>
               <Image
                 style={styles.categoryimage}
                 source={require('../../../assets/Images/logout.png')}
                 resizeMode="contain"
               />
               <Text
                 style={[
                   styles.links,
                   {color: theme == 'light' ? colors.secondary : colors.white},
                 ]}>
                { t('Logout as User')}
               </Text>
             </TouchableOpacity>
          )}
       
        </View>
        <View
          style={{
            backgroundColor: theme == 'light' ? colors.white : colors.black,
          }}>
          <View style={[styles.footer]}>
            <Image
              style={styles.appLogo}
              resizeMode="contain"
              source={require('../../../assets/Images/applogo.png')}
            />

            <Text
              style={[
                styles.bottomText,
                {color: theme == 'light' ? colors.charcol : colors.white},
              ]}>
              On Demand Services V.0.1
            </Text>
          </View>
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
            ? 'Please login to view details.'
            : 'Are you sure want to Logout?'
        }
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default Profile;