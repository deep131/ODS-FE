import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../styles/variables';
import Header from '../../../components/Header/Header';
import {styles} from './CouponsStyles';

const Coupons = ({navigation}: any) => {
  const coupanCodes = [
    {
      id: 1,
      couponCode: 'ODS 50',
      desc: 'Use code ODS50 to save upto 50$ on your next service',
      validTill: '31-12-2022',
    },
    {
      id: 2,
      couponCode: 'ODS 100',
      desc: 'Use code ODS 100 to save upto 100$ on minimum order of 1000$',
      validTill: '1-2-2022',
    },
  ];

  return (
    <>
      <Header
        name={'Coupons'}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.darkPrimary}
        iconColor={colors.white}
        back={true}
      />
      <View>
        <ImageBackground
          resizeMode="contain"
          source={require('../../../assets/Images/couponbg.jpg')}
          style={styles.couponsLogo}></ImageBackground>
      </View>

      <View style={{alignItems: 'center'}}>
        {coupanCodes.map((item: any, index: any) => (
          <View style={styles.cardview} key={index}>
            <View style={styles.couponsView}>
              <Image
                resizeMode="contain"
                style={styles.imageStyle}
                source={require('../../../assets/Images/coupon1.png')}
              />

              <View>
                <Text style={styles.codeNo}>{item.couponCode}</Text>
                <Text style={styles.itemdesc}>{item.desc}</Text>

                <View style={styles.couponsView}>
                  <Text style={styles.originalPrice}>Valid Till</Text>
                  <Text style={styles.discPrice}>{item.validTill}</Text>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('Checkout')}
                    activeOpacity={0.75}
                    style={styles.btn}>
                    <Text style={styles.btntitle}>Use</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </>
  );
};

export default Coupons;
