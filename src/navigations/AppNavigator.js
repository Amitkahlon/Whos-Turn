import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';
import GroupNavigator from "./GroupNavigator";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const AppTab = createBottomTabNavigator();

const AppNavigator = () => {
  
  return (
    <AppTab.Navigator
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
      <AppTab.Screen name="Home" component={HomeNavigator} />
      <AppTab.Screen name="Groups" component={GroupNavigator} />
    </AppTab.Navigator>
  );
};

export default AppNavigator;