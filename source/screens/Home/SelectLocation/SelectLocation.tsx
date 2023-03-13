import React, {useState, useEffect,useContext} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import {colors} from '../../../styles/variables';
import {ThemeContext} from '../../../Theme/Theme';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button/Button';
import Header from '../../../components/Header/Header';
import AddAddress from '../../../components/BottomSheets/AddAddress/AddAddress';
import {showToast} from '../../../utils/commonUtils';
import { ODSaddress,ODSordercreate,ODSpostaddress} from '../../../utils/service';
import {styles} from './SelectLocationStyles';
import {useTranslation} from 'react-i18next'; 

const SelectLocation = ({navigation, route}: any) => {
  const params = route.params;
  const momentObj = params.momentObj;
  const datatime = momentObj.toISOString();
  const select_service = params.select_service;
  const [visitModal, setModalVisible] = useState(false);
  const [type, setType] = useState('');
  const [postSuccesfully, setPostSuccesfully]: any = useState(false);
  const [address, setAddress]: any = useState([]);
  const [select_address, setselecte_address] = useState(null);
  const [addId, setaddID]: any = useState('');
  const {theme, setTheme} = useContext(ThemeContext);
  const {t, i18n} = useTranslation();

  useEffect(() => {
    const getaddress = async () => {
      const data = await ODSaddress();
        
    if (data.status===200) {
      setAddress(data.data.addresses);
    };
  };
    getaddress();
  }, [postSuccesfully]);

  const adresslist = (item: any) => {
    setaddID(item._id);
    setselecte_address(item);
  };

  const renderItem = ({item, index}: any) => (
    <View
      style={[
        styles.cardview,{
          backgroundColor: theme == 'light' ? colors.white : colors.black
        },
        {
          borderColor:
            select_address == item ? colors.darkPrimary : colors.white,
        },
      ]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => adresslist(item)}
        style={styles.locationView}>
        <View>
          <Text style={[styles.locationTitle, {
          color: theme == 'light' ? colors.secondary : colors.white
        }]}>Home</Text>
          <Text style={[styles.locationSubtitle,{
          color: theme == 'light' ? colors.secondary : colors.white
        }]}>
            {item.street},<Text style={[styles.cityTitle,{
          color: theme == 'light' ? colors.secondary : colors.white
        }]}>{item.city},</Text>
            <Text style={[styles.cityTitle,{
          color: theme == 'light' ? colors.secondary : colors.white
        }]}>{item.state} </Text>
            <Text style={[styles.cityTitle,{
          color: theme == 'light' ? colors.secondary : colors.white
        }]}>{item.pincode},</Text>
            <Text style={[styles.cityTitle,{
          color: theme == 'light' ? colors.secondary : colors.white
        }]}>{item.country}</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            let type = 'edit';
            setType(type);
            setModalVisible(true);
          }}
          activeOpacity={0.7}
          style={styles.pencilIcon}>
          <IonIcon name="pencil" color={colors.darkPrimary} size={25} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.trash}>
          <IonIcon name="trash" color={colors.red} size={25} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  const chooseMessage = (fomm: any) => {
    if (
      fomm.street &&
      fomm.zipCode &&
      fomm.city &&
      fomm.state &&
      fomm.country
    ) {
      const postaddress = async () => {
        const street = fomm.street;
        const pincode = fomm.zipCode;
        const city = fomm.city;
        const state = fomm.state;
        const country = fomm.country;
        const data = await ODSpostaddress({
          address: {
            street,
            pincode,
            city,
            state,
            country,
          },
        });
        if (data.status === 200) {
          setPostSuccesfully(true);
        }
      };
      postaddress();
      setModalVisible(false);
    } else {
      showToast(t('Please filled  all value'));
      return;
    }
  };

  const pressOrder = () => {
    if (select_address == null) {
      showToast(t('Please select any address'));
    } else {
      const ordercreate = async () => {
        const quantity = select_service.quantity;
        const vendorSubServiceId = select_service.id;
        const date = datatime;
        const addressId = addId;
        const data = await ODSordercreate({
          orderItems: [
            {
              quantity,
              vendorSubServiceId,
              dateTime: {
                date,
              },
            },
          ],
          addressId,
          
        });
        
        if(data.status == 201){
          console.log("ddddd:--", data);
          
          const order_details = data.data.orderId  
           navigation.navigate("Checkout",{
            order_details,
            momentObj,
            select_service,
            select_address,
           })
        }
      };
      ordercreate();
    }
  };
  return (
    <>
      <Header
        name={t('Select Location')}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.darkPrimary}
        iconColor={colors.white}
        back={true}
        right={true}
        theme={theme}
      />

      <View style={[styles.body, {backgroundColor : theme == "light" ? colors.white : colors.black}]}>
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

      <View style={styles.bottomView}>
        <Button
          name={t("Add new address")}
          color={ theme == 'light' ? colors.secondary : colors.charcol}
          onPress={() => {
            let type = 'add';
            setType(type);
            setModalVisible(true);
          }}
        />
        <View style={styles.mt}>
          <Button
            name={t("Checkout")}
            color={colors.darkPrimary}
            onPress={() => pressOrder()}
          />
        </View>
      </View>
      <AddAddress
        visitModal={visitModal}
        navigation={navigation}
        type={type}
        setModalVisible={(value: boolean) => {
          setModalVisible(value);
        }}
        chooseMessage={chooseMessage}
      />
    </>
  );
};

export default SelectLocation;
