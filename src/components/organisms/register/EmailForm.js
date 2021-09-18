import React, {useState} from 'react';
import { ContinueBtn } from '_atoms';
import {VStack,FormControl,Input} from 'native-base';
import validator from 'validator';

const EmailForm = ({ navigation }) => {
  const [email, setEmail] = useState({
    text: "",
    isValid: true
  });

  const setText = (text) => {
    setEmail({...email, text: text});
  }

  const validate = (text) => {
    if(validator.isEmail(text)){
      return true;
    }else {
      return false;
    }
  }

  const onSubmit = () => {
    const isValid = validate(email.text);
    setEmail({...email, isValid: isValid});
    if(isValid){
     navigation.navigate("Password")
    }
  }

  return (
      <VStack width="90%" mx={3}>
        <FormControl isInvalid={!email.isValid}>
          <FormControl.Label _text={{ fontSize: "5xl", color: "white" }}>Email</FormControl.Label>
          <Input
           _light={{
            placeholderTextColor: "blueGray.400",
            color: "blueGray.100"
          }}
            placeholder="name@gmail.com"
            onChangeText={(value) => {setText(value);}}
          />
          <FormControl.HelperText _text={{ fontSize: 'xl', color: "white" }}>
            We will not send you spam or share your information.
          </FormControl.HelperText>
          <FormControl.ErrorMessage _text={{ fontSize: 'lg', color: "red.500" }}>
            Please provide a email with the correct format, for example: john@bryce.com
          </FormControl.ErrorMessage>
        </FormControl>
    <ContinueBtn onPress={onSubmit} text="Continue"/>
      </VStack>
  );
};

export default EmailForm;

