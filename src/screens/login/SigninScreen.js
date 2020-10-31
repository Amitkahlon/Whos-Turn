import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';
import LoginForm from "../../components/medComponents/LoginForm";

const SigninScreen = ({ navigation, route }) => {


  return <Container style={styles.container}>
    <Text style={styles.logo}>Who's Turn?</Text>
    <LoginForm />
  </Container>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingHorizontal: 60
  },
  logo: {
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 50,
    color: "#fff",
    marginBottom: 40,
    marginBottom: 50

  }
});

export default SigninScreen