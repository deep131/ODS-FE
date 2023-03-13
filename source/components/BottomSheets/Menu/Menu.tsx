import { t } from 'i18next';
import React,{useContext} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {
  colors,
  deviceWidth,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../styles/variables';
import {ThemeContext} from '../../../Theme/Theme';
import {useTranslation} from 'react-i18next';
import {styles} from './MenuStyles';

const Menu = ({visitModal, setModalVisible, navigation}: any) => {
  const {t, i18n} = useTranslation();
  const {theme, setTheme} = useContext(ThemeContext);
  const menuItems = [
    {
      id: 1,
      name: t('About Us'),
      icon: require('../../../assets/Images/aboutus.png'),
      navigation: 'AboutUs',
    },
    {
      id: 2,
      name: t('Help & Support'),
      icon: require('../../../assets/Images/support.png'),
      navigation: 'Help',
    },
    {
      id: 3,
      name: t('Policies'),
      icon: require('../../../assets/Images/policies.png'),
      navigation: 'Policies',
    },
  ];

  const renderItem = ({item, index}: any) => (
    <View style={{width: deviceWidth / 3.2, alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.itemView}
        activeOpacity={0.5}
        onPress={() => {
          setModalVisible(false);
          navigation.navigate(item.navigation);
        }}>
        <Image
          resizeMode="contain"
          style={{height: responsiveHeight(4), width: responsiveWidth(8)}}
          source={item.icon}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: fontFamily.regular,
          color:theme == 'light'? colors.secondary : colors.white,
          fontSize: fontSize.extraSmall,
        }}>
        {item.name}
      </Text>
    </View>
  );

  return (
    <Modal
      isVisible={visitModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={() => setModalVisible(false)}
      backdropTransitionOutTiming={0}
      backdropTransitionInTiming={0}
      useNativeDriver={true}
      onBackButtonPress={() => setModalVisible(false)}
      hideModalContentWhileAnimating
      style={{
        flex: 1,
        margin: 0,
        justifyContent: 'flex-end',
      }}>
      <View style={[styles.modal, {height: responsiveHeight(40)},{backgroundColor:theme =='light'? colors.white : colors.black}]}>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
          }}
          onPress={() => {
            setModalVisible(false);
          }}
          activeOpacity={0.7}>
          <IonIcon name="chevron-down" color={colors.darkSecondary} size={30} />
        </TouchableOpacity>

        <View style={{marginTop: responsiveHeight(3)}}>
          <FlatList
            data={menuItems}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any) => item.id}
            horizontal={false}
            contentContainerStyle={{alignSelf: 'center'}}
            numColumns={Math.ceil(menuItems.length / 2)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Menu;
