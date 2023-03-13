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
  container: {flex:1,
   
  },
  mainContainer: {alignItems: 'center', marginTop: responsiveHeight(2)},
  logoContainer: {
    paddingVertical: spaceVertical.small,
    paddingHorizontal: spaceVertical.large,
  },
  profile: {
    flexDirection: 'row',
    borderRadius: borderRadius.circle,
  },
  profileImg: {
    borderRadius: borderRadius.circle,
    height: responsiveWidth(28),
    width: responsiveWidth(28),
  },
  editOpacity: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  edit: {
    width: responsiveWidth(9),
    height: responsiveWidth(9),
    borderRadius: borderRadius.circle,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontFamily: fontFamily.semiBold,
    color: colors.darkSecondary,
    fontSize: fontSize.normal,
  },
  desc: {
    fontFamily: fontFamily.regular,
    color: colors.darkGray,
    fontSize: fontSize.Small,
  },
  cardview: {
    width: responsiveWidth(95),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: borderRadius.semiLarge,
    shadowOpacity: 2,
    marginLeft: 0,
    marginRight: 0,
    elevation: 4,
    marginVertical: spaceVertical.extraSmall,
    paddingVertical: 10,
  },
  links: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    color: colors.secondary,
  },
  categoryimage: {
    height: responsiveHeight(3),
    width: responsiveWidth(18),
    alignSelf: 'center',
  },
  infoView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(10),
    paddingVertical: 10,
  },
});

export {styles};
