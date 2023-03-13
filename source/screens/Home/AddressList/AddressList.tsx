import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import {colors} from '../../../styles/variables';
import Header from '../../../components/Header/Header';
import {ODSaddress} from '../../../utils/service';
import {styles} from './AddresslistStyle';
import {useTranslation} from 'react-i18next'; 

const AddressList = ({navigation}: any) => {
  const {t, i18n} = useTranslation();
  const [address, setAddress]: any = useState([]);

  useEffect(() => {
    const getaddress = async () => {
      const data = await ODSaddress();
        
    if (data.status===200) {
      setAddress(data.data.addresses);
      
    };
      
    };
    getaddress();
  }, []);

 

  const renderItem = ({item, index}: any) => (
    <View
      style={[
        styles.cardview
      ]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.locationView}>
        <View>
          <Text style={styles.locationTitle}>Home</Text>
          <Text style={styles.locationSubtitle}>
            {item.street},<Text style={styles.cityTitle}>{item.city},</Text>
            <Text style={styles.cityTitle}>{item.state} </Text>
            <Text style={styles.cityTitle}>{item.pincode},</Text>
            <Text style={styles.cityTitle}>{item.country}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <Header
        name={t('Address')}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.darkPrimary}
        iconColor={colors.white}
        back={true}
        right={true}
        theme=""
      />

      <View style={styles.body}>
        <View style={{alignItems: 'center'}}>
          <FlatList
            nestedScrollEnabled={true}
            data={address}
            renderItem={renderItem}
            keyExtractor={(item, index) => String(index)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: '30%'}}
          />
        </View>
      </View>

    
   
    </>
  );
};

export default AddressList;
