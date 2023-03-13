import { StyleSheet } from "react-native";
import { borderRadius, colors, fontFamily, fontSize, marginHorizontal, responsiveHeight, responsiveWidth, spaceVertical } from "../../../styles/variables";

const styles = StyleSheet.create({

    modal: {
        borderTopLeftRadius:borderRadius.boxRadius,
        borderTopRightRadius:borderRadius.boxRadius,
        backgroundColor:colors.white,
        overflow:'hidden',
    },
    imageStyle:{ 
        height: responsiveHeight(12), 
        width: responsiveWidth(30),
        borderRadius:borderRadius.semiLarge,
        alignSelf:'center'
    },
    cardview:{
        width: responsiveWidth(90),
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf:'center',
        backgroundColor: colors.lightblue,
        borderRadius: borderRadius.semiLarge,
        shadowOpacity: 2,
        marginLeft:0,
        marginRight:0,
        elevation: 1,
        marginVertical: spaceVertical.extraSmall,
        paddingVertical:10,
      },
})

export {styles};