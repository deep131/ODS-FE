import React, { useEffect, useRef, useState } from "react";
import { Pressable, Text, View, Animated, TouchableOpacity, LayoutAnimation, Platform, UIManager, ScrollView } from "react-native";
import { responsiveHeight, responsiveWidth, spaceVertical } from "../../../styles/variables";
import IonIcon from 'react-native-vector-icons/Ionicons';
import { styles } from "./FaqsStyles";

const Faqs = () => {

    const [drawerId, setdrawerId] = useState(null);
    const [faqArray, setfaqArray] = useState([
        {
            id: 1,
            faqQue: 'Does this service includes the cost of cleaning?',
            items: [
                {
                    id: 1,
                    faqAns: 'This service only includes which describes in the overview section.'
                },
            ]
        },
        {
            id: 2,
            faqQue: 'Is the price fixed for all types of cars?',
            items: [
                {
                    id: 1,
                    faqAns: 'The price may vary depending on your car type.'
                },
            ]
        },
    ]);

    const scrollRef: any = useRef(null);

    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{  marginHorizontal: responsiveWidth(4) }}>
                <Pressable>
                    <Animated.View style={styles.title}>
                        {faqArray.map((item: any, index: any) => (
                            <View key={index}>
                                <View style={styles.locationName}>
                                    <Text style={styles.titleText}>{item.faqQue}</Text>
                                    <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
                                        <IonIcon name={drawerId == item.id ? "chevron-down" : "chevron-forward"} color={'black'} size={25}
                                            onPress={() => {
                                                if (drawerId == item.id) {
                                                    setdrawerId(null);
                                                } else {
                                                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                                                    setdrawerId(item.id);
                                                    scrollRef.current?.scrollTo({
                                                        y: 0,
                                                        animated: true,
                                                    });
                                                }
                                            }
                                            }
                                        />
                                    </TouchableOpacity>
                                </View>

                                {drawerId == item.id ?
                                    <>
                                        <View style={styles.deviceName}>
                                            <Text style={styles.titleText1}>{item.items[0].faqAns}</Text>
                                        </View>
                                    </>
                                    : null}

                            </View>
                        ))}
                    </Animated.View>
                </Pressable>

            </View>
        </ScrollView>
    )

}

export default Faqs;