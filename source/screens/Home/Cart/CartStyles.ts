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
  container: {
    flexGrow: 1,
  },
  cartNo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  textRound: {
    backgroundColor: colors.darkPrimary,
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.extraSmall,
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    textAlign: 'center',
    lineHeight: 24,
    textAlignVertical: 'center',
    borderRadius: borderRadius.circle,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(0.5),
  },
  servicesText: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
    marginLeft: responsiveWidth(2),
    textDecorationLine: 'underline',
  },
  cardview: {
    width: responsiveWidth(95),
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
    borderRadius: borderRadius.semiLarge,
    margin: 10,
  },
  title: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemdesc: {
    fontFamily: fontFamily.regular,
    color: colors.secondary,
    width: responsiveWidth(60),
    fontSize: 12,
  },
  discPrice: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.small,
    color: colors.darkSecondary,
  },
  trashView: {
    position: 'absolute',
    right: 10,
  },
  itemCount: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
    textAlign: 'center',
    width: responsiveWidth(8),
  },
  bottomView: {
    position: 'absolute',
    backgroundColor: colors.lightgreen,
    bottom: 0,
    width: responsiveWidth(100),
    alignSelf: 'center',
    paddingVertical: responsiveHeight(2),
  },
  bottomPriceText: {
    textAlign: 'center',
    color: colors.secondary,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
  },
});

export {styles};
