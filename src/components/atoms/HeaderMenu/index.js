import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {ContentView, Button, Img} from './styles';

const HeaderMenu = () => {
  const navigation = useNavigation();
  return (
    <ContentView>
      <Button
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}>
        <Img source={require('../../../assets/image/menu.png')} />
      </Button>
    </ContentView>
  );
};

export default HeaderMenu;
