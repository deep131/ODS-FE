import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { borderRadius, colors, fontFamily, fontSize, responsiveHeight, responsiveWidth, spaceVertical } from "../../../styles/variables";
import { styles } from "./ReviewsStyles";
import IonIcon from 'react-native-vector-icons/Ionicons';

const Reviews = () => {

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.cardview}>
                {/* Reviews Title */}
                <View style={{ marginVertical: responsiveHeight(1), marginLeft: responsiveWidth(4) }}>
                    <Text style={{ fontFamily: fontFamily.medium, color: colors.secondary }}>Reviews</Text>
                </View>
                {/* Divider */}
                <View
                    style={{
                        alignSelf: 'center',
                        width: responsiveWidth(90),
                        borderBottomColor: colors.gray10,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }} />
                {/* Total Ratings */}
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{
                        fontFamily: fontFamily.semiBold,
                        marginTop: responsiveHeight(1),
                        color: colors.darkSecondary,
                        fontSize: 24,
                        textAlign: 'center',
                    }}>5</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                        }}>
                        {
                            Array.from({ length: 5 }, (x, i) => {
                                return (
                                    <IonIcon key={i} name="star" size={15} color={"#ffc300"} />
                                )
                            })

                        }
                    </View>
                    <Text style={{
                        marginTop: responsiveHeight(1),
                        fontFamily: fontFamily.regular,
                        color: colors.secondary,
                        fontSize: fontSize.small,
                        textAlign: 'center',
                    }}>2 Reviews</Text>
                </View>
            </View>
            {/* Divider */}
            <View
                style={{
                    alignSelf: 'center',
                    width: responsiveWidth(95),
                    borderBottomColor: colors.gray10,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />
            {/* Testimonials     */}
            <View style={{ alignSelf: 'flex-start', marginTop: responsiveHeight(2), marginLeft: responsiveWidth(4) }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: responsiveWidth(90)
                }}>

                    <Image
                        style={{
                            height: responsiveWidth(14),
                            width: responsiveWidth(14),
                            borderRadius: borderRadius.circle
                        }}
                        source={require('../../../assets/Images/noimage.jpeg')} />
                    {/* Column */}
                    <View style={{ marginLeft: responsiveWidth(4) }}>
                        <Text style={{
                            fontFamily: fontFamily.medium,
                            color: colors.darkGray
                        }}>Any Flower</Text>
                        {/* Row */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                }}>
                                {
                                    Array.from({ length: 5 }, (x, i) => {
                                        return (
                                            <IonIcon key={i} name="star" size={15} color={"#ffc300"} />
                                        )
                                    })

                                }
                            </View>
                            <Text style={{
                                marginLeft: responsiveWidth(2),
                                fontFamily: fontFamily.medium,
                                color: colors.darkGray
                            }}>5.0</Text>
                        </View>
                    </View>

                    <View style={{ position: 'absolute', right: 0 }}>
                        <Text style={{
                            fontFamily: fontFamily.regular,
                            fontSize: fontSize.extraSmall,
                            color: "#a2a2a2"
                        }}>10 days ago</Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: responsiveWidth(90),
                    marginVertical: responsiveHeight(2)
                }}>

                    <Image
                        style={{
                            height: responsiveWidth(14),
                            width: responsiveWidth(14),
                            borderRadius: borderRadius.circle
                        }}
                        source={require('../../../assets/Images/noimage.jpeg')} />
                    {/* Column */}
                    <View style={{ marginLeft: responsiveWidth(4) }}>
                        <Text style={{
                            fontFamily: fontFamily.medium,
                            color: colors.darkGray
                        }}>Maria Smith</Text>
                        {/* Row */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                }}>
                                {
                                    Array.from({ length: 5 }, (x, i) => {
                                        return (
                                            <IonIcon key={i} name="star" size={15} color={"#ffc300"} />
                                        )
                                    })

                                }
                            </View>
                            <Text style={{
                                marginLeft: responsiveWidth(2),
                                fontFamily: fontFamily.medium,
                                color: colors.darkGray
                            }}>5.0</Text>
                        </View>
                    </View>

                    <View style={{ position: 'absolute', right: 0 }}>
                        <Text style={{
                            fontFamily: fontFamily.regular,
                            fontSize: fontSize.extraSmall,
                            color: "#a2a2a2"
                        }}>15 days ago</Text>
                    </View>
                </View>
            </View>
        </View>

    )

}

export default Reviews;