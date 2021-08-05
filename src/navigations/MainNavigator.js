import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeGroupNavigator from './HomeGroupNavigator';
import LoginNavigator from './LoginNavigator';
import { Stack } from './Navigators';
import { useSelector } from "react-redux";

const MainNavigator = () => {
  const { isLogged } = useSelector((state) => state.login);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogged ? (
          <Stack.Screen name="Home" component={HomeGroupNavigator} />
        ) : (
          <Stack.Screen name="Login" component={LoginNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
