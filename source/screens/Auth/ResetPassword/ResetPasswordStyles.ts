import { StyleSheet } from "react-native";
import { borderRadius, colors, fontFamily, fontSize, marginHorizontal, responsiveHeight, responsiveWidth, spaceVertical } from "../../../styles/variables";

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white,
    },
    largeWidth:{width: responsiveWidth(90)},
    logo:{
        width:responsiveWidth(40),
        height:responsiveHeight(10),
    },
    input:{
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    textInputText:{
        color: colors.secondary, 
        fontFamily: fontFamily.semiBold,
        fontSize:fontSize.small,
        marginVertical:spaceVertical.extraSmall
    },
    textInputText1:{
        color: colors.secondary, 
        fontFamily: fontFamily.regular,
        fontSize:fontSize.small,
    },
    textInput:{
        borderWidth: 1,
        borderColor: colors.lightGray,
        // marginTop: spaceVertical.extraSmall,
        paddingStart:responsiveWidth(2),
        fontFamily:fontFamily.medium,
        fontSize:fontSize.small 
    },
    Error: {
        color:colors.red,
        fontFamily: fontFamily.regular,
        marginTop:spaceVertical.extraSmall
    },
    noView:{marginTop: spaceVertical.extraSmall},
    btnView:{marginTop: spaceVertical.normal},
})

export { styles };