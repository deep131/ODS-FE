import React from "react";
import { Text, View } from "react-native";
import { colors, fontFamily, responsiveHeight, responsiveWidth } from "../../../styles/variables";

const Overview = () => {

    return (
        <View style={{ marginTop: responsiveHeight(2), marginLeft: responsiveWidth(4) }}>
            <Text style={{
                fontFamily: fontFamily.semiBold,
                color: colors.secondary
            }}>Engine Repair Service Includes:</Text>
            <View style={{marginTop:responsiveHeight(2)}}>
                <Text style={{color:colors.darkGray,fontFamily:fontFamily.regular}}>{"\u2B24" + " "}Service Charge</Text>
                <Text style={{color:colors.darkGray,fontFamily:fontFamily.regular}}>{"\u2B24" + " "}Engine Oil</Text>
                <Text style={{color:colors.darkGray,fontFamily:fontFamily.regular}}>{"\u2B24" + " "}Oil Filter Replacement</Text>
                <Text style={{color:colors.darkGray,fontFamily:fontFamily.regular}}>{"\u2B24" + " "}Air Filter</Text>
                <Text style={{color:colors.darkGray,fontFamily:fontFamily.regular}}>{"\u2B24" + " "}Spark Plugs</Text>
            </View>
        </View>
    )

}

export default Overview;