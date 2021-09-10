import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import TaskScreen from '../screens/home/TaskScreen';
import CustomHeader from '../components/medComponents/CustomHeader';
import { createStackNavigator } from '@react-navigation/stack';


const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

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