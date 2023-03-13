import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../../styles/variables';

const styles = StyleSheet.create({
  cardview: {
    width: responsiveWidth(95),
    height: responsiveHeight(16),
    borderWidth: 1,
    borderColor: colors.white,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.semiLarge,
    shadowOpacity: 2,
    marginLeft: 0,
    marginRight: 0,
    elevation: 5,
    marginVertical: spaceVertical.extraSmall,
  },
  imageStyle: {
    height: responsiveHeight(12),
    width: responsiveWidth(30),
    marginRight: 10,
  },
  servicesText: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
    marginLeft: responsiveWidth(2),
    textDecorationLine: 'underline',
  },
  itemdesc: {
    fontFamily: fontFamily.regular,
    color: colors.secondary,
    width: responsiveWidth(60),
    fontSize: 12,
  },
  originalPrice: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
    color: colors.darkGray,
  },
  discPrice: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.small,
    color: colors.darkSecondary,
    marginLeft: responsiveWidth(3),
  },
  overlay: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    height: responsiveHeight(20),
    width: responsiveWidth(100),
  },
  couponsLogo: {
    height: responsiveHeight(20),
    width: responsiveWidth(100),
  },
  couponsView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeNo: {
    fontFamily: fontFamily.medium,
    color: colors.red,
  },
  btn: {
    position: 'absolute',
    right: 12,
    backgroundColor: colors.darkSecondary,
    borderRadius: 8,
    top: 1,
  },
  btntitle: {
    fontFamily: fontFamily.medium,
    color: colors.white,
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(4),
    textAlign: 'center',
  },
});

export {styles};
