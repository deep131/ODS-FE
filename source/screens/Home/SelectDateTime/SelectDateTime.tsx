import moment from 'moment';
import React, {useState,useContext} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {colors, fontFamily, fontSize} from '../../../styles/variables';
import {useTranslation} from 'react-i18next'; 
import {Calendar} from 'react-native-calendars';
import Button from '../../../components/Button/Button';
import Header from '../../../components/Header/Header';
import {showToast} from '../../../utils/commonUtils';
import {ThemeContext} from '../../../Theme/Theme';
import {styles} from './SelectDateTimeStyles';

const SelectDateTime = ({navigation, route}: any) => {
  const params = route.params;
  const select_service = params.select_service;
  const [selectedday, setSelectedDay]: any = useState(false);
  const [markedDates, setmarkedDates]: any = useState({});
  const [slotSelected, setSlotSelected] = useState(false);
  const [itemTimeSlot, setItemTimeSlot] = useState(null);
  const {theme, setTheme} = useContext(ThemeContext);
  const {t, i18n} = useTranslation();
  const allTimes = [];
  const updatedarray = [];

  let x = {
    slotInterval: 30,
    openTime: '09:00',
    closeTime: '18:00',
  };

  let startTime = moment(x.openTime, 'HH:mm');
  let endTime = moment(x.closeTime, 'HH:mm').add(0, 'days');

  while (startTime < endTime) {
    allTimes.push(startTime.format('HH:mm'));
    startTime.add(x.slotInterval, 'minutes');
  }
  var time = moment().format();
  const newtime = moment(time).add(45, 'minutes').format('HH:mm');

  for (let i = 0; i < allTimes.length; i++) {
    if (newtime < allTimes[i] === true) {
      updatedarray.push(allTimes[i]);
    }
  }

  var today = moment(new Date());

  const getSelectedDayEvents = (date: any) => {
    let markedDates: any = {};
    markedDates[date] = {
      selected: true,
      color: '#00B0BF',
      textColor: '#FFFFFF',
    };

    setmarkedDates(markedDates);
    const otherday = new Date(
      Object.keys(markedDates).toString(),
    ).toISOString();

    var time1 = moment(today).format('YYYY-MM-DD');
    var time2 = moment(otherday).format('YYYY-MM-DD');
    if (time2 != time1) {
      setSelectedDay(true);
    } else {
      setSelectedDay(false);
    }
  };

  const selectedTimeSlot = (item: any) => {
    setItemTimeSlot(item);
    setSlotSelected(true);
  };

  const goToSelectLocation = () => {
    var momentObj: any = moment(
      Object.keys(markedDates).toString() + itemTimeSlot,
      'YYYY-MM-DDLT',
    );

    navigation.navigate('SelectLocation', {
      momentObj,
      select_service,
    });
  };

  return (
    <>
      <Header
        name={t('Select Date & Time')}
        navigation={navigation}
        textColor={colors.white}
        bgColor={colors.darkPrimary}
        iconColor={colors.white}
        back={true}
        right={true}
        theme={theme}
      />

      <ScrollView style={[styles.body, {backgroundColor : theme == 'light' ? colors.white : colors.black}]} showsVerticalScrollIndicator={false}>
        <View>
          <Calendar
            current={Date()}
            onDayPress={(day:any) => {
              getSelectedDayEvents(day.dateString);
            }}
            monthFormat={'MMM yyyy'}
            onMonthChange={(month:any) => {}}
            markedDates={markedDates}
            minDate={new Date().toDateString()}
            hideExtraDays={false}
            enableSwipeMonths={false}
            disableArrowLeft={true}
            hideArrows={true}
            disableMonthChange={true}
            disableArrowRight={true}
            maxDate ={new Date(new Date().setDate(new Date().getDate()+1 )) as any} 
            theme={{
              textMonthFontFamily: fontFamily.semiBold,
              textDayHeaderFontFamily: fontFamily.medium,
              textDayFontFamily: fontFamily.regular,
              textMonthFontSize: fontSize.medium,
              textDayHeaderFontSize: fontSize.small,
              arrowColor: colors.darkPrimary,
              todayTextColor: colors.darkPrimary,
              dayTextColor: theme == 'light'? colors.charcol: colors.projectgreen,
              monthTextColor:theme == 'light'? colors.charcol: colors.white, 
              selectedDayTextColor: colors.white,
              selectedDayBackgroundColor: colors.charcol,
              calendarBackground:theme == 'light'? colors.white: colors.black,
            }}
            style={[styles.height,{backgroundColor : theme == 'light' ? colors.white : colors.black} ]}
          />
        </View>

        <View style={styles.pickTimeView}>
          <Text style={[styles.pickTime,{color : theme == 'light' ? colors.charcol : colors.white}]}>{t("Pick Time")}</Text>
          <View style={styles.pickDisplay}>
            {selectedday === true
              ? allTimes.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.timeBadge,
                      {
                        borderWidth: itemTimeSlot == item ? 2 : 1,
                        borderColor:
                          itemTimeSlot == item
                            ? colors.projectgreen
                            : colors.grayline,
                      },
                    ]}
                    activeOpacity={0.7}
                    onPress={() => selectedTimeSlot(item)}>
                    <Text style={[styles.timeTitle,{color:theme =='light'? colors.charcol : colors.white}]}>{item}</Text>
                  </TouchableOpacity>
                ))
              : updatedarray.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.timeBadge,
                      {
                        borderWidth: itemTimeSlot == item ? 2 : 1,
                        borderColor:
                          itemTimeSlot == item 
                            ? colors.charcol
                            : colors.grayline,
                      },
                    ]}
                    activeOpacity={0.7}
                    onPress={() => selectedTimeSlot(item)}>
                    <Text style={[styles.timeTitle,{color:theme =='light'? colors.charcol : colors.white}]}>{item}</Text>
                  </TouchableOpacity>
                ))}
          </View>
        </View>
      </ScrollView>

      <View style={[styles.btn,{backgroundColor:theme =='light'? colors.white : colors.black}]}>
        {markedDates && itemTimeSlot ? (
          <Button
            name={t('Select Location')}
            color={colors.charcol}
            onPress={() => goToSelectLocation()}
          />
        ) : (
          <Button
            name={t('Select Location')}
            color={colors.charcol}
            onPress={() => showToast(t('Please select Date and Time'))}
          />
        )}
      </View>
    </>
  );
};

export default SelectDateTime;
