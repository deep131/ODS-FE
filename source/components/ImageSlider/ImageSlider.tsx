import React from 'react';
import {Image, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {responsiveHeight} from '../../styles/variables';
import {styles} from './ImageSliderStyles';

const ImageSlider = ({data}: any) => {
  return (
    <Swiper
      style={{height: responsiveHeight(22), marginTop: responsiveHeight(3)}}
      autoplay={true}
      loop={true}
      showsPagination={false}
      autoplayTimeout={3}
      removeClippedSubviews={false}>
      {data.map((item: any, index: any) => {
        return (
          <View
            key={index}
            style={{
              alignSelf: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={item.image}
              style={styles.swiper}
              key={item.id + index}></Image>
          </View>
        );
      })}
    </Swiper>
  );
};
export default ImageSlider;
