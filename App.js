import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import SigninScreen from './src/screens/login/SigninScreen';
import SignupScreen from './src/screens/login/SignupScreen'
import HomeScreen from './src/screens/home/HomeScreen';
import ForgotPassword from './src/screens/login/ForgotPasswordScreen';
import GroupsScreen from './src/screens/home/GroupsScreen';
import TaskScreen from './src/screens/home/TaskScreen';
import CustomHeader from "./src/components/medComponents/CustomHeader";
import GroupScreen from './src/screens/home/GroupScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//navigators
const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  )
}

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Groups') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          //Icon
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Groups" component={GroupsStackNavigator} />
    </Tab.Navigator>
  )
}

const HomeStackNavigator = () => {
  return <Stack.Navigator screenOptions={{
    header: (props) => {
      return <CustomHeader {...props}/>
    }
  }}>
    <Stack.Screen name="Home" component={HomeScreen} options={{
      header: props => {
        const { options } = props.scene.descriptor;
        options.title = 'Tasks';
        options.headSubtitle = 'Tasks for today';
        return <CustomHeader {...props}/>
      }
    }}/>
    <Stack.Screen name="Task" component={TaskScreen} />
  </Stack.Navigator>
}

const GroupsStackNavigator = () => {
  return <Stack.Navigator screenOptions={{
    header: (props) => {
      return <CustomHeader {...props}/>
    }
  }}>
    <Stack.Screen name="Groups" component={GroupsScreen} options={{
      header: props => {
        const { options } = props.scene.descriptor;
         options.title = 'Groups';
         options.headSubtitle = 'Groups Of Tasks You Belong To';
        return <CustomHeader {...props}/>
      }
    }}/>
    <Stack.Screen name="Group" component={GroupScreen} />
  </Stack.Navigator>
}

function App() {
  const [isReady, setIsReady] = useState(false);
  const isLoggedIn = false;

  //Load fonts once
  useEffect(() => {
    LoadFonts();
  }, [])

  const LoadFonts = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setIsReady(true);
  }

  if (!isReady) {
    return <AppLoading />;
  }
  else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoggedIn ? (
            <Stack.Screen name="Home" component={HomeNavigator} />
          ) : (
              <Stack.Screen name="Login" component={LoginNavigator} />
            )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

