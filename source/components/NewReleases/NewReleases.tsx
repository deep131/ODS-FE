import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
import { marginHorizontal, responsiveWidth, spaceVertical } from "../../styles/variables";
import { styles } from "./NewReleasesStyles";


const NewReleasesComp = ({ data }: any) => {

  const RenderItem = ({ name, image, rating }: any) => (
    <View style={{marginLeft: responsiveWidth(4) }}>
      <View style={styles.topratedview}>
        <Image style={styles.topratedimage} source={image} />
        <Text style={styles.topratedname}>{name}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: marginHorizontal.flatlistmargin,
            position: 'absolute',
            bottom: 8
          }}>
          {
            Array.from({ length: parseInt(rating) }, (x, i) => {
              return (
                <IonIcon key={i} name="star" size={14} color="#FFc700" />
              )
            })

          }

          {

            Array.from({ length: 5 - parseInt(rating) }, (x, i) => {
              return (
                <IonIcon key={i} name="star-outline" size={14} color="#FFc700" />
              )
            })

          }
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <RenderItem image={item.image} name={item.name} rating={item.rating}/>
      )}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: marginHorizontal.semiSmall }}
      horizontal={true}
    />
  )

}
export default NewReleasesComp;