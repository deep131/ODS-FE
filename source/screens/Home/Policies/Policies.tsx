import React,{useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/variables';
import Header from '../../../components/Header/Header';
import {ThemeContext} from '../../../Theme/Theme';
import {styles} from './PoliciesStyles';
import {useTranslation} from 'react-i18next'; 

const Policies = ({navigation}: any) => {
  const {t, i18n} = useTranslation();
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <View style={[styles.container,{backgroundColor: theme=='light'? colors.white : colors.black}]}>
      <Header
        name={t('Policies')}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.darkPrimary}
        iconColor={colors.white}
        back={true}
        theme={theme}

      />

      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={[styles.cardview, {borderColor: colors.white,backgroundColor:theme == 'light' ? colors.white : colors.black}]}
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate('ParticularPolicy', {
              type: 'privacy',
            });
          }}>
          <Image
            style={styles.categoryimage}
            source={require('../../../assets/Images/privacypolicy.png')}
            resizeMode="contain"
          />
          <Text style={[styles.links,{color: theme == 'light' ? colors.secondary : colors.white}]}>{t("Privacy Policy")}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.cardview,  {borderColor: colors.white,backgroundColor:theme == 'light' ? colors.white : colors.black}]}
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate('ParticularPolicy', {
              type: 'cancellation',
            });
          }}>
          <Image
            style={styles.categoryimage}
            source={require('../../../assets/Images/cancellationpolicy.png')}
            resizeMode="contain"
          />
          <Text style={[styles.links,{color: theme == 'light' ? colors.secondary : colors.white}]}>{t("Cancellation Policy")}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.cardview,  {borderColor: colors.white,backgroundColor:theme == 'light' ? colors.white : colors.black}]}
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate('ParticularPolicy', {
              type: 'refund',
            });
          }}>
          <Image
            style={styles.categoryimage}
            source={require('../../../assets/Images/refundpolicy.png')}
            resizeMode="contain"
          />
          <Text style={[styles.links,{color: theme == 'light' ? colors.secondary : colors.white}]}>{t("Refund Policy")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Policies;
