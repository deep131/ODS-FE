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
  // Grid Styles
   cardView: {
    width: responsiveWidth(42),
    height: responsiveHeight(35),
    alignSelf: 'center',
    margin: responsiveWidth(3),
    marginTop: responsiveHeight(3),
    shadowColor: Platform.OS === 'ios' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,1)',
    shadowOffset: {width: 0, height: 0},
    borderWidth: 0.25,
    borderColor: colors.lightGray,
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 4,
    borderRadius: 20,
  },
  mainContainer: {flex: 1, alignItems: 'center',},

  cardViewInner: {
    alignItems: 'center',
    borderRadius: 10,
  },

  cardContent: {
    alignItems: 'center',
  },

  imageView: {
    height: responsiveHeight(18),
    width: responsiveWidth(42),
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  blankimageView: {
    height: responsiveHeight(6),
    width: responsiveWidth(29),
    alignSelf: 'center',
    opacity: 0.5,
    marginTop: spaceVertical.semiSmall,
  },

  textTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.small,
    marginTop: spaceVertical.extraSmall,
    height: responsiveHeight(6),
    alignSelf: 'flex-start',
    marginStart: responsiveWidth(4),
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
  row: {flexDirection: 'row', justifyContent: 'center'},
  descView: {
    marginLeft: responsiveWidth(4),
    marginBottom: responsiveHeight(1),
    marginTop: responsiveHeight(2),
  },
  description: {flexDirection: 'row', alignItems: 'center'},
  descriptionTitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.extraSmall,
    color: colors.charcol,
    width: responsiveWidth(30),
  },
  services: {
    width: responsiveWidth(42),
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    backgroundColor: colors.charcol,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  serviceText: {
    color: 'white',
    padding: 5,
    fontSize: fontSize.small,
    fontFamily: fontFamily.regular,
    top: 1.1,
  },
});

export {styles};
