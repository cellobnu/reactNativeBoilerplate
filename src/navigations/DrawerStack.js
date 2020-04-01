import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import HomeTab from '_navigations/HomeTab';

import OptionHeader from '_services/options-header';

import HeaderMenu from '_atoms/HeaderMenu';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeTab}
        // options={({route}) => ({
        //   title: OptionHeader.getHeaderTitle(route, 'Home'),
        //   headerLeft: ({}) => <HeaderMenu />,
        //   headerShown: OptionHeader.shouldHeaderBeShown(route, 'Home'),
        // })}
      />
    </Drawer.Navigator>
  );
}
