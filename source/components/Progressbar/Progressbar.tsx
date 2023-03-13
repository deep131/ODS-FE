import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import {
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../styles/variables';

const Progressbar = ({text, reviewcount, progress}: any) => {
  return (
    <View style={{flexDirection: 'row', top: responsiveHeight(2.5)}}>
      <Image
        style={styles.star}
        source={require('../../assets/Images/blackstar.png')}></Image>
      <Text style={[styles.text, {marginLeft: responsiveWidth(2)}]}>
        {reviewcount}
      </Text>
      <Progress.Bar
        style={{height: responsiveHeight(0.5), alignSelf: 'center', left: 5}}
        progress={progress}
        color={colors.charcol}
        unfilledColor={colors.gray10}
        borderColor={colors.white}
        borderWidth={0.5}
        width={responsiveWidth(60)}
      />
      <Text style={[styles.text, {marginLeft: responsiveWidth(6)}]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  star: {
    height: responsiveHeight(1),
    width: responsiveWidth(2),
    top: responsiveHeight(0.7),
  },
  text: {
    color: colors.locationtext,
    fontSize: fontSize.small,
    fontFamily: fontFamily.medium,
  },
});
export default Progressbar;
