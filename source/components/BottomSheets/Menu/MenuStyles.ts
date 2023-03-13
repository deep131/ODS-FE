import { StyleSheet } from "react-native";
import { borderRadius, colors, fontFamily, fontSize, marginHorizontal, responsiveHeight, responsiveWidth, spaceVertical } from "../../../styles/variables";

const styles = StyleSheet.create({

    modal: {
        borderTopLeftRadius:borderRadius.boxRadius,
        borderTopRightRadius:borderRadius.boxRadius,
        backgroundColor:colors.white,
        overflow:'hidden',
    },
    itemView:{
        backgroundColor: colors.lightblue,
        height: responsiveHeight(8), width: responsiveWidth(16),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: borderRadius.normal,
        margin: 10
    }

})

export {styles};