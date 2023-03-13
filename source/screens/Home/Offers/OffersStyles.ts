import {Platform, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../../styles/variables';

const styles = StyleSheet.create({
  cardView: {
    width: responsiveWidth(42),
    alignSelf: 'center',
    margin: responsiveWidth(3),
    shadowColor: Platform.OS === 'ios' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,1)',
    shadowOffset: {width: 0, height: 0},
    borderWidth: 0.25,
    borderColor: colors.lightGray,
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 4,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  label: {
    position: 'absolute',
    right: 0,
    backgroundColor: colors.darkSecondary,
    borderBottomLeftRadius: 10,
  },
  labelTitle: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    paddingHorizontal: responsiveWidth(3),
  },
  title: {
    marginLeft: responsiveWidth(2),
    marginBottom: responsiveHeight(1),
  },
  titleText: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.XXsmall,
    color: colors.darkGray,
  },
  price: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.XXsmall,
    color: colors.red,
    textDecorationLine: 'line-through',
  },
  priceView: {flexDirection: 'row', alignItems: 'center'},
  priceAmount: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.small,
    color: colors.darkSecondary,
  },
  cardViewInner: {
    backgroundColor: colors.white,
    alignItems: 'center',
  },

  cardContent: {
    alignItems: 'center',
  },

  imageView: {
    height: responsiveHeight(16),
    width: responsiveWidth(42),
    alignSelf: 'center',
  },

  textTitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.extraSmall,
    color: colors.charcol,
    marginTop: spaceVertical.extraSmall,
    height: responsiveHeight(5),
    alignSelf: 'center',
  },

  textPrice: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.small,
    color: colors.secondary,
    textAlign: 'center',
    marginVertical: spaceVertical.extraSmall,
  },

  countryImage: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
    right: 5,
  },

  plus: {position: 'absolute', right: 2},
});

export {styles};
