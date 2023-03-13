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
    body: {
        flex: 1,
        backgroundColor: colors.white,
      },
      cardview: {
        width: responsiveWidth(95),
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: borderRadius.semiLarge,
        shadowOpacity: 2,
        marginLeft: 0,
        marginRight: 0,
        elevation: 5,
        marginVertical: spaceVertical.extraSmall,
      },
      locationView: {
        marginLeft: responsiveWidth(4),
        paddingVertical: responsiveHeight(2),
        flexDirection: 'row',
      }, locationTitle: {
        fontFamily: fontFamily.medium,
        color: colors.secondary,
      },
      locationSubtitle: {
        fontFamily: fontFamily.regular,
        color: colors.secondary,
        // width: responsiveWidth(90),
      },cityTitle:{
        fontFamily: fontFamily.regular,
        color: colors.secondary,
      },
});

export {styles};
