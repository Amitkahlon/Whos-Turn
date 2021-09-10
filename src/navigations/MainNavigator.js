import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from "./RootNavigator";

const MainNavigator = () => {

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
