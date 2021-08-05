import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import TaskScreen from '../screens/home/TaskScreen';
import CustomHeader from '../components/medComponents/CustomHeader';
import { Stack } from "./Navigators";

const HomeStacksNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => {
          return <CustomHeader {...props} />;
        },
      }}
    >
      <Stack.Screen
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
      <Stack.Screen name="Task" component={TaskScreen} />
    </Stack.Navigator>
  );
};

export default HomeStacksNavigator;