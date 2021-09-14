import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import { LoginForm } from '_organisms'

const LoginScreen = ({ navigation, route }) => {
  const [loadingSpinner, setLoadingSpinner] = useState({
    loading: false,
    text: 'Loading...',
  });

  return (
    <Container style={styles.container}>
      <Spinner
        cancelable={true}
        visible={loadingSpinner.loading}
        animation="slide"
        textContent={loadingSpinner.text}
        textStyle={styles.spinnerTextStyle}
        size="large"
      />
      <Text style={styles.logo}>Who's Turn?</Text>
      <LoginForm
        loadingSpinner={loadingSpinner}
        setLoadingSpinner={setLoadingSpinner}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingHorizontal: 60,
  },
  logo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fff',
    marginBottom: 40,
    marginBottom: 50,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default LoginScreen;
