import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/variables';
import Header from '../../../components/Header/Header';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button/Button';
import {styles} from './CartStyles';

const Cart = ({navigation}: any) => {
  return (
    <>
      <Header
        name={'Cart'}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.darkPrimary}
        iconColor={colors.white}
        back={true}
      />

      <View style={styles.container}>
        <View style={styles.cartNo}>
          <Text style={styles.textRound}>1</Text>
          <Text
            onPress={() => navigation.navigate('Services')}
            style={styles.servicesText}>
            Services in cart
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={styles.cardview}>
            <View style={styles.cartContainer}>
              <Image
                resizeMode="contain"
                style={styles.imageStyle}
                source={require('../../../assets/Images/enginerepair.jpg')}
              />

              <View>
                <Text style={styles.title}>Engine Repair</Text>
                <Text style={styles.itemdesc}>Engine Hauling</Text>
                <View style={styles.row}>
                  <Text style={styles.discPrice}>200$</Text>
                </View>
              </View>
              <View style={styles.trashView}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{alignSelf: 'flex-end', bottom: 10}}>
                  <IonIcon name="trash" color={colors.red} size={25} />
                </TouchableOpacity>

                <View style={styles.row}>
                  <>
                    <TouchableOpacity activeOpacity={0.7}>
                      <IonIcon
                        name="remove-circle"
                        color={colors.darkPrimary}
                        size={30}
                      />
                    </TouchableOpacity>
                    <Text style={styles.itemCount}>1</Text>
                  </>
                  <TouchableOpacity activeOpacity={0.7}>
                    <IonIcon
                      name="add-circle"
                      color={colors.darkPrimary}
                      size={30}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottomView}>
          <Text style={styles.bottomPriceText}>Total Price : 200$</Text>
          <Button
            name="Proceed to checkout"
            color={colors.secondary}
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      </View>
    </>
  );
};

export default Cart;
