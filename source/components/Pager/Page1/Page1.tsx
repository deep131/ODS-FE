import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { spaceVertical } from "../../../styles/variables";
import { styles } from "../PageStyles";


const Page1 = ({navigation}:any) => {
    return (
        <>
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <View>
                    <Image source={require('../../../assets/Images/odslogo.png')} style={[styles.img, { overflow: 'visible' }]} resizeMode='cover'></Image>
                </View>

                <TouchableOpacity style={styles.skipButton} onPress={()=> navigation.navigate("SignUp")}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>

                <View style={{marginTop:spaceVertical.semiSmall}}>
                    <Text style={styles.title}>Easy Process</Text>
                    <Text style={styles.subTitle}>Find all your house needs in one place. We provide every service to make your home experience smooth.</Text>
                </View>
            </View>
        </>
    )
}

export default Page1;