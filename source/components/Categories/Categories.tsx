import React,{useContext} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {responsiveWidth,colors} from '../../styles/variables';
import {styles} from './CategoriesStyles';
import {ThemeContext} from '../../Theme/Theme';

const CategoriesComp = ({data, navigation}: any) => {
  const {theme, setTheme} = useContext(ThemeContext);
  const goToSubCategories = (item: any, index: any) => {
    navigation.navigate('SubCategories', {
      categories: data,
      index: index,
      id: item._id,
    });
  };

  const itemRender = ({item, index}: any) => (
    <View style={[{marginHorizontal: responsiveWidth(2)}]}>
      <TouchableOpacity
        onPress={() => goToSubCategories(item, index)}
        style={[styles.categoriesview,{backgroundColor: theme == "light" ? colors.white: colors.black}]}
        activeOpacity={0.8}>
        <Image
          style={styles.categoryimage}
          source={{uri: item.image}}
          resizeMode="contain"
        />
        <Text style={[styles.categoryname, {color: theme == "light" ? colors.black: colors.white}]}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView
      style={[{
        alignSelf: 'flex-start',
        marginTop: 10,
        alignContent: 'flex-start',
        marginStart: responsiveWidth(3),
        backgroundColor: theme == "light" ? colors.white: colors.black,
      }]}>
      <FlatList
        data={data}
        renderItem={itemRender}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        horizontal={false}
        contentContainerStyle={{alignSelf: 'center'}}
        numColumns={4}
      />
    </ScrollView>
  );
};
export default CategoriesComp;
