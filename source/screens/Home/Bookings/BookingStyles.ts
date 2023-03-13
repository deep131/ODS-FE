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
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
    backgroundColor:"white"
  },
  flex_dark:{

    flex: 1,
    backgroundColor:"black"
  },
  header: {
    height: responsiveHeight(8),
    backgroundColor: colors.lightgreen,
  },
  appLogo: {
    width: responsiveWidth(35),
    height: responsiveHeight(15),
    alignSelf: 'center',
  },
  title: {
    fontFamily: fontFamily.medium,
    color: colors.charcol,
    fontSize: fontSize.medium,
    alignSelf: 'center',
  },
  title_dark: {
    fontFamily: fontFamily.medium,
    color: colors.white,
    fontSize: fontSize.medium,
    alignSelf: 'center',
  },
  btn: {
    height: responsiveHeight(6),
    width: responsiveWidth(92),
    borderColor: colors.charcol,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.white
  },
  btn_dark: {
    height: responsiveHeight(6),
    width: responsiveWidth(100),
    borderColor: colors.white,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.black
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
  input: {
    height: responsiveHeight(6),
    width: responsiveWidth(80),
    fontFamily: fontFamily.regular,
    borderRadius: borderRadius.semiLarge,
  },
  renderItem: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: borderRadius.semiLarge,
    marginLeft: responsiveWidth(2),
  },
  orderName: {
    fontFamily: fontFamily.regular,
    marginHorizontal: responsiveWidth(2),
  },
  top: {paddingTop: responsiveHeight(2), backgroundColor:colors.white},
  cardview: {
    width: responsiveWidth(95),
    borderWidth: 1,
    borderColor: '#f8f8f8',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.semiLarge,
    shadowOpacity: 2,
    marginLeft: 0,
    marginRight: 0,
    elevation: 2,
    marginVertical: spaceVertical.extraSmall,
    paddingVertical: responsiveHeight(1),
  },
  hr: {
    width: responsiveWidth(100),
    //  marginTop: responsiveHeight(2),
    borderColor: colors.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  renderItem1: {
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusView: {
    position: 'absolute',
    right: 10,
    borderRadius: borderRadius.semiLarge,
  },
  bookingAmount:{

    marginLeft: responsiveWidth(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderLogo: {
    height: responsiveHeight(3),
    width: responsiveWidth(8),
  },
  bookingNumber: {
    fontFamily: fontFamily.semiBold,
    color: colors.secondary,
    fontSize: fontSize.extraSmall-1,
  },
  containerOrder: {paddingRight: responsiveWidth(2),paddingBottom:responsiveHeight(2)},
  containerBooking: {
    paddingBottom: responsiveHeight(2),
    alignItems: 'center',
  },
  orderStatus: {
    fontFamily: fontFamily.medium,
    padding: 5,
    fontSize: fontSize.extraSmall,
  },
  bookingDate: {
    marginLeft: responsiveWidth(4),
    color: colors.secondary,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
  },
  serviceDate: {
    marginLeft: responsiveWidth(4),
    color: colors.secondary,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
  },
  totalAmount: {
    fontFamily: fontFamily.semiBold,
    color: colors.darkGray,
    fontSize: fontSize.extraSmall,
  },

  viewDetails: {
    fontFamily: fontFamily.medium,
    color: colors.darkGray,
    padding: 5,
    textDecorationLine: 'underline',
    fontSize: fontSize.extraSmall,
  },
  searchicon: {
    height: responsiveHeight(2.5),
    width: responsiveWidth(5),
    marginLeft: marginHorizontal.small,
  },
  verticleLine: {
    height: '50%',
    width: 1,
    backgroundColor: colors.nocolor,
  },
  searchbarview: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderWidth: 2,
    width: responsiveWidth(95),
    borderColor: '#bbb',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.normal,
    marginTop: spaceVertical.small,
    position: 'absolute',
  },
});

export {styles};