import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import HomeStacksNavigator from './HomeStackNavigator';
import GroupsStackNavigator from "./GroupsStackNavigator";
import { Tab } from "./Navigators";

const HomeGroupNavigator = () => {
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
      <Tab.Screen name="Home" component={HomeStacksNavigator} />
      <Tab.Screen name="Groups" component={GroupsStackNavigator} />
    </Tab.Navigator>
  );
};

export default HomeGroupNavigator;