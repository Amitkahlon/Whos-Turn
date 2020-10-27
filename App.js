import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';


const Stack = createStackNavigator();


function App() {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
            <>
              <Stack.Screen name="SignIn" component={SigninScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

