import React,{useContext} from 'react';
import {Text, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {colors, responsiveWidth} from '../../styles/variables';
import {styles} from './HeaderStyle';

const Header = ({
  name,
  navigation,
  back,
  textColor,
  bgColor,
  iconColor,
  rightText,
  right,
  rightonPress,
  left,
  leftText,
  leftonPress,
  theme
}: any) => {
 
  return (
    <View style={{backgroundColor: theme == "light"  || theme == ""  ? colors.white:colors.black}}>
    <View style={[styles.headerView, {backgroundColor: colors.charcol}]}>
      <View style={styles.header}>
        <View style={{justifyContent: 'center', start: 10}}>
          {back ? (
            <IonIcon
              name="chevron-back"
              color={iconColor}
              size={25}
              onPress={() => {
                navigation.goBack();
              }}></IonIcon>
          ) : null}
        </View>

        <View
          style={[
            {justifyContent: 'center'},
            right ? {right: 0} : {right: responsiveWidth(4)},
          ]}>
          <Text style={[styles.centerText, {color: textColor}]}>{name}</Text>
        </View>

        <View style={{justifyContent: 'center'}}>
          {/* {right ? (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}
                activeOpacity={0.75}
                style={{justifyContent: 'center'}}>
                <Text style={styles.cartCount}>1</Text>
                <IonIcon name="cart-outline" style={styles.icon1}></IonIcon>
              </TouchableOpacity>
            </>
          ) : null} */}
        </View>
      </View>
    </View>
    </View>
  );
};

export default Header;
