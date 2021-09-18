import React, { useReducer, useState } from 'react';
import { ContinueBtn } from '_atoms';
import { VStack, FormControl, Input, Button } from 'native-base';
import validator from 'validator';

const initialState = {
  password: '',
  confirmPassword: '',
  isPasswordValid: true,
  isPasswordsMatch: true,
  showPassword: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setPass':
      return { ...state, password: action.payload };
    case 'setConfirmPass':
      return { ...state, confirmPassword: action.payload };
    case 'setValidation':
      return { ...state, isPasswordValid: action.payload.pass, isPasswordsMatch: action.payload.match };
    case 'toggleShowPass':
      const show = !state.showPassword;
      return { ...state, showPassword: show };
    default:
      return state;
  }
};

const PasswordForm = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState({});
  const showPass = state.showPassword;

  const validate = (pass, confirmPass) => {
    const isMatch = pass === confirmPass;
    const isValid = validator.isStrongPassword(pass, { minSymbols: 0 });
    //no use for score yet.
    const score = validator.isStrongPassword(pass, {
      returnScore: true,
      minSymbols: 0,
    });
    console.log(score);

    dispatch({type: "setValidation", payload: {pass: isValid, match: isMatch}})

    if(!isMatch || !isValid){
        return false;
    } else {
        return true
    }
  };

  const onSubmit = () => {
    const isValid = validate(state.password, state.confirmPassword);
    if (isValid) {
      navigation.navigate("Finish");
    }
  };

  return (
    <VStack width="90%" mx={3}>
      <FormControl isInvalid={!state.isPasswordValid}>
        <FormControl.Label _text={{ fontSize: '5xl', color: 'white' }}>
          Password
        </FormControl.Label>
        <Input
          type={showPass ? 'text' : 'password'}
          _light={{
            placeholderTextColor: 'blueGray.400',
            color: 'blueGray.100',
          }}
          placeholder="Password"
          onChangeText={(value) => {
            dispatch({ type: 'setPass', payload: value });
          }}
          InputRightElement={
            <Button
              ml={1}
              roundedLeft={0}
              roundedRight="md"
              onPress={() => dispatch({ type: 'toggleShowPass' })}
            >
              {showPass ? 'Hide' : 'Show'}
            </Button>
          }
        />

        <FormControl.HelperText _text={{ fontSize: 'xl', color: 'white' }}>
          Password should be at least 8 chars long, with 1 upper and 1 lower
          case characters and 1 number.
        </FormControl.HelperText>

        <FormControl.ErrorMessage
          _text={{ fontSize: 'lg', color: 'error.500' }}
        >
          Password need to be strong.
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl isInvalid={!state.isPasswordsMatch}>
        <Input
          type={showPass ? 'text' : 'password'}
          mt={5}
          _light={{
            placeholderTextColor: 'blueGray.400',
            color: 'blueGray.100',
          }}
          placeholder="Repeat password"
          onChangeText={(value) => {
            dispatch({ type: 'setConfirmPass', payload: value });
          }}
          InputRightElement={
            <Button
              ml={1}
              roundedLeft={0}
              roundedRight="md"
              onPress={() => dispatch({ type: 'toggleShowPass' })}
            >
              {showPass ? 'Hide' : 'Show'}
            </Button>
          }
        />
        <FormControl.ErrorMessage
          mt={5}
          _text={{ fontSize: 'lg', color: 'error.500' }}
        >
          Passwords does Not Match
        </FormControl.ErrorMessage>
      </FormControl>
      <ContinueBtn onPress={onSubmit} text="Continue" />
    </VStack>
  );
};

export default PasswordForm;
