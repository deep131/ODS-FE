import React, {useRef, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import {AuthContext} from '../../../contexts/authContext';
import Page1 from '../../../components/Pager/Page1/Page1';
import Page2 from '../../../components/Pager/Page2/Page2';
import Page3 from '../../../components/Pager/Page3/Page3';

import {styles} from './OnBoardingStyle';

const OnBoarding = ({navigation}: any) => {
  const pager: any = useRef();
  const [activeIndex, setactiveIndex] = useState(0);

  const {getStarted}: any = React.useContext(AuthContext);

  const getCurrentPageIndex = (e: any) => {
    setactiveIndex(e.nativeEvent.position);
  };

  const next = () => {
    pager.current?.setPage(activeIndex + 1);
    setactiveIndex(activeIndex + 1);
  };

  const [pagination, setPagination] = useState([
    {key: '', index: 0},
    {key: '', index: 1},
    {key: '', index: 2},
  ]);

  const Submit = () => {
    getStarted();
  };

  return (
    <>
      <ImageBackground
        source={require('../../../assets/Images/onboardingBg.png')}
        style={styles.image1}></ImageBackground>

      <View style={styles.height}>
        <PagerView
          style={styles.pager}
          initialPage={0}
          ref={pager}
          onPageSelected={e => {
            getCurrentPageIndex(e);
          }}>
          <View key="1">
            <Page1 navigation={navigation} />
          </View>
          <View key="2">
            <Page2 navigation={navigation} />
          </View>
          <View key="3">
            <Page3 navigation={navigation} />
          </View>
        </PagerView>

        <View style={styles.content}>
          <View style={styles.row}>
            <FlatList
              data={pagination}
              numColumns={3}
              renderItem={({item, index}) => (
                <>
                  <View key={index}>
                    <View style={styles.mr}>
                      <Text
                        style={[
                          styles.dot,
                          activeIndex == item.index
                            ? styles.activeColor
                            : styles.inactiveColor,
                        ]}>
                        {item.key}
                      </Text>
                    </View>
                  </View>
                </>
              )}></FlatList>
          </View>

          {/* buttons */}
          {activeIndex < 1 ? (
            <TouchableOpacity activeOpacity={0.7} onPress={next}>
              <ImageBackground
                style={styles.boardingView}
                source={require('../../../assets/Images/purplebtn.png')}>
                <Text style={styles.nextTitle}>Next</Text>
              </ImageBackground>
            </TouchableOpacity>
          ) : activeIndex < 2 ? (
            <TouchableOpacity activeOpacity={0.7} onPress={next}>
              <ImageBackground
                style={styles.boardingView}
                source={require('../../../assets/Images/bluebtn.png')}>
                <Text style={styles.nextTitle}>Next</Text>
              </ImageBackground>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity activeOpacity={0.7} onPress={Submit}>
              <ImageBackground
                style={styles.boardingView}
                source={require('../../../assets/Images/yellowbtn.png')}>
                <Text style={styles.nextTitle}>Get Started</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default OnBoarding;
