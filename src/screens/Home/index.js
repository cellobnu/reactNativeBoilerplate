import React from 'react';
import {Text} from 'react-native';

import {ContentView, Button} from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <ContentView>
      <Text>Screen: Home</Text>
      <Button onPress={() => navigation.navigate('Login')}>
        <Text>Log out</Text>
      </Button>
      <Button onPress={() => navigation.toggleDrawer()}>
        <Text>Menu</Text>
      </Button>
    </ContentView>
  );
};

export default HomeScreen;
