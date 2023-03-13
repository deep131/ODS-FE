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
    backgroundColor: colors.white,
  },
  container_dark: {
    flex: 1,
    backgroundColor: colors.black,
  },
  categoryname: {
    marginTop: spaceVertical.extraSmall,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.XXsmall,
    height: responsiveHeight(4),
    color: 'black',
    alignSelf: 'center',
  },
  categoryimage: {
    height: responsiveHeight(4),
    width: responsiveWidth(18),
    alignSelf: 'center',
  },
  categoriesview: {
    height: responsiveHeight(12),
    width: responsiveWidth(20),

    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: borderRadius.semiLarge,
    shadowOpacity: 2,
    marginLeft: 0,
    marginRight: 0,
    // marginTop: spaceVertical.extraSmall,
    elevation: 5,
    marginVertical: spaceVertical.extraSmall,
  },
  cardview: {
    width: responsiveWidth(45),
    height: responsiveHeight(33),
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
    borderRadius: borderRadius.semiLarge,
    shadowOpacity: 2,
    borderBottomWidth: 0,
    elevation: 5,
    marginVertical: spaceVertical.small,
    marginHorizontal: spaceVertical.tiny,
  },
  imageStyle: {
    height: responsiveHeight(18),
    width: responsiveWidth(40),
    borderRadius: borderRadius.semiLarge,
    margin: 10,
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
  categories: {marginHorizontal: responsiveWidth(2)},
  render: {
    alignItems: 'center',
    marginVertical: responsiveHeight(0.5),
  },
  col: {
    alignSelf: 'flex-start',
    marginTop: responsiveHeight(0.2),
    justifyContent: 'space-between',
    marginStart: 10,
  },
  title: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
  },
  description: {
    fontFamily: fontFamily.regular,
    color: colors.darkGray,
    width: responsiveWidth(55),
    fontSize: 12,
  },
  service: {
    width: responsiveWidth(45),
    backgroundColor: colors.charcol,
    height: responsiveHeight(5),
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    marginTop: 7,
    justifyContent: 'center',
    elevation: 5,
  },
  servicesText: {
    fontFamily: fontFamily.medium,
    color: colors.white,
    alignSelf: 'center',
    top: 1,
  },
});

export {styles};
