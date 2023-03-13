import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  deviceWidth,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightestgreen,
  },
  adminMessageView: {
    width: deviceWidth / 1.5,
    backgroundColor: colors.white,
    paddingHorizontal: spaceVertical.extraSmall,
    paddingVertical: spaceVertical.extraSmall,
    marginTop: responsiveHeight(2),
    borderRadius: borderRadius.semiLarge,
    left: 20,
  },
  adminMessageCornerView: {
    height: 0,
    width: 0,
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderTopWidth: 20,
    borderTopColor: colors.white,
    position: 'absolute',
    left: 0,
    bottom: 0,
    transform: [{rotate: '180deg'}],
  },
  userMessageView: {
    width: deviceWidth / 1.5,
    backgroundColor: colors.white,
    paddingHorizontal: spaceVertical.extraSmall,
    paddingVertical: spaceVertical.extraSmall,
    marginTop: responsiveHeight(2),
    flexDirection: 'column',
    borderRadius: borderRadius.semiLarge,
    left: 60,
    elevation: 0.5,
  },
  userMessageCornerView: {
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderTopWidth: 20,
    borderTopColor: colors.white,
    position: 'absolute',
    left: 40,
    bottom: -responsiveHeight(0.35),
    transform: [{rotate: '45deg'}],
  },
  typeSomethingView: {
    backgroundColor: colors.white,
    width: deviceWidth,
    paddingHorizontal: spaceVertical.small,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    paddingVertical: responsiveHeight(1),
  },
  textInputStyles: {
    width: responsiveWidth(80),
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: borderRadius.semiLarge,
    paddingHorizontal: spaceVertical.semiSmall,
    fontFamily: fontFamily.regular,
  },
  adminTitle: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.medium,
    color: colors.secondary,
  },
  msgTitle: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.regular,
    color: colors.secondary,
  },

  adminView: {
    width: deviceWidth,
    flexDirection: 'row',
  },
  youView: {
    width: deviceWidth,
    flexDirection: 'row-reverse',
    position: 'relative',
  },
  px:{
    paddingHorizontal: spaceVertical.small,
},
  contentContainerStyle: {
    paddingBottom: responsiveHeight(10)
},
});

export {styles};
