import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import store from './src/stateManagment/store/store';
import { Provider } from 'react-redux';
import MainNavigator from './src/navigations/MainNavigator';

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  const LoadFonts = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  };

  if (!isAppReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setIsAppReady(true)}
        onError={console.warn()}
      />
    );
  } else {
    return (
        <MainNavigator />
    );
  }
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};