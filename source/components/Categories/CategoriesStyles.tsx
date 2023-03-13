import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../styles/variables';

const styles = StyleSheet.create({
  categoryname: {
    marginTop: spaceVertical.extraSmall,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.XXsmall,
    textAlign: 'center',
    height: responsiveHeight(6),
    color: 'black',
    alignSelf: 'center',
  },
  categoryimage: {
    height: responsiveHeight(6),
    width: responsiveWidth(18),
    alignSelf: 'center',
  },
  categoriesview: {
    width: responsiveWidth(25),
    height: responsiveHeight(15),
    borderColor: colors.white,
    borderWidth:1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.semiLarge,
    marginVertical: spaceVertical.extraSmall,
  },
});

export {styles};
