import { StyleSheet } from "react-native";
import { borderRadius, colors, fontFamily, fontSize, responsiveHeight, responsiveWidth, spaceVertical } from "../../styles/variables";

const styles = StyleSheet.create({

    alertView: {
        backgroundColor: colors.HARD_WHITE,
        height: responsiveHeight(25),
        width: responsiveWidth(85),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: borderRadius.boxRadius,
    },

    Alerttitle: {
        fontFamily: fontFamily.semiBold,
        fontSize: fontSize.normal,
        marginTop: spaceVertical.small,
        color: colors.charcol,
        textAlign : "center",
        paddingHorizontal : responsiveWidth(2)

    },

    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '90%',
        paddingVertical: spaceVertical.semiSmall
    },

    Alertbutton: {
        height: responsiveHeight(6),
        width: responsiveWidth(32),
        borderRadius: borderRadius.boxRadius,
        backgroundColor:colors.darkPrimary,
        justifyContent: 'center'
    },

    btnText: {
        alignSelf: 'center',
        color: colors.white,
        fontFamily: fontFamily.semiBold
    },
    Alertsubtitle: {
        fontFamily: fontFamily.semiBold,
        fontSize: fontSize.medium,
        color: colors.charcol,
        textAlign : "center",
        paddingHorizontal : responsiveWidth(2)
    },

})

export { styles };
