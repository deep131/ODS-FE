import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
} from '../../styles/variables';

const CategoryText = ({name, onPress, color, seeall,titleStyle,seeallStyle}: any) => {
  return (
    <View style={styles.view}>
      {/* <View style={styles.verticleLine}></View> */}
      <Text style={[styles.text, titleStyle]}>{name}</Text>
      {seeall ? (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: responsiveWidth(18),
            alignSelf: 'flex-end',
          }}>
          <Text style={[styles.textSeeAll,seeallStyle]}>See all</Text>

          <Image
            style={{width: responsiveWidth(8), height: responsiveHeight(2)}}
            resizeMode="contain"
            source={require('../../assets/Images/right_icon.png')}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.locationtext,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.medium,
    marginLeft: marginHorizontal.extraSmall,
  },
  textSeeAll: {
    color: colors.darkGray,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
  },
  view: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(4),
    // marginTop: spaceVertical.extraSmall,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
  },
  verticleLine: {
    height: '90%',
    width: 2,
    backgroundColor: colors.primary,
  },
});
export default CategoryText;
