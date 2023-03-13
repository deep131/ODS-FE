import React,{useContext} from "react";
import { Text, View } from "react-native";
import Header from "../../../components/Header/Header";
import {ThemeContext} from '../../../Theme/Theme';
import { colors, fontFamily, responsiveHeight, responsiveWidth } from "../../../styles/variables";
import { styles } from "../Bookings/BookingStyles";

const ParticularPolicy = ({ navigation, route }: any) => {
    const type = route.params.type;  
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <View style={{flex:1, backgroundColor: theme =='light'? colors.white : colors.black}}>
          
            <Header
                name={type == "privacy" ? "Privacy Policy" : type == "cancellation" ? "Cancellation Policy" : "Refund Policy"}
                navigation={navigation}
                textColor={colors.white}
                bgColor={colors.darkPrimary}
                iconColor={colors.white}
                back={true}
                theme={theme}
        />

            <View style={{ alignItems: 'center'}}>

                <View style={{
                    marginTop: responsiveHeight(2),
                }}>
                    <Text style={{
                        fontFamily: fontFamily.regular,
                        color: theme == 'light' ? colors.secondary : colors.white,
                        width:responsiveWidth(90)
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </View>

                <View style={{
                    marginTop: responsiveHeight(2)
                }}>
                    <Text style={{
                        fontFamily: fontFamily.regular,
                        color: theme == 'light' ? colors.secondary : colors.white,
                        width:responsiveWidth(90)
                    }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View>

                <View style={{
                    marginTop: responsiveHeight(2)
                }}>
                    <Text style={{
                        fontFamily: fontFamily.regular,
                        color:theme == 'light' ? colors.secondary : colors.white,
                        width:responsiveWidth(90)
                    }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
                </View>
            </View>
        </View>
    )

}

export default ParticularPolicy;