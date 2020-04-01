import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import User from '_screens/User';
import UserDetail from '_screens/UserDetail';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
}
