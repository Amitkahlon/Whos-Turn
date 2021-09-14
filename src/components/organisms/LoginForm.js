import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import validator from 'validator';
import {AttemptLogin, attemptLoginStatusEnum} from '_services';

const LoginForm = ({ loadingSpinner, setLoadingSpinner }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState({ email: '', isValid: undefined });
  const [password, setPassword] = useState({
    password: '',
    isValid: undefined,
  });
  const [errorMessage, setErrorMessage] = useState({
    visible: false,
    text: '',
  });

  const validateAndSetEmail = (email) => {
    const valid = validator.isEmail(email);
    setEmail({ email, isValid: valid });
  };

  const onPasswordTextChange = (password) => {
    let valid;
    valid = validator.isLength(password, { min: 6, max: 16 });
    setPassword({ password, isValid: valid });
  };

  const submit = async () => {
    if (password.isValid && email.isValid) {
      setLoadingSpinner({
        ...loadingSpinner,
        loading: true,
        text: 'Attempting To Connect...',
      });
      var loginStatus = await AttemptLogin(email.email, password.password);
      switch (loginStatus) {
        case attemptLoginStatusEnum.succussLogin:
          setLoadingSpinner({
            ...loadingSpinner,
            loading: false,
            text: 'Loading',
          });
        case attemptLoginStatusEnum.wrongDetails:
          setLoadingSpinner({
            ...loadingSpinner,
            loading: false,
          });
          setErrorMessage({
            ...errorMessage,
            visible: true,
            text: 'Email And Password Does Not Match',
          });
          break;
        case attemptLoginStatusEnum.badConnection:
          setLoadingSpinner({
            ...loadingSpinner,
            loading: false,
          });
          setErrorMessage({
            ...errorMessage,
            visible: true,
            text: 'Something Went Wrong With The Request, Check your Internet Connection',
          });
          break;
        case attemptLoginStatusEnum.generalError:
          setLoadingSpinner({
            ...loadingSpinner,
            loading: false,
          });
          setErrorMessage({
            ...errorMessage,
            visible: true,
            text: 'Something Went Wrong',
          });
          break;
      }
    } else {
      setErrorMessage({
        ...errorMessage,
        visible: true,
        text: 'Make Sure You type your email and a password which is longer than 8 chars',
      });
    }
  };

  return (
    <Form style={styles.signForm}>
      <Text style={styles.header}>Sign In</Text>
      <Item
        floatingLabel
        style={styles.item}
        success={email.isValid}
        error={email.isValid !== undefined && !email.isValid ? true : false}
      >
        <Label style={styles.label}>Email</Label>
        <Input
          style={styles.textInput}
          underlineColorAndroid={'transparent'}
          placeholderTextColor="#e6e6e6"
          onChangeText={validateAndSetEmail}
        />
      </Item>

      <Item
        floatingLabel
        style={styles.item}
        success={password.isValid}
        error={
          password.isValid !== undefined && !password.isValid ? true : false
        }
      >
        <Label style={styles.label}>Password</Label>
        <Input
          style={styles.textInput}
          underlineColorAndroid={'transparent'}
          placeholderTextColor="#999999"
          onChangeText={onPasswordTextChange}
          last
          secureTextEntry
        />
      </Item>
      {errorMessage.visible ? (
        <Text style={styles.error}>{errorMessage.text}</Text>
      ) : (
        <></>
      )}

      <Button style={styles.signBtn} onPress={submit} block primary>
        <Text style={styles.textBtn}>Sign In</Text>
      </Button>

      <Text style={styles.note}>Doesn't have an account yet?</Text>

      <Button
        rounded
        style={styles.register}
        onPress={() => navigation.navigate('Register')}
      >
        <Text>Register</Text>
      </Button>
    </Form>
  );
};

const styles = StyleSheet.create({
  signForm: {
    alignSelf: 'stretch',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#fff',
    paddingBottom: 10,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
  },
  item: {},
  label: {
    color: '#e6e6e6',
  },
  signBtn: {
    marginTop: 30,
  },
  textBtn: {
    fontSize: 30,
  },
  note: {
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
  },
  register: {
    alignSelf: 'center',
    marginTop: 15,
  },
  error: {
    alignSelf: 'center',
    display: 'flex',
    color: "#ff0033"
  },
});

export default LoginForm;
