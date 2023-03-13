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
  container:{
    flex:1
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
    width: responsiveWidth(90),
    borderColor: '#bbb',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.normal,
    marginTop: spaceVertical.small,
    position: 'absolute',
  },

  search: {
    height: responsiveHeight(6),
    width: responsiveWidth(75),
    paddingStart: 20,
    fontFamily: fontFamily.regular,
    alignSelf: 'center',
  },

  categoryselectview: {
    flex: 1,
    marginTop: responsiveHeight(10),
  },

  topbtnview: {
    height: responsiveHeight(4),
    width: responsiveWidth(45),
    borderWidth: 1,
    borderRadius: borderRadius.normal,
    justifyContent: 'center',
  },

  btntext: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.small,
  },

  flatlistinnerview: {
    marginLeft: marginHorizontal.semiSmall,
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    height: responsiveHeight(7),
    width: responsiveWidth(15),
    marginTop: spaceVertical.extraSmall,
    borderRadius: borderRadius.normal,
  },

  line: {
    borderWidth: 0.2,
    marginLeft: marginHorizontal.semiSmall,
    marginTop: spaceVertical.extraSmall,
    width: responsiveWidth(85),
    borderColor: colors.grayline,
  },
  serchTitle: {
    marginLeft: marginHorizontal.toosmall,
    marginTop: spaceVertical.extraSmall,
  },
  nametext: {
    fontSize: fontSize.small,
    color: colors.secondary,
    fontFamily: fontFamily.medium,
  },

  discounttext: {
    fontSize: fontSize.extraSmall,
    color: colors.gray10,
    fontFamily: fontFamily.regular,
  },

  greentext: {
    fontSize: fontSize.extraSmall,
    color: colors.projectgreen,
    fontFamily: fontFamily.regular,
  },
});

export {styles};
