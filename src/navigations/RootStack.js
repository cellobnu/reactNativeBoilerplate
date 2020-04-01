import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HeaderMenu from '_atoms/HeaderMenu';
import Login from '_screens/Login';
import DrawerStack from '_navigations/DrawerStack';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={DrawerStack}
        options={({route}) => ({
          headerLeft: ({}) => <HeaderMenu />,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
