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
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  mainContainer: {width: responsiveWidth(90)},
  row: {flexDirection: 'row', alignItems: 'center'},
  top: {marginTop: spaceVertical.extraSmall},
  left: {
    left: responsiveWidth(2),
  },
  logo: {
    width: responsiveWidth(40),
    height: responsiveHeight(10),
    marginBottom: responsiveHeight(4),
  },
  numberInput: {width: responsiveWidth(60)},
  textInputText: {
    color: colors.charcol,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.extraSmall,
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
  inputText: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.lightGray,
    marginTop: spaceVertical.extraSmall,
    width: responsiveWidth(32),
  },
  logoEye: {
    right: responsiveWidth(8),
    top: responsiveHeight(0.8),
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
  btnView: {marginTop: spaceVertical.normal},
  forgotPass: {
    marginTop: spaceVertical.extraSmall,
    alignSelf: 'flex-end',
  },
  link: {
    marginTop: spaceVertical.small,
    alignSelf: 'center',
  },
  underlineCol: {textDecorationLine: 'underline', color: colors.darkPrimary},
  underlineCol2: {textDecorationLine: 'underline', color: colors.blue},
});

export {styles};
