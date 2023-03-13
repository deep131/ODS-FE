import { StyleSheet } from "react-native";
import { borderRadius, colors, fontFamily, fontSize, marginHorizontal, responsiveHeight, responsiveWidth, spaceVertical } from "../../../styles/variables";

const styles = StyleSheet.create({

    modal: {
        borderTopLeftRadius:borderRadius.boxRadius,
        borderTopRightRadius:borderRadius.boxRadius,
        backgroundColor:colors.white,
        overflow:'hidden',
    },
    addTitle:{
        fontFamily: fontFamily.semiBold,
        color: colors.darkGray,
        fontSize: fontSize.normal
    },
    textInputText:{
        color: colors.secondary, 
        fontFamily: fontFamily.semiBold,
        fontSize:fontSize.small,
    },
    textInput:{
        borderWidth: 1,
        borderColor: colors.lightGray,
        marginTop: spaceVertical.extraSmall,
        paddingStart:responsiveWidth(2),
        fontFamily:fontFamily.medium,
        fontSize:fontSize.small 
    },
    Error: {
        color:colors.red,
        fontFamily: fontFamily.regular,
        marginTop:spaceVertical.extraSmall
    },
})

export {styles};