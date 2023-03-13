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
    flex: 1,
    backgroundColor:"white"
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
    marginHorizontal: responsiveWidth(6),
  },
  serviceScheduleView: {
    backgroundColor: colors.lightgreen,
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
    alignItems: 'center',
    paddingVertical: responsiveHeight(2),
  },
  scheduleTitle: {
    alignSelf: 'center',
    fontFamily: fontFamily.medium,
    color: colors.secondary,
  },
  serviceScheduleView1: {
    backgroundColor: colors.lightgreen,
    marginTop: responsiveHeight(1),
    paddingVertical: responsiveHeight(2),
  },
  paymentMethodView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: spaceVertical.extraSmall,
    marginTop: responsiveHeight(2),
  },

  paymentMethodCard: {
    height: responsiveHeight(10),
    borderWidth: 1,
    borderColor: colors.lightGray,
    width: responsiveWidth(40),
    borderRadius: borderRadius.semiLarge,
  },

  paymentMethodSelected: {
    position: 'absolute',
    right: 10,
    borderWidth: 0.5,
    borderRadius: borderRadius.circle,
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    top: 5,
  },

  paymentMethodUnselected: {
    position: 'absolute',
    right: 10,
    borderWidth: 0.5,
    borderRadius: borderRadius.circle,
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    top: 5,
  },
  dateTitle: {
    fontFamily: fontFamily.regular,
    marginLeft: responsiveWidth(4),
    color: colors.secondary,
  },
  infoTitle: {
    fontFamily: fontFamily.medium,
    marginLeft: responsiveWidth(4),
    color: colors.secondary,
  },
  dayTitle: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
  },
  timeTitle: {
    fontFamily: fontFamily.regular,
    color: colors.secondary,
  },
  loctionIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: responsiveWidth(3),
  },
  addressTitle: {
    fontFamily: fontFamily.regular,
    color: colors.secondary,
    width:responsiveWidth(70),
    marginLeft: responsiveWidth(1),
    marginTop: responsiveHeight(1),
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
  coupan: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(2),
  },
  coupanText: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
    marginLeft: responsiveWidth(2),
    fontSize: fontSize.normal,
    width: responsiveWidth(100),
  },
  summaryView: {
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
    position: 'absolute',
    right: 20,
  },
  dashedLine: {
    fontFamily: fontFamily.regular,
    color: colors.secondary,
    position: 'absolute',
    right: 20,
  },
  mt: {
    marginVertical: responsiveHeight(5),
  },
  mtLarge: {
    marginTop: responsiveHeight(4),
  },
  paymentName: {
    color: colors.charcol,
    fontFamily: fontFamily.medium,
  },
});

export {styles};
