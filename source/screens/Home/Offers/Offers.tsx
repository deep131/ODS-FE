import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/variables';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SubServices from '../../../components/BottomSheets/SubServices/SubServices';
import Header from '../../../components/Header/Header';
import {styles} from './OffersStyles';

const Offers = ({navigation}: any) => {
  const [visitModal, setModalVisible] = useState(false);

  const serviesData = [
    {
      id: 1,
      name: 'Engine Repair',
      image: require('../../../assets/Images/enginerepair.jpg'),
      originalPrice: '500$',
      discountedPrice: '300$',
    },
    {
      id: 2,
      name: 'Checkup & Maintainance',
      image: require('../../../assets/Images/carcheckup.jpg'),
      originalPrice: '400$',
      discountedPrice: '350$',
    },
    {
      id: 3,
      name: 'Engine & Oil, Filter Change',
      image: require('../../../assets/Images/engineoil.jpg'),
      originalPrice: '300$',
      discountedPrice: '200$',
    },
  ];

  const renderGrid = ({item, index}: any) => (
    <View key={index} style={[styles.cardView]}>
      <View style={styles.cardViewInner}>
        <View style={styles.cardContent}>
          <TouchableOpacity
            activeOpacity={0.75}
       >
            <View style={styles.row}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={styles.imageView}></Image>

              <View style={styles.label}>
                <Text style={styles.labelTitle}>10% OFF</Text>
              </View>
            </View>

            <View>
              <Text style={styles.textTitle}>{item.name}</Text>
              <View style={styles.title}>
                <Text style={styles.titleText}>Starts from</Text>

                <Text style={styles.price}>{item.originalPrice}</Text>
                <View style={styles.priceView}>
                  <Text style={styles.priceAmount}>{item.discountedPrice}</Text>

                  <TouchableOpacity
                    style={styles.plus}
                    onPress={() => {
                      setModalVisible(true);
                    }}>
                    <IonIcon
                      name="add-circle"
                      color={colors.darkSecondary}
                      size={25}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <Header
        name={'Offers'}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.darkPrimary}
        iconColor={colors.white}
        back={true}
      />

      <View style={styles.mainContainer}>
        <View>
          <FlatList
            data={serviesData}
            key={'_'}
            renderItem={renderGrid}
            keyExtractor={item => '_' + item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      {/* <SubServices
        visitModal={visitModal}
        navigation={navigation}
        setModalVisible={(value: boolean) => {
          setModalVisible(value);
        }}
      /> */}
    </>
  );
};

export default Offers;
