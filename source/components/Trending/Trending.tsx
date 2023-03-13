import React,{useContext} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {marginHorizontal, responsiveWidth,colors} from '../../styles/variables';
import {ThemeContext} from '../../Theme/Theme';
import {styles} from './TrendingStyles';

const TrendingComp = ({data}: any) => {
  const {theme, setTheme} = useContext(ThemeContext);
  const RenderItem = ({name, image, rating}: any) => (
    <View style={{marginLeft: responsiveWidth(4)}}>
      <View style={[styles.topratedview,{backgroundColor:theme == 'light' ? colors.white : colors.black}]}>
        <Image
          style={styles.topratedimage}
          resizeMode="contain"
          source={{uri: image}}
        />
        <Text style={[styles.topratedname,{color:theme == 'light' ? colors.charcol : colors.white}]}>{name}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: marginHorizontal.flatlistmargin,
            position: 'absolute',
            bottom: 8,
          }}>
          {Array.from({length: parseInt(rating)}, (x, i) => {
            return <IonIcon key={i} name="star" size={14} color="#FFc700" />;
          })}

          {Array.from({length: 5 - parseInt(rating)}, (x, i) => {
            return (
              <IonIcon key={i} name="star-outline" size={14} color="#FFc700" />
            );
          })}
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <RenderItem image={item.image} name={item.name} rating={item.rating} />
      )}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: marginHorizontal.semiSmall}}
      horizontal={true}
    />
  );  
};
export default TrendingComp;
