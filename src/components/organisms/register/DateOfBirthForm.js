import React, { useState, useRef } from 'react';
import { VStack, FormControl, Input } from 'native-base';
import { BaseDatePicker } from '_atoms';
import { ContinueBtn, BaseTimePicker } from '_atoms';

const DateOfBirthForm = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [inputDate, setInputDate] = useState(new Date(1598051730000));
  const dateInput = useRef();

  const setVisibility = (status) => {
    setShow(status);
    if(status === false) { //focus out
        dateInput.current.blur();
    }
  };

  const setDate = (date) => {
    setInputDate(date);
  };

  const interpretDate = (date) => {
    const month = date.getUTCMonth() + 1; //months from 1-12
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    return day + '/' + month + '/' + year;
  };

  return (
    <VStack width="90%" mx={3}>
      <BaseDatePicker
        setDate={setDate}
        date={inputDate}
        show={show}
        setShow={setVisibility}
      />
      <FormControl isInvalid={false}>
        <FormControl.Label _text={{ fontSize: '5xl', color: 'white' }}>
          Birthday
        </FormControl.Label>
        <Input
          ref={dateInput}
          value={interpretDate(inputDate)}
          _light={{
            color: 'blueGray.100',
          }}
          onFocus={() => {
            setVisibility(true);
          }}
        />
        <BaseTimePicker />
      </FormControl>
      <ContinueBtn onPress={() => {navigation.navigate("Gender")}} text="Continue" />
    </VStack>
  );
};

export default DateOfBirthForm;
