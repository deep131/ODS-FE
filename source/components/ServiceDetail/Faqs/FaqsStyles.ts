import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize, responsiveHeight, responsiveWidth, spaceVertical } from "../../../styles/variables";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    title: {
        justifyContent: 'center',
      },

      locationName: {
        flexDirection: 'row',
        alignItems: 'center',
        // height: responsiveHeight(6),
        paddingVertical:10,
        marginTop: spaceVertical.extraSmall,
        backgroundColor: "#f2f2f2",
      },

      titleText: {
        marginLeft: responsiveWidth(8),
        color: colors.charcol,
        fontFamily: fontFamily.medium,
        fontSize: fontSize.small,
        height: responsiveHeight(5),
        width: responsiveWidth(70),
        textAlignVertical:'center'
      },
      titleText1: {
        marginLeft: responsiveWidth(8),
        color: colors.charcol,
        fontFamily: fontFamily.regular,
        fontSize: fontSize.extraSmall,
        height: responsiveHeight(5),
        width: responsiveWidth(70),
        textAlignVertical:'center'
      },

      childTitle: {
        justifyContent: 'center',
      },

      deviceName: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: spaceVertical.extraSmall,
        // height: responsiveHeight(10),
        backgroundColor: colors.lightblue,
        paddingVertical:10,
        marginTop: spaceVertical.extraSmall
      }

})

export { styles };
