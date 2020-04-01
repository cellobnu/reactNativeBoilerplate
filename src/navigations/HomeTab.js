import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '_screens/Home';
import UserStack from '_navigations/UserStack';

import OptionHeader from '_services/options-header';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="User"
        component={UserStack}
        // options={({route}) => ({
        //   headerShown: false,
        // })}
      />
    </Tab.Navigator>
  );
}
