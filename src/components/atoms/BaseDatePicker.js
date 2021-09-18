import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BaseDatePicker = ({show, setShow, date, setDate}) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };


  return (
    <View>
    {show && (
      <DateTimePicker
        value={date}
        mode="date"
        display="spinner"
        onChange={onChange}
      />
    )}
  </View>
  );
};

export default BaseDatePicker;

