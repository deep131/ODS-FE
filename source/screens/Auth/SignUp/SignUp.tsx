import CheckBox from '@react-native-community/checkbox';
import React, {useRef, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors} from '../../../styles/variables';
import CountryPicker from 'react-native-country-picker-modal';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button/Button';
import {showToast} from '../../../utils/commonUtils';
import {emailRegex, passwordRegex} from '../../../utils/GeneralRegex';
import {ODSRegisterAPI} from '../../../utils/service';
import {styles} from './SignUpStyles';

const SignUp = ({navigation}: any) => {
  const [secureText, setSecureText] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setfirstNameError] = useState(false);
  const [lastNameError, setlastNameError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [phoneLength, setPhoneLength] = useState(false);
  const [validPasswordError, setvalidPasswordError] = useState(false);
  const [phoneError, setphoneError] = useState(false);
  const [loginloading, setloginloading] = useState(false);
  const [logInAttemp, setLogInAttemp] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [openCountryModal, setopenCountryModal] = useState(false);

  const [Form, setForm]: any = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '91',
    countryImage: 'IN',
    phone: '',
    password: '',
  });

  const input1: any = useRef();
  const input2: any = useRef();
  const input3: any = useRef();
  const input4: any = useRef();

  const emailCheck = emailRegex(Form.email);
  const passwordCheck = passwordRegex(Form.password);
  const onSubmitFree = async () => {
    const PhoneLength = Form.phone.length;
    setLogInAttemp(true);
    setloginloading(true);

    if (!Form.firstName && !Form.lastName && !Form.email && !Form.password) {
      showToast('All Fields Required');
      setloginloading(false);
      return;
    }

    if (!Form.firstName) {
      setfirstNameError(true);
      setloginloading(false);
      return;
    }

    if (!Form.lastName) {
      setlastNameError(true);
      setloginloading(false);
      return;
    }

    if (!emailCheck) {
      setEmailError(true);
      setloginloading(false);
      return;
    }

    if (!Form.phone) {
      setphoneError(true);
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

    if (!passwordCheck) {
      setvalidPasswordError(true);
      setloginloading(false);
      return;
    }

    if (!toggleCheckBox) {
      showToast('Please accept Terms and conditions');
      setloginloading(false);
      return;
    }

    SignUpAPICall();
  };

  const SignUpAPICall = async () => {
    const email = Form.email;
    const password = Form.password;
    const firstName = Form.firstName;
    const lastName = Form.lastName;
    const countryCode = '+' + Form.countryCode;
    const phone = Form.phone;
    const profilePic = '';

    const loginRequestApi = await ODSRegisterAPI({
      email,
      password,
      firstName,
      lastName,
      countryCode,
      phone,
      profilePic,
    });

    setloginloading(false);
    if (loginRequestApi?.status === 201) {
      navigation.navigate('Otpverification', {
        cCode: Form.countryCode,
        phoneNumber: Form.phone,
      });
    } else {
      showToast(loginRequestApi?.msg);
    }
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../../assets/Images/applogo.png')}
          resizeMode="contain"
          style={styles.logo}
        />

        <View style={styles.normalTop}>
          <Text style={[styles.textInputText]}>First Name*</Text>
          <TextInput
            style={[styles.textInput, styles.largeWidth]}
            value={Form.firstName}
            onChangeText={value => {
              if (value) {
                setfirstNameError(false);
              }
              setForm({...Form, firstName: value});
            }}
            onSubmitEditing={() => input1.current.focus()}
            blurOnSubmit={false}
            returnKeyType="next"></TextInput>

          {firstNameError && logInAttemp ? (
            <Text style={[styles.Error]}>Please enter valid first Name</Text>
          ) : null}
        </View>

        <View style={styles.normalTop}>
          <Text style={[styles.textInputText]}>Last Name*</Text>
          <TextInput
            style={[styles.textInput, styles.largeWidth]}
            value={Form.lastName}
            ref={input1}
            onChangeText={value => {
              if (value) {
                setlastNameError(false);
              }
              setForm({...Form, lastName: value});
            }}
            onSubmitEditing={() => input2.current.focus()}
            blurOnSubmit={false}
            returnKeyType="next"></TextInput>

          {lastNameError && logInAttemp ? (
            <Text style={[styles.Error]}>Please enter valid last Name</Text>
          ) : null}
        </View>

        <View style={styles.normalTop}>
          <Text style={[styles.textInputText]}>Email Address*</Text>
          <TextInput
            style={[styles.textInput, styles.largeWidth]}
            value={Form.email}
            ref={input2}
            onChangeText={value => {
              if (value) {
                setEmailError(false);
              }
              setForm({...Form, email: value});
            }}
            onSubmitEditing={() => input3.current.focus()}
            blurOnSubmit={false}
            returnKeyType="next"></TextInput>

          {emailError && logInAttemp ? (
            <Text style={[styles.Error]}>Please Enter valid Email Address</Text>
          ) : null}
        </View>

        <View style={styles.normalTop}>
          <Text style={styles.textInputText}>Phone*</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.inputText}>
              <TouchableWithoutFeedback>
                <View style={styles.flag}>
                  <CountryPicker
                    visible={openCountryModal}
                    withEmoji={false}
                    withFlag={true}
                    withFilter={true}
                    onClose={() => setopenCountryModal(false)}
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

            <TextInput
              style={[styles.textInput, styles.normalWidth]}
              value={Form.phone}
              keyboardType="phone-pad"
              ref={input3}
              maxLength={13}
              onChangeText={value => {
                if (phoneError || phoneLength) {
                  setphoneError(false);
                  setPhoneLength(false);
                }
                setForm({...Form, phone: value});
              }}
              onSubmitEditing={() => input4.current.focus()}
              blurOnSubmit={false}></TextInput>
          </View>
          {phoneError && logInAttemp ? (
            <Text style={styles.Error}>Please Enter Phone Number</Text>
          ) : null}

          {phoneLength && logInAttemp ? (
            <Text style={styles.Error}>Please Enter Valid Phone Number</Text>
          ) : null}
        </View>

        <View style={styles.pass}>
          <Text style={styles.textInputText}>Password*</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={[styles.textInput, styles.largeWidth]}
              secureTextEntry={secureText}
              value={Form.password}
              ref={input4}
              onChangeText={value => {
                if (value) {
                  setPassError(false);
                  setvalidPasswordError(false);
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

          {passError && logInAttemp ? (
            <Text style={styles.Error}>Please Enter Password</Text>
          ) : null}

          {validPasswordError && logInAttemp ? (
            <Text style={styles.Error}>
              A password should be alphanumeric, First letter of the password
              should be capital, Password must contain a special character (@,
              $, !, &, etc), Password length must be greater than 8 characters,
              password fields should not be empty.
            </Text>
          ) : null}
        </View>

        <View style={styles.terms}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            style={{
              transform: [{scaleX: 1.2}, {scaleY: 1.2}],
            }}
            tintColors={{true: colors.darkPrimary}}
            tintColor={colors.darkPrimary}
            lineWidth={0.5}
            onValueChange={(newValue: any) => setToggleCheckBox(newValue)}
          />

          <Text style={styles.checkBoxText}>
            I accept ODS general terms and conditions and {'\n '}
            privacy policy.
          </Text>
        </View>

        <View style={styles.top}>
          <Button
            name="Sign up"
            color={colors.charcol}
            onPress={onSubmitFree}
            buttonTextColor={colors.white}
            needLoading={loginloading}
          />
        </View>

        <TouchableOpacity style={styles.footer} activeOpacity={0.5}>
          <Text style={[styles.textInputText1]}>Already have an account?</Text>
          <Text
            style={[styles.textInputText, styles.loginLink]}
            onPress={() => navigation.navigate('Login')}>
            Log in here
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default SignUp;
