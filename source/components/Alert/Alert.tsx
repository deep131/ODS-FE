import React, {useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {AuthContext} from '../../contexts/authContext';
import {colors} from '../../styles/variables';
import {styles} from './AlertStyle';

const Alert = ({
  AlertVisible,
  setAlertVisible,
  AlertMsg,
  AlertMsgsubTitle,
  AlertMsgType,
  navigation,
  callBack,
}: any) => {
  const {signOut}: any = React.useContext(AuthContext);

  const [loggingOut, setloggingOut] = useState(false);

  const logOut = () => {
    setloggingOut(true);
    signOut(setloggingOut, loggingOut);
    setTimeout(() => {
      navigation.navigate('Login');
      setAlertVisible(false);
    }, 500);
  };

  return (
    <Modal
      isVisible={AlertVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={() => setAlertVisible(false)}
      backdropTransitionOutTiming={0}
      backdropTransitionInTiming={0}
      useNativeDriver={true}>
      <View style={styles.alertView}>
        <Text style={[styles.Alerttitle, {color: colors.charcol}]}>
          {AlertMsg}
        </Text>
        <Text style={[styles.Alertsubtitle, {color: colors.charcol}]}>
          {AlertMsgsubTitle}
        </Text>
        <View style={styles.btnRow}>
          {AlertMsgType == 'signOut' ? (
            <TouchableOpacity
              style={styles.Alertbutton}
              onPress={() => {
                logOut();
              }}>
              <Text style={styles.btnText}>
                {!loggingOut ? (
                  'Yes'
                ) : (
                  <ActivityIndicator color={colors.white} />
                )}
              </Text>
            </TouchableOpacity>
          ) : AlertMsgType == 'confirmOrder' ? (
            <TouchableOpacity
              style={styles.Alertbutton}
              onPress={() => {
                callBack();
              }}>
              <Text style={styles.btnText}>
                {!loggingOut ? (
                  'Yes'
                ) : (
                  <ActivityIndicator color={colors.white} />
                )}
              </Text>
            </TouchableOpacity>
          ) : AlertMsgType == 'feedback' ? (
            <TouchableOpacity
              style={styles.Alertbutton}
              onPress={() => {
                setAlertVisible(false);
                navigation.navigate('Home');
              }}>
              <Text style={styles.btnText}>
                {!loggingOut ? (
                  'OK'
                ) : (
                  <ActivityIndicator color={colors.white} />
                )}
              </Text>
            </TouchableOpacity>
          ) : AlertMsgType == 'loggedInasGuest' ? (
            <TouchableOpacity
              style={styles.Alertbutton}
              onPress={() => {
                setAlertVisible(false);
                logOut();
              }}>
              <Text style={styles.btnText}>
                {!loggingOut ? (
                  'OK'
                ) : (
                  <ActivityIndicator color={colors.white} />
                )}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

export default Alert;
