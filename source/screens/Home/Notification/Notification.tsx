import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {colors} from '../../../styles/variables';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Header from '../../../components/Header/Header';
import {styles} from './NotificationStyles';

const Notification = ({navigation}: any) => {
  const [notificationData, setnotificationData] = useState<any[]>([
    {
      id: 1,
      Date: ' 30 Sep 2022',
      dec: 'Your Request is received.',
    },
    {
      id: 2,
      Date: ' 24 Sep 2022',
      dec: 'Your Cleaning Service is at Home finished.',
    },
    {
      id: 3,
      Date: ' 16 Sep 2022',
      dec: 'Your Cleaning Service is at Commercial finished.',
    },
  ]);

  return (
    <>
      <Header
        name={'Notifications'}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.darkPrimary}
        iconColor={colors.white}
        back={true}
      />

      <View style={styles.container}>
        <View style={styles.notificationcontent}>
          <View>
            <FlatList
              style={styles.flatStyle}
              data={notificationData}
              showsVerticalScrollIndicator={true}
              renderItem={({item, index}) => (
                <View>
                  <View style={styles.notificationrow}>
                    <View style={styles.listImageContainer}>
                      <IonIcon
                        name="notifications-outline"
                        color={colors.white}
                        size={30}
                        style={styles.notificationicon}></IonIcon>
                    </View>
                    <View>
                      <Text
                        numberOfLines={3}
                        ellipsizeMode="tail"
                        style={styles.notificationdate}>
                        {item.Date}
                      </Text>
                      <Text
                        numberOfLines={3}
                        ellipsizeMode="tail"
                        style={styles.notificationdec}>
                        {item.dec}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />
            {/*  <View style={[styles.row]}>
                <View style={styles.listImageContainer}>
                  <IonIcon
                    name="notifications-outline"
                    color={colors.white}
                    size={30}
                    style={styles.icon}></IonIcon>
                </View>
                <View style={styles.textContainer}>
                  <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={styles.notificationdate}>
                    10 Sep 2022
                  </Text>
                  <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={styles.text2}>
                    New Products Launched.
                  </Text>
                </View>
              </View> */}
          </View>
        </View>
      </View>
    </>
  );
};

export default Notification;
