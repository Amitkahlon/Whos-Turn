import React from 'react';
import LoginScreen from '../screens/login/LoginScreen';
import ForgotPassword from '../screens/login/ForgotPasswordScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterNavigator from './RegisterNavigator';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterNavigator} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
