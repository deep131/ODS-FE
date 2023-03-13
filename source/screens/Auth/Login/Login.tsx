import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useRef, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors} from '../../../styles/variables';
import CountryPicker from 'react-native-country-picker-modal';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import Button from '../../../components/Button/Button';
import {AuthContext} from '../../../contexts/authContext';
import {tokenStorage} from '../../../redux/Actions/AuthanticationAction/AuthAction';
import {showToast} from '../../../utils/commonUtils';
import {ThemeContext} from '../../../Theme/Theme';
import {ODSLoginAPI} from '../../../utils/service';
import {styles} from './LoginStyles';

const Login = ({navigation}: any) => {
  const [secureText, setSecureText] = useState(true);
  const [phoneError, setPhoneError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [phoneLength, setPhoneLength] = useState(false);
  const [loginloading, setloginloading] = useState(false);
  const [logInAttemp, setLogInAttemp] = useState(false);
  const [openCountryModal, setopenCountryModal] = useState(false);
  const {getStarted}: any = React.useContext(AuthContext);
  const dispatch = useDispatch();
  const { setTheme, theme }:any = React.useContext(ThemeContext);
  const [Form, setForm]: any = useState({
    countryCode: '91',
    countryImage: 'IN',
    phone: '6354622857',
    password: '1harsh',
  });

  const input1: any = useRef();

  const onSubmit = async () => {
    console.log("login them", theme);
    
    const PhoneLength = Form.phone.length;
    setLogInAttemp(true);
    setloginloading(true);

    if (!Form.phone && !Form.password) {
      showToast('All fields are required!');
      setloginloading(false);
      return;
    }

    if (!Form.phone) {
      setPhoneError(true);
      setloginloading(false);
      return;
    }

    if (PhoneLength < 10) {
      setPhoneLength(true);
      setloginloading(false);
      return;
    }

    if (!Form.password) {
      setPassError(true);
      setloginloading(false);
      return;
    }

    APICall();
  };

  const APICall = async () => {
    const phone = '+' + Form.countryCode + Form.phone;
    const password = Form.password;

    const loginRequestApi = await ODSLoginAPI({
      phone,
      password,
    });

    setloginloading(false);


    if (loginRequestApi?.status === 200) {
      Form.phone = '';
      Form.password = '';
      AsyncStorage.setItem('login', 'true');
      dispatch(tokenStorage('TOKEN_AS_USER') as any);
      navigation.navigate('HomeStack', {screen: 'Tabs'});
    } else {
      showToast(loginRequestApi.msg);
    }
  };

  const LoginasGuest = () => {
    dispatch(tokenStorage('TOKEN_AS_GUEST') as any);
    navigation.navigate('HomeStack', {screen: 'Tabs'});
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../../assets/Images/applogo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.mainContainer}>
        {/* Phone */}
        <View style={styles.top}>
          <Text style={styles.textInputText}>Phone*</Text>
          <View style={styles.row}>
            {/* Country Code */}
            <View style={styles.inputText}>
              <TouchableWithoutFeedback>
                <View style={styles.flag}>
                  {/* country picker */}
                  <CountryPicker
                    visible={openCountryModal}
                    withEmoji={false}
                    withFlag={true}
                    withFilter={true}
                    onClose={() => setopenCountryModal(false)}
                    // when picker button press you will get the country object with dial code
                    onSelect={(item: any) => {
                      setForm({
                        ...Form,
                        countryCode: item.callingCode,
                        countryImage: item.cca2,
                      });
                    }}
                    countryCode={Form.countryImage}
                  />
                </View>
              </TouchableWithoutFeedback>

              <TextInput
                value={'+' + Form.countryCode}
                placeholderTextColor={colors.charcol}
                selectionColor={colors.primary}
                style={styles.box}
                editable={false}></TextInput>

              <TouchableOpacity
                style={{justifyContent: 'center'}}
                onPress={() => setopenCountryModal(!openCountryModal)}>
                <IonIcon
                  name={'chevron-down-outline'}
                  size={25}
                  style={styles.left}
                  color={colors.lightGray}
                />
              </TouchableOpacity>
            </View>
            {/* Phone Number */}
            <TextInput
              style={[styles.textInput,styles.numberInput]}
              value={Form.phone}
              keyboardType="phone-pad"
              onChangeText={value => {
                if (value) {
                  setPhoneError(false);
                  setPhoneLength(false);
                }
                setForm({...Form, phone: value});
              }}
              onSubmitEditing={() => input1.current.focus()}
              blurOnSubmit={false}></TextInput>
          </View>
          {phoneError && logInAttemp ? (
            <Text style={styles.Error}>Please Enter Phone Number</Text>
          ) : null}
          {phoneLength && logInAttemp ? (
            <Text style={styles.Error}>Please Enter Valid Phone Number</Text>
          ) : null}
        </View>
        {/* Password */}
        <View style={styles.top}>
          <Text style={styles.textInputText}>Password*</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.textInput,styles.mainContainer]}
              secureTextEntry={secureText}
              value={Form.password}
              ref={input1}
              onChangeText={value => {
                if (value) {
                  setPassError(false);
                }
                setForm({...Form, password: value});
              }}></TextInput>

            <TouchableOpacity
              onPress={() => {
                setSecureText(prev => !prev);
              }}>
              <IonIcon
                name={secureText ? 'eye-off-outline' : 'eye-outline'}
                size={25}
                style={styles.logoEye}
              />
            </TouchableOpacity>
          </View>
        </View>

        {passError && logInAttemp ? (
          <Text style={styles.Error}>Please Enter Password</Text>
        ) : null}
        {/* Forgot Password */}
        <TouchableOpacity
           style={styles.forgotPass}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('ResetPassword')}>
          <Text
            style={[styles.textInputText, {textDecorationLine: 'underline'}]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        {/* Log in Button */}
        <View style={styles.btnView}>
          <Button
            name="Log in"
            color={colors.charcol}
            buttonTextColor={colors.white}
            onPress={onSubmit}
            needLoading={loginloading}
          />
        </View>

        {/* New Account*/}
        <TouchableOpacity
        style={styles.link}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={[
              styles.textInputText,
              styles.underlineCol,
            ]}>
            Set up a new account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.link}
          activeOpacity={0.5}
          onPress={() => LoginasGuest()}>
          <Text
            style={[
              styles.textInputText,
              styles.underlineCol2,
            ]}>
            Login as Guest Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
