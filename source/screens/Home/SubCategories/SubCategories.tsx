import React, {useEffect, useState, useContext} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../styles/variables';
import {useTranslation} from 'react-i18next';
import Header from '../../../components/Header/Header';
import {ODSgetSubCategories} from '../../../utils/service';
import {ThemeContext} from '../../../Theme/Theme';
import {styles} from './SubCategoriesStyles';

const SubCategories = ({navigation, route}: any) => {
  const params = route.params;
  const categories = params.categories;
  const categoryid = params.id;
  const [subcategories, setsubCategories] = useState([]);
  const {t, i18n} = useTranslation();
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    const getsubCategories = async () => {
      const subCats = await ODSgetSubCategories({category: categoryid});
      setsubCategories(subCats.data.result.subcat);
    };
    getsubCategories();
  }, []);

  const gotoServices = (item: any, index: any) => {
    navigation.navigate('Services', {
      subcategory: item._id,
      index: index,
      name: item.name,
    });
  };

  const renderItem = (item: any, index: any) => {
    return (
      <TouchableOpacity
        onPress={() => gotoServices(item, index)}
        activeOpacity={0.8}
        style={[
          styles.cardview,
          {backgroundColor: theme == 'light' ? colors.white : colors.black},
        ]}
        key={index}>
        <View style={styles.render}>
          <Image
            resizeMode="contain"
            style={styles.imageStyle}
            source={{uri: item.image}}
          />
          <View style={styles.col}>
            <Text
              style={[
                styles.title,
                {color: theme == 'light' ? colors.secondary : colors.white},
              ]}>
              {item.name}
            </Text>
            <Text
              style={[
                styles.description,
                {color: theme == 'light' ? colors.darkGray : colors.white},
              ]}>
              {item.description}
            </Text>
          </View>
          <View style={[styles.service]}>
            <Text style={[styles.servicesText]}>{t('View Services')}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={theme == 'light' ? styles.container : styles.container_dark}>
      <Header
        name={categories[0]?.name}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.charcol}
        iconColor={colors.white}
        back={true}
        theme={theme}
      />
      <FlatList
        data={subcategories}
        contentContainerStyle={{alignSelf: 'center'}}
        numColumns={2}
        renderItem={({item, index}) => renderItem(item, index)}
      />
    </View>
  );
};

export default SubCategories;
