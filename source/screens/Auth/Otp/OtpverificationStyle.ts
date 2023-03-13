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
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  Error: {
    color: colors.red,
    fontFamily: fontFamily.regular,
    marginTop: spaceVertical.extraSmall,
  },
  otpnumber: {
    fontSize: fontSize.extraLarge0,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
    top: responsiveHeight(0.5),
    height: responsiveHeight(8),
  },

  innertextview: {
    borderColor: colors.otpcolor,
    borderWidth: 1,
    borderRadius: borderRadius.semiLarge,
    top: responsiveHeight(26),
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(8),
    width: responsiveWidth(12),
    marginHorizontal: responsiveWidth(1),
  },

  textinputview: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  lowertextview: {
    flexDirection: 'row',
    marginTop: spaceVertical.normal,
    alignSelf: 'center',
  },

  lowertext: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.semiBold,
    alignItems: 'center',
  },

  lowertext2: {
    fontSize: fontSize.small,
    color: '#05CE62',
    fontFamily: fontFamily.semiBold,
    textDecorationLine: 'underline',
    textDecorationColor: colors.charcol,
  },

  inputotp: {
    borderRadius: borderRadius.otpradius,
    borderWidth: 20,
  },

  img: {
    width: responsiveWidth(100),
    height: responsiveHeight(60),
    overflow: 'visible',
  },

  OtpverificationText: {
    alignSelf: 'center',
    fontFamily: fontFamily.bold,
    color: colors.charcol,
    fontSize: fontSize.medium,
  },

  headertext: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: responsiveWidth(100),
    justifyContent: 'space-between',
    marginTop: marginHorizontal.small,
  },

  AuthenticationtText: {
    color: colors.secondary,
    fontSize: fontSize.small,
    fontFamily: fontFamily.medium,
    position: 'absolute',
    alignSelf: 'center',
    top: responsiveHeight(15),
  },

  otptextcontainer: {
    top: responsiveHeight(30),
    height: responsiveHeight(7),
    width: responsiveWidth(10),
    borderRadius: 8,
    borderWidth: 1,
    left: responsiveWidth(15),
    borderColor: '#D9D9D9',
  },

  phonenumberText: {
    color: colors.darkGray,
    fontSize: fontSize.small,
    fontFamily: fontFamily.bold,
    alignSelf: 'center',
    top: responsiveHeight(20),
    letterSpacing: 1,
  },

  field: {
    width: responsiveWidth(80),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
  },

  inputText: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    shadowColor: colors.charcol,
    shadowOpacity: 1,
    elevation: 10,
    borderRadius: borderRadius.semiLarge,
    marginTop: spaceVertical.extraSmall,
  },

  label: {
    color: colors.label,
    fontSize: fontSize.extraSmall,
    fontFamily: fontFamily.semiBold,
    marginTop: marginHorizontal.extraSmall,
  },

  flag: {
    resizeMode: 'cover',
    height: responsiveHeight(2.5),
    width: responsiveWidth(5),
    borderRadius: borderRadius.circle,
    marginLeft: marginHorizontal.extraSmall,
    alignSelf: 'center',
    bottom: responsiveHeight(0.2),
  },

  flagView: {
    marginTop: marginHorizontal.extraSmall,
    height: responsiveHeight(4),
    width: responsiveWidth(11),
    borderColor: colors.lightGray,
  },

  box: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.extraSmall,
    color: colors.charcol,
    marginLeft: marginHorizontal.XXS,
    alignItems: 'center',
    justifyContent: 'center',
  },

  separator: {
    height: responsiveHeight(4),
    width: 2,
    alignSelf: 'center',
    backgroundColor: colors.separator,
    marginLeft: marginHorizontal.extraSmall,
  },

  icon: {
    fontSize: fontSize.large,
    color: colors.charcol,
    marginLeft: marginHorizontal.small,
  },

  input: {
    fontFamily: fontFamily.regular,
    minWidth: responsiveWidth(80),
    fontSize: fontSize.extraSmall,
    color: colors.charcol,
    paddingVertical: 0,
  },
  top: {
    marginTop: responsiveHeight(32),
  },
  mr: {
    marginRight: responsiveWidth(5),
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  lowerView: {
    alignSelf: 'center',
    marginTop: spaceVertical.normal,
  },
  lowerCount: {
    color: colors.primary,
    fontSize: fontSize.normal,
  },
});

export {styles};
