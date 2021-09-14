import React from 'react';
import GroupsScreen from '../screens/app/GroupsScreen';
import { CustomHeader } from '_atoms';
import GroupScreen from '../screens/app/GroupScreen';
import { createStackNavigator } from '@react-navigation/stack';

const GroupStack = createStackNavigator(); 

const GroupNavigator = () => {

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
