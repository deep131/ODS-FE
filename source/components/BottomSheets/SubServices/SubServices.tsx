import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../styles/variables';
import {ODSgetSubServices} from '../../../utils/service';
import Button from '../../Button/Button';
import {styles} from './SubServicesStyles';

const SubServices = ({visitModal, setModalVisible, navigation, index}: any) => {
  const [subservices, setSubServices] = useState([]);

  const [disableTrue, setDisableTrue] = useState(true);
  const [addedItem, setAddedItem] = useState(null);

  useEffect(() => {
    const getsubService = async () => {
      const subservice = await ODSgetSubServices();
      setSubServices(subservice.data.result.subservice);
    };
    getsubService();
  }, []);

  // const incrementCount = (id: any, index: any) => {
  //   let subservices1 = subservices;
  //   setAddedItem(id);
  //   subservices.filter((item: any, index: any) => {
  //     if (item.id == id) {
  //       if (subservices[index].qty >= 0) {
  //         setDisableTrue(false);
  //         subservices[index].qty = subservices[index].qty + 1;
  //       } else {
  //         setDisableTrue(true);
  //       }
  //     }
  //   });
  //   setSubServices([...subservices1]);
  // };

  // const decrementCount = (id: any, index: any) => {
  //   let subservices1 = subservices;
  //   subservices.filter((item: any, index: any) => {
  //     if (item.id == id) {
  //       if (subservices[index].qty > 0) {
  //         setDisableTrue(false);
  //         subservices[index].qty = subservices[index].qty - 1;
  //         if (subservices[index].qty == 0) {
  //           setDisableTrue(true);
  //         }
  //       } else {
  //         setDisableTrue(true);
  //       }
  //     }
  //   });
  //   setSubServices([...subservices1]);
  // };

  const goToSelectDateTime = () => {
    navigation.navigate('SelectDateTime');
  };

  const renderItem = ({item, index}: any) => (
    <View
      style={[
        styles.cardview,
        addedItem === item.id
          ? {borderColor: colors.darkSecondary}
          : {borderColor: colors.white},
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft: responsiveWidth(4)}}>
          <Text
            style={{
              fontFamily: fontFamily.medium,
              fontSize: fontSize.extraSmall,
              color: colors.secondary,
              width: responsiveWidth(50),
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.semiBold,
              fontSize: fontSize.extraSmall,
              color: colors.darkSecondary,
            }}>
            {' '}
            {item.price}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            right: 10,
          }}>
          {/* {item.qty > 0 ? (
            <>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => decrementCount(item.id, index)}>
                <IonIcon
                  name="remove-circle"
                  color={colors.darkPrimary}
                  size={30}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: fontFamily.medium,
                  color: colors.secondary,
                  textAlign: 'center',
                  width: responsiveWidth(8),
                }}>
                {item.qty}
              </Text>
            </>
          ) : null} */}
          <TouchableOpacity
            activeOpacity={0.7}
            // onPress={() => incrementCount(item.id, index)}
          >
            <IonIcon name="add-circle" color={colors.darkPrimary} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

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
      <View style={[styles.modal, {height: responsiveHeight(60)}]}>
        <TouchableOpacity
          style={{position: 'absolute', right: 10, top: 5}}
          onPress={() => setModalVisible(false)}>
          <IonIcon name="close" size={25} color={colors.darkGray} />
        </TouchableOpacity>
        <View style={{alignSelf: 'center', marginTop: responsiveHeight(2)}}>
          <Image
            resizeMode="contain"
            style={styles.imageStyle}
            source={require('../../../assets/Images/enginerepair.jpg')}
          />
          <Text
            style={{
              fontFamily: fontFamily.medium,
              marginTop: responsiveHeight(1),
              color: colors.secondary,
            }}>
            Engine Repair Service
          </Text>
        </View>

        {/* SubServices List */}
        <SafeAreaView>
          <FlatList
            data={subservices}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id}
          />
        </SafeAreaView>
        <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
          <Button
            name="Add to cart"
            color={disableTrue ? colors.lightgreen : colors.darkPrimary}
            buttonTextColor={disableTrue ? colors.charcol : colors.white}
            onPress={() => {
              setModalVisible(false);
              goToSelectDateTime();
            }}
            disableTrue={disableTrue}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SubServices;
