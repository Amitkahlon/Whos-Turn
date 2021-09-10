import React from 'react';
import RegisterScreen from '../screens/Register/RegisterScreen';
import EmailScreen from '../screens/Register/EmailScreen';
import NameScreen from '../screens/Register/NameScreen';
import DateOfBirthScreen from '../screens/Register/DateOfBirthScreen';
import GenderScreen from '../screens/Register/GenderScreen';
import PassScreen from '../screens/Register/PassScreen';
import FinishScreen from '../screens/Register/FinishScreen';

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const RegisterTab = createStackNavigator();

const RegisterNavigator = () => {
    return (
        <RegisterTab.Navigator>
          <RegisterTab.Screen name="Intro" component={RegisterScreen} />
          <RegisterTab.Screen name="Name" component={NameScreen} />
          <RegisterTab.Screen name="DateOfBirth" component={DateOfBirthScreen} />
          <RegisterTab.Screen name="Gender" component={GenderScreen} />
          <RegisterTab.Screen name="Email" component={EmailScreen} />
          <RegisterTab.Screen name="Pass" component={PassScreen} />
          <RegisterTab.Screen name="Finish" component={FinishScreen} />
        </RegisterTab.Navigator>
      );
    
}

export default RegisterNavigator;
