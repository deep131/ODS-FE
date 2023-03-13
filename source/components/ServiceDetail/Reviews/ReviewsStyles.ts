import { Platform, StyleSheet } from "react-native";
import { borderRadius, colors, fontFamily, fontSize, marginHorizontal, responsiveHeight, responsiveWidth, spaceVertical } from "../../../styles/variables";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    cardview:{
        width: responsiveWidth(95),
        borderWidth: 1,
        borderColor: colors.white,
        justifyContent: 'center',
    
        backgroundColor: colors.white,
        borderRadius: borderRadius.semiLarge,
        shadowOpacity: 2,
        marginLeft:0,
        marginRight:0,
        elevation: 1,
        marginVertical: spaceVertical.extraSmall,
      },
})

export { styles };