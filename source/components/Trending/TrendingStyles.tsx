import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../styles/variables';

const styles = StyleSheet.create({
  topratedview: {
    height: responsiveHeight(21),
    width: responsiveWidth(32),
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
    borderRadius: borderRadius.semiLarge,
    shadowOpacity: 2,
    marginTop: spaceVertical.extraSmall,
    elevation: 5,
    marginVertical: spaceVertical.extraSmall,
  },
  topratedname: {
    marginTop: spaceVertical.tiny,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.extraSmall,
    color: colors.charcol,
    marginHorizontal: responsiveWidth(2),
    // textAlign:'center',
  },
  topratedimage: {
    height: responsiveHeight(11),
    width: responsiveWidth(32),
    borderRadius: borderRadius.otpradius,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export {styles};
