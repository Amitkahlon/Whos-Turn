import 'react-native-gesture-handler'; //react navigation ask to put in on top of the app.js
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import store from '_store/store';
import { Provider } from 'react-redux';
import {MainNavigator} from '_navigations';


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
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
