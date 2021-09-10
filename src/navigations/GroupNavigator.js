import React from 'react';
import GroupsScreen from '../screens/home/GroupsScreen';
import CustomHeader from '../components/medComponents/CustomHeader';
import GroupScreen from '../screens/home/GroupScreen';
import { createStackNavigator } from '@react-navigation/stack';


const GroupNavigator = () => {
  const GroupStack = createStackNavigator(); 

  return (
    <GroupStack.Navigator
      screenOptions={{
        header: (props) => {
          return <CustomHeader {...props} />;
        },
      }}
    >
      <GroupStack.Screen
        name="Groups"
        component={GroupsScreen}
        options={{
          header: (props) => {
            const { options } = props.scene.descriptor;
            options.title = 'Groups';
            options.headSubtitle = 'Groups Of Tasks You Belong To';
            return <CustomHeader {...props} />;
          },
        }}
      />
      <GroupStack.Screen name="Group" component={GroupScreen} />
    </GroupStack.Navigator>
  );
};

export default GroupNavigator;
