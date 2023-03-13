import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useRef, useState,useContext} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../styles/variables';
import {ThemeContext} from '../../../Theme/Theme';
import {useTranslation} from 'react-i18next';
import {showToast} from '../../../utils/commonUtils';
import {ODSsearch} from '../../../utils/service';
import {styles} from './SearchStyles';
import { color } from 'react-native-reanimated';

const Search = ({navigation, index}: any) => {
  const [searchdata, setSearchData] = useState([]);
  const [loginloading, setloginloading] = useState(false);
  const {t, i18n} = useTranslation();
  const {theme, setTheme} = useContext(ThemeContext);

  let name: '';

  const textRef = useRef(null);
  useFocusEffect(
    useCallback(() => {
      const focus = () => {
        setTimeout(() => {
          textRef?.current?.focus();
        }, 1);
      };
      focus();
      return focus;
    }, []),
  );

  const onSubmit = async (value: any) => {
    setloginloading(true);

    if (name) {
      showToast(' Fields Required');
      setloginloading(false);
      return;
    }

    setTimeout(() => {
      setloginloading(false);
      APICall(value);
    }, 500);
  };
  const APICall = async (value: any) => {
    const name = value;

    const loginRequestApi = await ODSsearch({
      name,
    });

    if (loginRequestApi?.status === 200) {
      setSearchData(loginRequestApi.data.services);
    }
  };

  const gotoDetails = (item: any, index: any) => {
    navigation.navigate('ServiceDetail', {
      searchdata: item._id,
      index: index,
    });
  };


  const ItemRender = ({item, index}: any) => (
    <TouchableOpacity
      onPress={() => gotoDetails(item, index)}
      style={{justifyContent: 'center'}}>
      <View style={styles.flatlistinnerview}>
        <Image style={styles.image} source={{uri: item.thumbnail}} />
        <View
          style={styles.serchTitle}>
          <Text style={[styles.nametext, {color: theme == 'light' ? colors.secondary : colors.white}]}>{item.name}</Text>
          <Text style={[styles.discounttext, {color: theme == 'light' ? colors.gray10 : colors.white}]}>{item.description}</Text>
        </View>
      </View>
      <View style={styles.line}></View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme== 'light' ?  colors.white : colors.black}]}>
      <View style={[styles.searchbarview, { backgroundColor: theme== 'light' ?  colors.white : colors.black}]}>
        <TextInput
          style={[styles.search,
             {backgroundColor: theme== 'light' ?  colors.white : colors.black},
             {color: theme== 'light' ?  colors.black : colors.white}
            ]}
          value={name}
          ref={textRef}
          placeholder={t("Search for services and packages")}
          onChangeText={value => {
            onSubmit(value);
          }}
          placeholderTextColor={theme == 'light' ? colors.darkGray: colors.white}></TextInput>
        <View style={[styles.verticleLine, { backgroundColor: theme== 'light' ?  colors.nocolor : colors.white}]}></View>
        <TouchableOpacity>
          <Image
            style={styles.searchicon}
            resizeMode="contain"
            source={require('../../../assets/Images/serachicon.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryselectview}>
      
        <FlatList
          data={searchdata}
          renderItem={ItemRender}
          keyExtractor={index => index}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Search;
