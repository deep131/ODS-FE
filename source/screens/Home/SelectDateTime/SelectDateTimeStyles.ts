import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
  borderRadius,
} from '../../../styles/variables';

const styles = StyleSheet.create({
  header: {
    height: responsiveHeight(8),
  },
  title: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
    textDecorationLine: 'underline',
  },
  verticleLine: {
    height: '50%',
    width: 1,
    backgroundColor: colors.gray10,
  },
  body: {
    flex: 1,
    backgroundColor: colors.white,
  },
  search: {
    height: responsiveHeight(6),
    width: responsiveWidth(75),
    fontFamily: fontFamily.medium,
  },
  dateandtimeView: {
    flexDirection: 'row',
    marginLeft: marginHorizontal.semiSmall,
    marginTop: spaceVertical.extraSmall,
    alignItems: 'center',
    width: 100,
  },
  dateandtimeTitle: {
    marginLeft: marginHorizontal.small,
    fontFamily: fontFamily.medium,
    color: colors.charcol,
    fontSize: fontSize.medium,
  },
  pickTime: {
    fontFamily: fontFamily.medium,
    color: colors.charcol,
    fontSize: fontSize.medium,
  },
  backArrow: {
    fontFamily: fontFamily.medium,
    color: colors.secondary,
    fontSize: fontSize.medium,
  },
  height: {
    height: responsiveHeight(46),
  },
  pickTimeView: {
    marginLeft: marginHorizontal.small,
    marginTop: spaceVertical.semiSmall,
  },
  pickDisplay: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: colors.white,
    paddingBottom: responsiveHeight(2),
  },
  timeTitle: {
    textAlign: 'center',
    padding: 10,
    color: colors.charcol,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.small,
    top: 1,
  },
  timeBadge: {
    marginTop: spaceVertical.extraSmall,
    width: responsiveWidth(26),
    borderRadius: borderRadius.bigboxradius,
    marginRight: 20,
  },
});

export {styles};
