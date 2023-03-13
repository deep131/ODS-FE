import React, { useRef, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, 
ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors} from "../../../styles/variables";
import IonIcon from 'react-native-vector-icons/Ionicons';
import Header from "../../../components/Header/Header";
import { styles } from "./ChatwithAdminStyles";

const ChatwithAdmin = ({ navigation }: any) => {
    const [chats, setchats]: any = useState([]);
    const [message, setmessage] = useState('');
    const scrollViewRef = useRef<ScrollView | null>(null);
    const savechat = () => {
        if (message) {
            let data = chats;
            let obj = {
                "id": Date.now(),
                "type": "USER",
                "message": message
            }
            data.push(obj);
            setchats([...data]);
            setmessage("");
            Keyboard.dismiss();
        }
    }
    return (
        <>
            <Header
                name={'Chat'}
                navigation={navigation}
                textColor={colors.white}
                bgColor={colors.darkPrimary}
                iconColor={colors.white}
                back={true} />
            <View
                style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                >
                    <View
                        style={styles.px}>
                        <ScrollView
                            contentContainerStyle={styles.contentContainerStyle}
                            ref={scrollViewRef}
                            showsVerticalScrollIndicator={false}
                            onContentSizeChange={() => {
                                scrollViewRef?.current?.scrollToEnd({ animated: true });
                            }}>
                            {chats && chats.length
                                ? chats.map((item: any, index: any) => {
                                    return (
                                        <View key={index}>
                                            {item?.type == 'ADMIN' ? (
                                                <View
                                                    style={styles.adminView}>
                                                    <View
                                                        style={styles.adminMessageView}>
                                                        <Text style={styles.adminTitle}>
                                                            Admin
                                                        </Text>
                                                        <Text style={styles.msgTitle}>
                                                            {item?.message}
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={styles.adminMessageCornerView}></View>
                                                </View>
                                            ) : (
                                                <View style={styles.youView}>
                                                    <View style={styles.userMessageView}>
                                                        <Text style={styles.adminTitle}>
                                                            You
                                                        </Text>
                                                        <Text style={styles.msgTitle}>
                                                            {item?.message}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.userMessageCornerView}></View>
                                                </View>
                                            )}
                                        </View>
                                    );
                                })
                                : null}
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>

                <View
                    style={styles.typeSomethingView}>
                    <TextInput
                        placeholder="Type Something"
                        value={message}
                        multiline={true}
                        placeholderTextColor={colors.secondary}
                        selectionColor={colors.darkPrimary}
                        style={styles.textInputStyles}
                        onChangeText={(value: any) => {
                            setmessage(value);
                        }}
                    />
                    <TouchableOpacity onPress={savechat}>
                        <IonIcon
                            name="send"
                            size={25}
                            style={{
                                color: colors.TEXT,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )

}

export default ChatwithAdmin;