import {StyleSheet} from 'react-native';
import {
  borderRadius,
  responsiveHeight,
  responsiveWidth,
} from '../../styles/variables';

const styles = StyleSheet.create({
  swiper: {
    width: responsiveWidth(90),
    height: responsiveHeight(18),
    borderRadius: borderRadius.medium,
  },
});

export {styles};
