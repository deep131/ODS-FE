import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/variables';
import Button from '../../../components/Button/Button';
import {showToast} from '../../../utils/commonUtils';
import {ODSChangePassword, ODSforgotPassword} from '../../../utils/service';
import {styles} from './ResetPasswordStyles';

const ResetPassword = ({navigation}: any) => {
  const [phoneError, setphoneError] = useState(false);
  const [logInAttemp, setLogInAttemp] = useState(false);
  const [loginloading, setloginloading] = useState(false);

  const [Form, setForm] = useState({
    phone: '6354622857',
    otp: '648091',
    newPassword: '1harsh',
    reenterPassword: '1harsh',
  });

  const update = () => {
    setLogInAttemp(false);
    const change = (Form.otp = '');
    const change1 = (Form.newPassword = '');
    const change2 = (Form.reenterPassword = '');
  };
  const onSubmit = async () => {
    setloginloading(true);

    if (!Form.phone) {
      showToast('All field required');
      setloginloading(false);

      return;
    }

    setTimeout(() => {
      APICall();
    }, 500);
  };
  const onReset = async () => {
    setLogInAttemp(true);
    setloginloading(true);

    if (
      !Form.phone &&
      !Form.otp &&
      !Form.newPassword &&
      !Form.reenterPassword
    ) {
      showToast('All field required');
      setloginloading(false);

      return;
    }

    setTimeout(() => {
      setloginloading(false);

      ChangePassApi();
    }, 500);
  };

  const APICall = async () => {
    const phone = Form.phone;

    const forgotRequestApi = await ODSforgotPassword({
      phone: '+91' + phone,
    });

    if (forgotRequestApi?.status === 200) {
      setloginloading(false);

      showToast('OTP sent');
      setLogInAttemp(true);
    }
  };

  const ChangePassApi = async () => {
    const phone = '+91' + Form.phone;
    const otp = Form.otp;
    const newPassword = Form.newPassword;
    const reenterPassword = Form.reenterPassword;

    const loginRequestApi = await ODSChangePassword({
      phone,
      otp,
      newPassword,
      reenterPassword,
    });

    if (loginRequestApi?.status === 200) {
      showToast('Password changed');
    }
  };

  return (
    <>
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require('../../../assets/Images/applogo.png')}
          resizeMode="contain"
          style={styles.logo}
        />

        <View style={styles.btnView}>
          <Text style={[styles.textInputText1, {lineHeight: 28}]}>
            Please enter your Phone number and click on {'\n'}
            “Reset password”. You will then receive an OTP{'\n'}
            with instructions on how to reset your password.
          </Text>
        </View>

        {/* Phone Address */}
        <View style={styles.noView}>
          <Text style={[styles.textInputText]}>Phone Number*</Text>
          <View
           style={styles.input}>
            <TextInput
              style={[styles.textInput, styles.largeWidth]}
              value={Form.phone}
              keyboardType={'number-pad'}
              editable={logInAttemp ? false : true}
              onChangeText={value => {
                if (value) {
                  setphoneError(false);
                }
                setForm({...Form, phone: value});
              }}
              returnKeyType="next"></TextInput>
            {logInAttemp ? (
              <TouchableOpacity
                onPress={update}
                activeOpacity={0.5}
                style={{
                  end: 10,
                  position: 'absolute',
                  borderRadius: 5,
                  top: '22%',
                  alignItems: 'center',
                  alignSelf: 'center',
                  backgroundColor: colors.projectgreen,
                  padding: 5,
                }}>
                <Text style={{color: colors.white}}>Edit</Text>
              </TouchableOpacity>
            ) : null}
          </View>

          {logInAttemp ? (
            <>
              <View>
                <Text style={[styles.textInputText]}>Enter OTP*</Text>
                <TextInput
                  style={[styles.textInput,styles.largeWidth]}
                  value={Form.otp}
                  onChangeText={value => {
                    if (value) {
                      setphoneError(false);
                    }
                    setForm({...Form, otp: value});
                  }}
                  keyboardType={'number-pad'}
                  returnKeyType="next"></TextInput>
                <Text style={[styles.textInputText]}>New Password*</Text>
                <TextInput
                  style={[styles.textInput,  styles.largeWidth]}
                  value={Form.newPassword}
                  onChangeText={value => {
                    if (value) {
                      setphoneError(false);
                    }
                    setForm({...Form, newPassword: value});
                  }}
                  returnKeyType="next"></TextInput>
                <Text style={[styles.textInputText]}>
                  Confirm New Password*
                </Text>
                <TextInput
                  style={[styles.textInput,  styles.largeWidth]}
                  value={Form.reenterPassword}
                  onChangeText={value => {
                    if (value) {
                      setphoneError(false);
                    }
                    setForm({...Form, reenterPassword: value});
                  }}
                  returnKeyType="next"></TextInput>
              </View>
            </>
          ) : null}

          {/* Phone Error     */}
          {phoneError && logInAttemp ? (
            <Text style={[styles.Error]}>Please Enter valid Phone Address</Text>
          ) : null}
        </View>

        {/* Reset Password Button */}
        <View style={styles.btnView}>
          <Button
            onPress={logInAttemp ? onReset : onSubmit}
            name={logInAttemp ? 'Reset Password' : 'Generate Otp'}
            buttonTextColor={colors.white}
            needLoading={loginloading}
            color={colors.charcol}
          />
        </View>
      </View>
    </>
  );
};

export default ResetPassword;
