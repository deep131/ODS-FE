import * as CryptoJS from 'crypto-js';
import { Alert, Platform, ToastAndroid } from 'react-native';

export const API_URL = 'http://10.0.2.2:9002/api/';
export const FCM_TOKEN = "FCM_TOKEN";
export const GOOGLE_API_KEY = 'AIzaSyB5MVxynlBSWyXh2ZFqugc55eapbs112Eo';
export const TOKEN_PREFIX = 'ODS__';
export const USER_DATA = 'USER_DATA';
export const PAGER = 'PAGER';
export const STORAGE = "STORAGE";
export const ENCRYPTKEY = "OnDemandServices";
export const ENCRYPTKEY1 = "odsReyna";
export const IV = "ODSivkeysencrypt";
export const THEME="themeStore";

export const showToast = (msg) => {
  if (Platform.OS === 'android') {
    return ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }
  else {
    Alert.alert(msg);
  }
};

export const decryptData = (cipherText) => {
  var iv = CryptoJS.enc.Utf8.parse('ODSivkeysencrypt');
  var key = 'OnDemandServices'//key used in Python
  var key1 = CryptoJS.enc.Utf8.parse(key);
  var decrypted = CryptoJS.AES.decrypt(cipherText, key1, { iv: iv, mode: CryptoJS.mode.CBC });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

export const decryptData1 = (data) => {
  let dta = CryptoJS.AES.decrypt(data, ENCRYPTKEY1);
  return JSON.parse(dta.toString(CryptoJS.enc.Utf8));
}