import React from 'react';
import HomeScreen from "../screens/app/HomeScreen";
import TaskScreen from '../screens/app/TaskScreen';
import {CustomHeader} from '_atoms';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {

  return (
    <HomeStack.Navigator
      screenOptions={{
        header: (props) => {
          return <CustomHeader {...props} />;
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: (props) => {
            const { options } = props.scene.descriptor;
            options.title = 'Tasks';
            options.headSubtitle = 'Tasks for today';
            return <CustomHeader {...props} />;
          },
        }} />
      <HomeStack.Screen name="Task" component={TaskScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;