import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';

// ---------------------------------------------------------
import Icon from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Main = ({ navigation } ) => {
  const [dates, setDates] = React.useState(['2023-10-31']);
  const today = new Date();
  const todayString = today.toISOString().split('T')[0];

  const handleBellBtnPress = () => {
    // 버튼이 눌렸을 때 실행할 코드
  };

  const handleUserBtnPress = () => {
    // 버튼이 눌렸을 때 실행할 코드
  };

  const handleCameraBtnPress = () => {
    // 버튼이 눌렸을 때 실행할 코드
  };

  const markedDates = {
    '2023-10-31': {
      marked: true,
      dotColor: '#AB9EF4',
    },
    [todayString]: {
      selected: true,
      marked: true,
      selectedColor: '#7254F5',
      height: 8,
    },
  };

  const theme = {
    arrowColor: 'black',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  };

  const headerStyle = {
    textMonthFontSize: 85, // 월 폰트 크기 설정
    textYearFontSize: 80, // 년도 폰트 크기 설정
  };

  return (
    <View style={styles.calendarContainer}>
      <View style={styles.headerComponent}>
        <TouchableOpacity style={styles.bellBtn} onPress={handleBellBtnPress}>
          <Fontisto name="bell" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.userBtn} onPress={handleUserBtnPress}>
          <View style={styles.userCircle}>
            <Icon name="user" size={35} color="#AB9EF4" />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Calendar
          style={styles.calendar}
          theme={theme}
          markedDates={markedDates}
          headerStyle={headerStyle}></Calendar>
      </View>
      <TouchableOpacity style={styles.cameraBtn} onPress={handleCameraBtnPress}>
        <View style={styles.circle}>
          <Icon
            name="camera"
            size={65}
            color="#7254F5"
            style={styles.cameraIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    height: '75%',
    marginTop: '40%',
    borderBottomColor: '#ffffff',
  },
  calendarContainer: {
    width: '95%',
    height: '50%',
    alignSelf: 'center', // 가운데 정렬
    paddingHorizontal: 15, // 좌우 마진을 15
  },
  cameraBtn: {
    alignItems: 'center',
    marginTop: '85%',
  },
  circle: {
    width: 98,
    height: 98,
    borderRadius: 50,
    backgroundColor: '#fff',
    shadowColor: '#ab9ef4',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.37,
    shadowRadius: 6,
    elevation: 4,
  },
  cameraIcon: {
    width: 65,
    height: 65,
    marginTop: 15,
    marginLeft: 15,
    // backgroundColor: 'blue',
  },

  headerComponent: {
    flexDirection: 'row', // 수평 배치
    justifyContent: 'space-between', // 요소 양 쪽 끝에 배치
    alignItems: 'center', // 세로 방향 가운데 정렬
    // backgroundColor: 'blue',
    marginTop: 60,
  },
  bellBtn: {
    marginRight: 15,
  },
  userBtn: {
    marginLeft: 15,
  },
  userCircle: {
    width: '100%', // 선의 너비를 100%로 설정
    borderWidth: 3,
    borderColor: '#AB9EF4',
    borderRadius: 50,
  },
});

export default Main;
