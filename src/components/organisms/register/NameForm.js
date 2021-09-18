import React, {useState} from 'react';
import * as reactNative from 'react-native';
import { ContinueBtn } from '_atoms';
import {
  VStack,
  FormControl,
  Input,
  Center,
  Button
} from 'native-base';

const NameForm = ({ navigation }) => {
  const [name, setName] = useState({
    text: "",
    isValid: true
  });

  const setText = (text) => {
    setName({...name, text: text});
  }

  const validate = (text) => {
    if(text.length > 0){
      return true;
    }else {
      return false;
    }
  }

  const onSubmit = () => {
    const isValid = validate(name.text);
    setName({...name, isValid: isValid});
    if(isValid){
     navigation.navigate("DateOfBirth")
    }
  }

  return (
      <VStack width="90%" mx={3}>
        <FormControl isInvalid={!name.isValid}>
          <FormControl.Label _text={{ fontSize: "5xl", color: "white" }}>Name</FormControl.Label>
          <Input
           _light={{
            placeholderTextColor: "blueGray.400",
            color: "blueGray.100"
          }}
            placeholder="John Doe"
            onChangeText={(value) => {setText(value);}}
          />
          <FormControl.HelperText _text={{ fontSize: 'xl', color: "white" }}>
            Name should contain atleast 3 character.
          </FormControl.HelperText>
          <FormControl.ErrorMessage _text={{ fontSize: 'lg', color: "red.500" }}>
            Name is not valid
          </FormControl.ErrorMessage>
        </FormControl>
    <ContinueBtn onPress={onSubmit} text="Continue"/>
      </VStack>
  );
};

export default NameForm;

