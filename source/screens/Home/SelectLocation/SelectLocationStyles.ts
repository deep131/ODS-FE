import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  fontFamily,
  spaceVertical,
  fontSize,
} from '../../../styles/variables';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.white,
  },
  dateandtimeView: {
    flexDirection: 'row',
    marginLeft: marginHorizontal.semiSmall,
    marginTop: spaceVertical.extraSmall,
    alignItems: 'center',
    width: 100,
  },
  cardview: {
    width: responsiveWidth(95),
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.semiLarge,
    shadowOpacity: 2,
    marginLeft: 0,
    marginRight: 0,
    elevation: 5,
    marginVertical: spaceVertical.extraSmall,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: responsiveWidth(100),
    alignSelf: 'center',
    paddingVertical: responsiveHeight(2),
  },
  serviceTitle: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
    textDecorationLine: 'underline',
  },
  hr: {
    width: responsiveWidth(100),
    marginTop: responsiveHeight(1),
    borderBottomColor: colors.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  locationView: {
    marginLeft: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
    flexDirection: 'row',
  },
  locationTitle: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
  },
  locationSubtitle: {
    fontFamily: fontFamily.regular,
    color: colors.secondary,
    width: responsiveWidth(70),
  },
  cityTitle:{
    fontFamily: fontFamily.regular,
    color: colors.secondary,
  },
  pencilIcon: {
    alignSelf: 'flex-end',
    bottom: 10,
  },
  trash: {
    alignSelf: 'flex-end',
    bottom: 10,
    marginLeft: responsiveWidth(4),
  },
  backArrow: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
    fontSize: fontSize.medium,
  },
  mt: {
    marginTop: responsiveHeight(1),
  },
});

export {styles};
