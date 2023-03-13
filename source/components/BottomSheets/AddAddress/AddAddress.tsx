import React, { useRef, useState,useContext } from "react";
import { Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Modal from 'react-native-modal';
import { colors, fontFamily, fontSize, responsiveHeight, responsiveWidth, spaceVertical } from "../../../styles/variables";
import {useTranslation} from 'react-i18next';
import { styles } from "./AddAddressStyles";
import IonIcon from 'react-native-vector-icons/Ionicons';
import Button from "../../Button/Button";
import {ThemeContext} from '../../../Theme/Theme';

const AddAddress = ({ visitModal, setModalVisible, navigation,type,chooseMessage }: any) => {

    const [streetError, setStreetError] = useState(false);
     const[countryError, setcountryError] = useState(false);
    const [stateError, setstateError] = useState(false);
    const [cityError, setcityError] = useState(false);
    const [zipCodeError, setzipCodeError] = useState(false);
    const [logInAttemp, setLogInAttemp] = useState(false);
    const {theme, setTheme} = useContext(ThemeContext);
    const {t, i18n} = useTranslation();
    const [Form, setForm]: any = useState({
        street: "",
        city: "",
        zipCode: "",
        state:"",
        country:"",
    });

   
    const input1: any = useRef();
    const input2: any = useRef();
    const input3: any = useRef();
    const input4: any = useRef();
    const input5: any = useRef();
    const input6: any = useRef();

    return (
        <Modal
            isVisible={visitModal}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            onBackdropPress={() => setModalVisible(false)}
            backdropTransitionOutTiming={0}
            backdropTransitionInTiming={0}
            useNativeDriver={true}
            onBackButtonPress={() => setModalVisible(false)}
            hideModalContentWhileAnimating
            style={{
                flex: 1,
                margin: 0,
                justifyContent: 'flex-end',
            
            }}>

            <View style={[styles.modal, { height: responsiveHeight(65) }, {backgroundColor : theme == 'light' ? colors.white : colors.black}]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: responsiveHeight(2) }}>
                    <Text style={[styles.addTitle,{color : theme == 'light' ? colors.darkGray : colors.white}]}>{type == "add" ? t('Add Address') : t('Update Address') }</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 10 }} onPress={() => setModalVisible(false)}>
                        <IonIcon name='close' size={25} color={theme == 'light'? colors.darkGray: colors.white} />
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: responsiveHeight(4) }}>
                    {/* Form */}

                    {/* Title */}
                    <View style={{ marginTop: spaceVertical.extraSmall }}>
                        <Text style={[styles.textInputText,{color : theme == 'light' ? colors.secondary : colors.white}]}>{t("Street")}</Text>
                        <TextInput
                            style={[styles.textInput, { width: responsiveWidth(90) }, {borderColor : theme == 'light' ? colors.lightGray : colors.white}]}
                            value={Form.street}
                            onChangeText={(value) => {
                                if (value) {
                                    setStreetError(false);
                                }
                                setForm({ ...Form, street: value })
                            }}
                            onSubmitEditing={() => input1.current.focus()}
                            returnKeyType='next'
                            blurOnSubmit={false}
                            placeholderTextColor= {theme=='light' ? colors.grayline : colors.white}
                            placeholder="ex..A10,Sunctity bunglows"
                            
                        ></TextInput>
                        {/* Email Error     */}
                        {streetError && logInAttemp ? (
                            <Text style={[styles.Error]}>{t("Please enter valid")}</Text>
                        ) : null}
                    </View>
 {/* City */}
 <View style={{ marginTop: spaceVertical.extraSmall }}>
                        <Text style={[styles.textInputText,{color : theme == 'light' ? colors.secondary : colors.white}]}>{t("City")}</Text>
                        <TextInput
                            style={[styles.textInput, { width: responsiveWidth(90) },, {borderColor : theme == 'light' ? colors.lightGray : colors.white}]}
                            value={Form.city}
                            ref={input3}
                            onChangeText={(value) => {
                                if (value) {
                                    setcityError(false);
                                }
                                setForm({ ...Form, city: value })
                            }}
                            onSubmitEditing={() => input4.current.focus()}
                            blurOnSubmit={false}
                            returnKeyType='next'
                        ></TextInput>
                        {/* Email Error     */}
                        {cityError && logInAttemp ? (
                            <Text style={[styles.Error]}>{t("Please enter valid")}</Text>
                        ) : null}
                    </View>

                    {/* Zip/Postal Code */}
                    <View style={{ marginTop: spaceVertical.extraSmall }}>
                        <Text style={[styles.textInputText,{color : theme == 'light' ? colors.secondary : colors.white}]}>{t("Zip/Postal Code")}</Text>
                        <TextInput
                            style={[styles.textInput, { width: responsiveWidth(90) },, {borderColor : theme == 'light' ? colors.lightGray : colors.white}]}
                            value={Form.zipCode}
                            ref={input4}
                            onChangeText={(value) => {
                                if (value) {
                                    setzipCodeError(false);
                                }
                                setForm({ ...Form, zipCode: value })
                            }}
                            onSubmitEditing={() => input5.current.focus()}
                            blurOnSubmit={false}
                            returnKeyType='next'
                        ></TextInput>
                        {/* Email Error     */}
                        {zipCodeError && logInAttemp ? (
                            <Text style={[styles.Error]}>{t("Please enter valid")}</Text>
                        ) : null}
                    </View>

                    {/* State  */}
                    <View style={{ marginTop: spaceVertical.extraSmall }}>
                        <Text style={[styles.textInputText,{color : theme == 'light' ? colors.secondary : colors.white}]}>{t("State")}</Text>
                        <TextInput
                            style={[styles.textInput, { width: responsiveWidth(90) },, {borderColor : theme == 'light' ? colors.lightGray : colors.white}]}
                            value={Form.state}
                            ref={input1}
                            onChangeText={(value) => {
                                if (value) {
                                    setstateError(false);
                                }
                                setForm({ ...Form, state: value })
                            }}
                            onSubmitEditing={() => input2.current.focus()}
                            blurOnSubmit={false}
                            returnKeyType='next'
                        ></TextInput>
                        {/* Email Error     */}
                        {stateError && logInAttemp ? (
                            <Text style={[styles.Error]}>{t("Please enter valid")}</Text>
                        ) : null}
                    </View>

                   {/* country */}
                    <View style={{ marginTop: spaceVertical.extraSmall }}>
                        <Text style={[styles.textInputText,{color : theme == 'light' ? colors.secondary : colors.white}]}>{t("Country")}</Text>
                        <TextInput
                            style={[styles.textInput, { width: responsiveWidth(90) },, {borderColor : theme == 'light' ? colors.lightGray : colors.white}]}
                            value={Form.country}
                            ref={input2}
                            onChangeText={(value) => {
                                if (value) {
                                    setcountryError(false);
                                }
                                setForm({ ...Form, country: value })
                            }}
                            onSubmitEditing={() => input3.current.focus()}
                            blurOnSubmit={false}
                            returnKeyType='next'
                        ></TextInput>
                        {/* Email Error     */}
                        {countryError && logInAttemp ? (
                            <Text style={[styles.Error]}>{t("Please enter valid")}</Text>
                        ) : null}
                    </View>

                </ScrollView>
                <View style={{ marginVertical: responsiveHeight(1) }}>
                    <Button name={t("Save Location")} color={colors.darkPrimary} 
                            onPress={()=> chooseMessage(Form)}/>
                </View>
            </View>
        </Modal>
    );
}

export default AddAddress;