import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  largeWidth: {width: responsiveWidth(90)},
  normalWidth: {width: responsiveWidth(60)},
  normalTop: {marginTop: spaceVertical.extraSmall},
  top: {marginTop: spaceVertical.normal},
  logo: {
    width: responsiveWidth(40),
    height: responsiveHeight(10),
    marginTop: responsiveHeight(2),
  },
  textInputText: {
    color: colors.secondary,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.extraSmall,
  },
  textInputText1: {
    color: colors.secondary,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    marginTop: spaceVertical.extraSmall,
    paddingStart: responsiveWidth(2),
    fontFamily: fontFamily.medium,
    fontSize: fontSize.small,
  },
  Error: {
    color: colors.red,
    fontFamily: fontFamily.regular,
    marginTop: spaceVertical.extraSmall,
  },
  left: {
    left: responsiveWidth(2),
  },
  pass: {
    marginTop: spaceVertical.extraSmall,
    width: responsiveWidth(90),
  },
  checkBoxText: {
    marginLeft: 5,
    color: colors.secondary,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
  },
  inputText: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.lightGray,
    marginTop: spaceVertical.extraSmall,
    width: responsiveWidth(30),
  },

  label: {
    color: colors.label,
    fontSize: fontSize.small,
    fontFamily: fontFamily.semiBold,
    marginTop: marginHorizontal.extraSmall,
  },
  flag: {
    resizeMode: 'cover',
    height: responsiveHeight(3),
    width: responsiveWidth(5),
    borderRadius: borderRadius.circle,
    marginLeft: marginHorizontal.extraSmall,
    top: responsiveHeight(1),
  },

  flagView: {
    height: responsiveHeight(4),
    width: responsiveWidth(11),
  },

  box: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.small,
    color: colors.charcol,
    marginLeft: marginHorizontal.small,
  },
  logoEye: {
    right: responsiveWidth(11),
    top: responsiveHeight(0.8),
  },
  terms: {
    alignSelf: 'flex-start',
    marginTop: spaceVertical.extraSmall,
    marginLeft: responsiveWidth(4),
    flexDirection: 'row',
  },
  footer: {
    marginVertical: spaceVertical.small,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginLink: {
    textDecorationLine: 'underline',
    marginLeft: responsiveWidth(2),
    color: colors.darkPrimary,
  },
});

export {styles};
