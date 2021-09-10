import React from 'react';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from "react-redux";

const RootStack = () => {
  const RootStack = createStackNavigator();
  const { isLogged } = useSelector((state) => state.login);

  return (
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isLogged ? (
          <RootStack.Screen name="App" component={AppNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthNavigator} />
        )}
      </RootStack.Navigator>
  );
};

export default RootStack;
