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
  container: {
    paddingLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  bookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  bookingTitle:{
    fontFamily: fontFamily.semiBold,
    color: colors.secondary,
    fontSize: fontSize.small,
  },
  bookingNumber: {
    fontFamily: fontFamily.medium,
    color: colors.darkPrimary,
    fontSize: fontSize.extraSmall-1,
  },
  order: {
    position: 'absolute',
    right: 20,
    backgroundColor: colors.darkSecondary,
    borderRadius: borderRadius.semiLarge,
  },
  orderStatus: {
    fontFamily: fontFamily.medium,
    padding: 5,
    fontSize: fontSize.Small,
    paddingHorizontal: 14,
  },
  orderPending: {
    backgroundColor: colors.lightblue,
    borderRadius: borderRadius.semiLarge,
    alignSelf: 'flex-start',
  },
  calendar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
  },
  bookingDate: {
    fontFamily: fontFamily.regular,
    color: colors.secondary,
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(1),
    fontSize: fontSize.extraSmall,
    lineHeight: 22,
  },


  userLocatiton: {
    fontFamily: fontFamily.regular,
    color: colors.secondary,
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(1),
    width: responsiveWidth(86.5),
    fontSize: fontSize.extraSmall,
    lineHeight: 22,
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

  paymentMethod: {
    fontFamily: fontFamily.semiBold,
    color: colors.secondary,
    fontSize: fontSize.Small,
  },

  summaryView: {
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemAmount: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
    position: 'absolute',
    right: 20,
  },

 
  subTotalAmount: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
    position: 'absolute',
    right: 20,
  },

 

  discountAmount: {
    fontFamily: fontFamily.regular,
    color: colors.secondary,
    position: 'absolute',
    right: 20,
  },

  grandTotalAmount: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
    position: 'absolute',
    right: 20,
  },
  cash: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(0.5),
  },
  cashTitle: {
    fontFamily: fontFamily.medium,
    color: colors.darkGray,
  },
  payment: {
    fontFamily: fontFamily.medium,
    color: colors.darkGray,
    position: 'absolute',
    right: 20,
  },
  hr: {
    width: responsiveWidth(100),
    marginTop: responsiveHeight(2),
    borderBottomColor: colors.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hrHaf: {
    width: responsiveWidth(95),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    borderBottomColor: colors.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  serviceCol: {
    backgroundColor: colors.lightblue,
    marginTop: responsiveHeight(2),
  },
  service: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: responsiveWidth(4),
    paddingVertical: 10,
  },
  serviceLeftText: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
  },
  serviceLeftSubText: {
    fontFamily: fontFamily.regular,
    color: colors.secondary,
  },
  repair: {
    fontFamily: fontFamily.regular,
    color: colors.secondary,
    marginLeft: responsiveWidth(4),
  },
  top: {
    marginTop: responsiveHeight(2),
  },
  btn: {
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  btnView: {
    backgroundColor: '#ffd7b5',
    borderRadius: borderRadius.semiLarge,
    alignSelf: 'flex-start',
  },
});

export {styles};
