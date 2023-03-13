import { Platform, StyleSheet } from "react-native";
import { borderRadius, colors, fontFamily, fontSize, marginHorizontal, responsiveHeight, responsiveWidth, spaceVertical } from "../../styles/variables";

const styles = StyleSheet.create({

    headerView: {
        height: responsiveHeight(8),
        width: responsiveWidth(95),
        marginTop: Platform.OS === 'ios' ? spaceVertical.extraSmall + 18 : 0,
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
        alignSelf:"center"
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: responsiveWidth(90),
        alignSelf: 'center',
        marginTop: marginHorizontal.small,
    },

    centerText: {
        fontFamily: fontFamily.medium,
        fontSize: fontSize.normal,
    },

    rightText: {
        color: colors.charcol,
        fontFamily: fontFamily.medium,
        fontSize: fontSize.normal,
    },

    icon1: {
        color: colors.white,
        fontSize: fontSize.large,
        borderRadius: borderRadius.normal,
    },

    backIcon: {
        fontSize: fontSize.extraLarge0,
        backgroundColor: colors.HARD_WHITE,
        borderRadius: borderRadius.normal,
    },

    notification: {
        width: responsiveWidth(1.5),
        height: responsiveHeight(0.75),
        borderRadius: borderRadius.normal,
        backgroundColor: colors.primary,
        zIndex: 1,
        position: 'absolute',
        marginLeft: marginHorizontal.extraSmall + 6,
    },
    cartCount: {
        backgroundColor: colors.red,
        borderRadius: borderRadius.XLarge,
        width: responsiveWidth(4.5),
        height: responsiveWidth(4.5),
        alignItems: 'center',
        justifyContent:'center',
        zIndex: 1,
        right: responsiveWidth(-2.2),
        top: responsiveWidth(-1.5),
        position: 'absolute',
        textAlign:'center',
        color:colors.white,
        fontSize:fontSize.XXsmall,
        textAlignVertical:'center',
        fontFamily:fontFamily.medium
      },

});

export { styles };
