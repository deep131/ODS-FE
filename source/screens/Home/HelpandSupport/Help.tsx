import React,{useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/variables';
import {useTranslation} from 'react-i18next';
import Header from '../../../components/Header/Header';
import {ThemeContext} from '../../../Theme/Theme';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {styles} from './HelpStyles';
import { t } from 'i18next';

const Help = ({navigation}: any) => {
  const {t, i18n} = useTranslation();
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor: theme=='light'? colors.white : colors.black}]}>
      <Header
        name={t('Contact Us')}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.darkPrimary}
        iconColor={colors.white}
        back={true}
        theme={theme}

      />

      <View style={styles.center}>
        <Image
          resizeMode="contain"
          style={styles.contactLogo}
          source={require('../../../assets/Images/contactus.jpg')}
        />
      </View>

      <View style={styles.mx}>
 
        <Text style={[styles.title,{color: theme == 'light' ? colors.secondary : colors.white}]}>{t("Contact us through email")}</Text>

        <Text style={[styles.firstLine,{color: theme == 'light' ? colors.secondary : colors.white}]}>{t("You can send us email through")}</Text>

        <Text style={[styles.secondLine,{color: theme == 'light' ? colors.secondary : colors.white}]}>smiralpanchal.sp@gmail.com</Text>

        <Text style={[styles.thirdLine,{color: theme == 'light' ? colors.secondary : colors.white}]}>
          {t("Typically the contact team will provide you the feedback in the 2 hours.")}
        </Text>
 
        <Text style={[styles.title, styles.mt,{color: theme == 'light' ? colors.secondary : colors.white}]}>{t("Contact us through phone")}</Text>

        <Text style={[styles.firstLine,{color: theme == 'light' ? colors.secondary : colors.white}]}>
          {t("Contact us through our customer care number")}
        </Text>

        <Text style={[styles.secondLine,{color: theme == 'light' ? colors.secondary : colors.white}]}>+91 9724773959</Text>

        <Text style={[styles.thirdLine,{color: theme == 'light' ? colors.secondary : colors.white}]}>
          {t("Talk with our customer support executive at any time.")}
        </Text>
      </View>

      <View style={styles.btn}>
        <TouchableOpacity style={styles.emailButtonView} activeOpacity={0.75}>
          <IonIcon name="mail" color={colors.white} size={20} />
          <Text style={styles.emailButtonText}>{t("Email")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.phoneButtonView} activeOpacity={0.75}>
          <IonIcon name="call" color={colors.white} size={20} />
          <Text style={styles.phoneButtonText}>{t("Phone")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Help;
