import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../styles/variables';

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    color: colors.secondary,
    fontSize: fontSize.normal,
  },
  firstLine: {
    fontFamily: fontFamily.regular,
    color: colors.secondary,
    fontSize: fontSize.small,
    marginTop: responsiveHeight(2),
  },
  secondLine: {
    fontFamily: fontFamily.semiBold,
    color: colors.secondary,
    fontSize: fontSize.small,
  },
  thirdLine: {
    fontFamily: fontFamily.regular,
    color: colors.secondary,
    fontSize: fontSize.small,
    marginTop: responsiveHeight(2),
  },
  emailButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.darkPrimary,
    padding: responsiveHeight(1.5),
    borderRadius: borderRadius.semiLarge,
  },
  emailButtonText: {
    fontFamily: fontFamily.medium,
    color: colors.white,
    marginLeft: responsiveWidth(2),
  },
  phoneButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.darkPrimary,
    marginLeft: responsiveWidth(20),
    padding: responsiveHeight(1.5),
    borderRadius: borderRadius.semiLarge,
  },
  phoneButtonText: {
    fontFamily: fontFamily.medium,
    color: colors.white,
    marginLeft: responsiveWidth(2),
  },
  contactLogo: {width: responsiveWidth(60), height: responsiveHeight(30)},
  btn: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  mt: {
    marginTop: responsiveHeight(4),
  },
  mx: {
    marginHorizontal: responsiveWidth(4),
  },
  center: {
    alignItems: 'center',
  },
});

export {styles};
