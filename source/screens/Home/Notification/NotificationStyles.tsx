import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  marginHorizontal,
} from '../../../styles/variables';
const styles = StyleSheet.create({
  header: {
    height: responsiveHeight(8),
    backgroundColor: colors.lightgreen,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.HARD_WHITE,
  },
  notificationcontent: {
    width: responsiveWidth(90),
  },
  notificationrow: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginVertical: responsiveWidth(3),
    paddingVertical: responsiveWidth(4),
    paddingLeft: responsiveWidth(4),
    paddingRight: responsiveWidth(4),
    alignItems: 'center',
    borderRadius: borderRadius.boxRadius,
    borderWidth: 0.5,
    borderColor: colors.gray,
  },
  notificationdate: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
    color: colors.charcol,
  },
  listImageContainer: {
    marginRight: responsiveWidth(4),
  },
  notificationicon: {
    backgroundColor: colors.darkPrimary,
    borderRadius: borderRadius.L150,
    padding: responsiveWidth(2),
  },
  notificationdec: {
    width: responsiveWidth(70),
    fontSize: fontSize.small,
    color: colors.darkGray,
    fontFamily: fontFamily.regular,
  },
  flatStyle: {marginBottom: marginHorizontal.normal},
});
export {styles};
