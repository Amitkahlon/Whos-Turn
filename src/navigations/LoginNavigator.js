import React from 'react';
import SigninScreen from '../screens/login/SigninScreen';
import SignupScreen from '../screens/login/SignupScreen';
import ForgotPassword from '../screens/login/ForgotPasswordScreen';
import { Stack } from "../navigations/Navigators";

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
