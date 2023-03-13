import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
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
    backgroundColor: colors.white,
  },
  container_dark: {
    flex: 1,
    backgroundColor: colors.black,
  },
  btn: {
    height: responsiveHeight(6),
    width: responsiveWidth(92),
    borderColor: colors.charcol,
    backgroundColor:colors.white,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: responsiveHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_dark: {
    height: responsiveHeight(6),
    width: responsiveWidth(92),
    borderColor: colors.white,
    backgroundColor:colors.black,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: responsiveHeight(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
    fontSize: fontSize.normal,
    alignSelf: 'center',
  },
  btnText_dark: {
    fontFamily: fontFamily.medium,
    color: colors.white,
    fontSize: fontSize.normal,
    alignSelf: 'center',
  },
  logoContainer: {
    paddingVertical: spaceVertical.small,
    paddingHorizontal: spaceVertical.large,
    alignSelf: 'center',
  },

  profile: {
    flexDirection: 'row',
    borderRadius: borderRadius.circle,
  },
  profileName: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
    fontSize: fontSize.normal,
  },
  profileImg: {
    borderRadius: borderRadius.circle,
    height: responsiveWidth(28),
    width: responsiveWidth(28),
  },
  bookingContainer: {
    backgroundColor: colors.lightblue,
    marginTop: responsiveHeight(2),
  },
  top: {
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    //  backgroundColor:"black"
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
  descContain: {width: responsiveWidth(40), textAlign: 'center'},
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
    elevation: 3,
    marginVertical: spaceVertical.extraSmall,
    paddingVertical: 10,
  },
  links: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.Small,
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
  footer: {alignSelf: 'center', paddingBottom: '18%'},
  appLogo: {
    width: responsiveWidth(35),
    height: responsiveHeight(15),
    alignSelf: 'center',
  },
  bottomText: {
    fontFamily: fontFamily.medium,
    color: colors.charcol,
    fontSize: fontSize.small,
    alignSelf: 'center',
  },
});

export {styles};