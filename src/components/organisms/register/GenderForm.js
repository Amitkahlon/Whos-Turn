import React, { useState, useRef } from 'react';
import { ContinueBtn } from '_atoms';
import { VStack, FormControl, Radio, Text, Input } from 'native-base';

const GenderForm = ({ navigation }) => {
  const [radioValue, setRadioValue] = useState('unselected');
  const [isValid, setIsValid] = useState(true);
  const [other, setOther] = useState('');

  const validate = (value) => {
    if (value === 'other' && other.length > 0 && other.length < 15) {
      setIsValid(true);
      return true;
    } else if (value === 'male' || value === 'female') {
      setIsValid(true);
      return true;
    } else {
      setIsValid(false);
      return false;
    }
  };

  const onSubmit = () => {
    const valid = validate(radioValue);
    if (valid) {
      navigation.navigate('Email');
    }
  };

  return (
    <VStack width="90%" mx={3}>
      <FormControl isInvalid={!isValid}>
        <FormControl.Label _text={{ fontSize: '5xl', color: 'white' }}>
          Gender
        </FormControl.Label>
        <Radio.Group
          size="lg"
          name="MyRadioGroup"
          accessibilityLabel="Gender"
          value={radioValue}
          onChange={(value) => {
            if(typeof value === 'string'){
                setRadioValue(value);
            }
          }}>
          <Radio size="lg" value="male" _text={{ color: 'white' }} my={1}>
            Male
          </Radio>
          <Radio size="lg" value="female" _text={{ color: 'white' }} my={1}>
            Female
          </Radio>
          <Radio size="lg" value="other" my={1}>
            <Input
              color="white"
              onChangeText={(value) => {
                setOther(value);
              }}
              value={other}
              placeholder="Other"
              width="300px"
            />
          </Radio>
        </Radio.Group>

        <FormControl.HelperText _text={{ fontSize: 'xl', color: 'white' }}>
          We support all genders!
        </FormControl.HelperText>
        <FormControl.ErrorMessage _text={{ fontSize: 'lg', color: 'red.500' }}>
          We believe in every gender, just pick one!
        </FormControl.ErrorMessage>
      </FormControl>
      <ContinueBtn onPress={onSubmit} text="Continue" />
    </VStack>
  );
};

export default GenderForm;
