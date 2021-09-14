import React from 'react';
import RegisterIntroScreen from '../screens/Register/RegisterIntroScreen';
import EmailScreen from '../screens/Register/EmailScreen';
import NameScreen from '../screens/Register/NameScreen';
import DateOfBirthScreen from '../screens/Register/DateOfBirthScreen';
import GenderScreen from '../screens/Register/GenderScreen';
import PassScreen from '../screens/Register/PassScreen';
import FinishScreen from '../screens/Register/FinishScreen';

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const RegisterStack = createStackNavigator();

const RegisterNavigator = () => {
    return (
        <RegisterStack.Navigator>
          <RegisterStack.Screen name="Intro" component={RegisterIntroScreen} />
          <RegisterStack.Screen name="Name" component={NameScreen} />
          <RegisterStack.Screen name="DateOfBirth" component={DateOfBirthScreen} />
          <RegisterStack.Screen name="Gender" component={GenderScreen} />
          <RegisterStack.Screen name="Email" component={EmailScreen} />
          <RegisterStack.Screen name="Pass" component={PassScreen} />
          <RegisterStack.Screen name="Finish" component={FinishScreen} />
        </RegisterStack.Navigator>
      );
    
}

export default RegisterNavigator;
