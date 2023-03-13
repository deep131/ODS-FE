import React, {useRef, useState} from 'react';
import {
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../styles/variables';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button/Button';
import {showToast} from '../../../utils/commonUtils';
import {ODSResendOTP, ODSVerifyOTP} from '../../../utils/service';
import {styles} from './OtpverificationStyle';

const Otpverification = ({navigation, route}: any) => {
  const [counter, setCounter] = useState(60);
  const {cCode, phoneNumber} = route.params;
  const timerRef = React.useRef(counter);

  const input1: any = useRef();
  const input2: any = useRef();
  const input3: any = useRef();
  const input4: any = useRef();
  const input5: any = useRef();
  const input6: any = useRef();

  const [Form, setForm] = useState({
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
    digit5: '',
    digit6: '',
  });

  const [verfying, setverfying] = useState(false);

  const backtosignup = () => {
    navigation.navigate('SignUp');
  };

  React.useEffect(() => {
    ResendOtpInterval(navigation);
  }, [navigation]);

  const ResendOtpInterval = (navigation: any) => {
    const unsubscribe = navigation.addListener('focus', () => {
      let timerId = setInterval(() => {
        timerRef.current -= 1;
        if (timerRef.current < 0) {
          clearInterval(timerId);
        } else {
          setCounter(timerRef.current);
        }
      }, 1000);
      return () => {
        clearInterval(timerId);
        unsubscribe;
      };
    });
  };

  const submit = async () => {
    let combineNumber = `${cCode}${phoneNumber}`;
    const {digit1, digit2, digit3, digit4, digit5, digit6} = Form;
    const otpCode = digit1 + digit2 + digit3 + digit4 + digit5 + digit6;

    if (otpCode.length > 0) {
      setverfying(true);
      OTPVerifyAPICall(otpCode, combineNumber);
    } else {
      showToast('OTP Required!');
    }
  };

  const OTPVerifyAPICall = async (otpCode: any, phoneNumber: any) => {
    const phone = '+' + phoneNumber;
    const otp = otpCode;

    setverfying(false);

    const loginRequestApi = await ODSVerifyOTP({
      phone,
      otp,
    });

    if (loginRequestApi?.status === 200) {
      showToast(loginRequestApi?.data?.msg);
      navigation.navigate('HomeStack', {screen: 'Tabs'});
    }
  };

  const OTPResendAPICall = async () => {
    const phone = '+91' + phoneNumber;

    const loginRequestApi = await ODSResendOTP({
      phone,
    });

    if (loginRequestApi?.status === 200) {
      showToast(loginRequestApi?.data?.msg);

      setForm({
        digit1: '',
        digit2: '',
        digit3: '',
        digit4: '',
        digit5: '',
        digit6: '',
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        {/* welcome image */}
        <ImageBackground
          source={require('../../../assets/Images/bgimage.png')}
          style={[styles.img]}
          resizeMode="cover">
          <View style={styles.headertext}>
            <TouchableOpacity onPress={backtosignup}>
              <IonIcon name="arrow-back" style={styles.icon} />
            </TouchableOpacity>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.OtpverificationText}>OTP verification</Text>
            </View>

            <View style={styles.mr}></View>
          </View>

          <View style={{flex: 1}}>
            <Text style={styles.AuthenticationtText}>
              An Authentecation code has been sent to{' '}
            </Text>

            <View>
              <Text style={styles.phonenumberText}>
                (+{cCode}) {phoneNumber}
              </Text>
            </View>

            <View
              style={styles.row}>
              {/* 1st box */}
              <View style={styles.innertextview}>
                <TextInput
                  style={styles.otpnumber}
                  ref={input1}
                  value={Form.digit1}
                  onChangeText={value => {
                    if (value) {
                      setForm({...Form, digit1: value});
                      input2.current?.focus();
                    }
                  }}
                  maxLength={1}
                  keyboardType="numeric"></TextInput>
              </View>
              {/* 2nd box */}
              <View style={styles.innertextview}>
                <TextInput
                  style={styles.otpnumber}
                  ref={input2}
                  value={Form.digit2}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      input1.current.focus();
                    }
                  }}
                  onChangeText={value => {
                    if (value) {
                      setForm({...Form, digit2: value});
                      input3.current?.focus();
                    } else {
                      input1.current?.focus();
                    }
                  }}
                  maxLength={1}
                  keyboardType="numeric"></TextInput>
              </View>

              {/* 3rd box */}
              <View style={styles.innertextview}>
                <TextInput
                  style={styles.otpnumber}
                  ref={input3}
                  value={Form.digit3}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      input2.current.focus();
                    }
                  }}
                  onChangeText={value => {
                    if (value) {
                      setForm({...Form, digit3: value});
                      input4.current?.focus();
                    } else {
                      input2.current?.focus();
                    }
                  }}
                  maxLength={1}
                  keyboardType="number-pad"></TextInput>
              </View>
              {/* 4th box */}
              <View style={styles.innertextview}>
                <TextInput
                  style={styles.otpnumber}
                  ref={input4}
                  value={Form.digit4}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      input3.current.focus();
                    }
                  }}
                  onChangeText={value => {
                    if (value) {
                      setForm({...Form, digit4: value});
                      input5.current?.focus();
                    } else {
                      input3.current?.focus();
                    }
                  }}
                  maxLength={1}
                  keyboardType="numeric"></TextInput>
              </View>
              {/* 5th box */}
              <View style={styles.innertextview}>
                <TextInput
                  style={styles.otpnumber}
                  ref={input5}
                  value={Form.digit5}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      input4.current.focus();
                    }
                  }}
                  onChangeText={value => {
                    if (value) {
                      setForm({...Form, digit5: value});
                      input6.current?.focus();
                    } else {
                      input4.current?.focus();
                    }
                  }}
                  maxLength={1}
                  keyboardType="numeric"></TextInput>
              </View>
              {/* 6th box */}
              <View style={styles.innertextview}>
                <TextInput
                  style={styles.otpnumber}
                  ref={input6}
                  value={Form.digit6}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      input5.current.focus();
                    }
                  }}
                  onChangeText={value => {
                    if (value) {
                      setForm({...Form, digit6: value});
                      Keyboard.dismiss();
                    } else {
                      input5.current.focus();
                    }
                  }}
                  maxLength={1}
                  keyboardType="numeric"></TextInput>
              </View>
            </View>

            <View style={styles.top}>
              <Button
                name={'Submit'}
                needLoading={verfying}
                onPress={submit}
                color={colors.charcol}>
                {' '}
              </Button>
            </View>
            <View
              style={styles.lowerView}>
              {counter > 0 ? (
                <Text style={styles.lowertext}>
                  Code Sent. Resend OTP in{' '}
                  <Text
                     style={styles.lowerCount}>
                    00:{counter}
                  </Text>
                </Text>
              ) : (
                <TouchableOpacity onPress={() => OTPResendAPICall()}>
                  <Text style={styles.lowertext2}>Resend OTP</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* <TouchableOpacity>
          <Text style={{ color: '#0E67ED' }}>Resend Code</Text>
          <View style={{ borderWidth: 0.3, backgroundColor: '#0E67ED' }}></View>
        </TouchableOpacity> */}
    </>
  );
};
export default Otpverification;
