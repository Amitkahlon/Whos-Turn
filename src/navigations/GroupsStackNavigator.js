import React from 'react';
import GroupsScreen from '../screens/home/GroupsScreen';
import CustomHeader from '../components/medComponents/CustomHeader';
import GroupScreen from '../screens/home/GroupScreen';
import { Stack } from '../navigations/Navigators';

const GroupsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => {
          return <CustomHeader {...props} />;
        },
      }}
    >
      <Stack.Screen
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
      <Stack.Screen name="Group" component={GroupScreen} />
    </Stack.Navigator>
  );
};

export default GroupsStackNavigator;
