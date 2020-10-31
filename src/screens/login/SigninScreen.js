import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Text } from 'native-base';
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




  // container: {
  //   flex: 1,
  //   backgroundColor: '#003f5c',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // logo: {
  //   fontWeight: "bold",
  //   fontSize: 50,
  //   color: "#fb5b5a",
  //   marginBottom: 40,
  //   marginBottom: 50
  // },
  // inputView: {
  //   width: "80%",
  //   backgroundColor: "#465881",
  //   borderRadius: 25,
  //   height: 50,
  //   marginBottom: 20,
  //   justifyContent: "center",
  //   padding: 20
  // },
  // inputText: {
  //   height: 50,
  //   color: "white"
  // },
  // forgot: {
  //   color: "white",
  //   fontSize: 11
  // },
  // loginBtn: {
  //   width: "80%",
  //   backgroundColor: "#fb5b5a",
  //   borderRadius: 25,
  //   height: 50,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: 40,
  //   marginBottom: 10
  // },
  // loginText: {
  //   color: "white"
  // }
});

export default SigninScreen