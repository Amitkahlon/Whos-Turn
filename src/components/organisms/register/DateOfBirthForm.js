import React, { useState, useRef } from 'react';
import { VStack, FormControl, Input } from 'native-base';
import { BaseDatePicker } from '_atoms';
import { ContinueBtn, BaseTimePicker } from '_atoms';
import validator from "validator";

const DateOfBirthForm = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [inputDate, setInputDate] = useState(new Date(1598051730000));
  const [isValid, setIsValid] = useState(true);
  const dateInput = useRef();

  const setVisibility = (status) => {
    setShow(status);
    if (status === false) {
      //focus out
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

  const validate = (date) => {
    const nowDate = Date.now();
    if(validator.isDate(date) && date < nowDate){
      setIsValid(true)
      return true;
    }
    else {
      setIsValid(false)
      return false;
    }
  }

  const onSubmit = (date) => {
   let valid = validate(date);
    if (valid) {
      navigation.navigate('Gender');
    }
  };

  return (
    <VStack width="90%" mx={3}>
      <BaseDatePicker
        setDate={setDate}
        date={inputDate}
        show={show}
        setShow={setVisibility}
      />
      <FormControl isInvalid={!isValid}>
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
        <FormControl.ErrorMessage _text={{ fontSize: 'lg', color: 'error.500' }}>
          Date is not valid.
        </FormControl.ErrorMessage>
      </FormControl>
      <ContinueBtn onPress={() => onSubmit(inputDate)} text="Continue" />
    </VStack>
  );
};

export default DateOfBirthForm;
