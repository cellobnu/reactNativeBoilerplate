import React from 'react';
import {Text} from 'react-native';

import {ContentView, Button} from './styles';

const LoginScreen = ({navigation}) => (
  <ContentView>
    <Text>Screen: Login</Text>
    <Button onPress={() => navigation.navigate('Home')}>
      <Text>Go to home</Text>
    </Button>
  </ContentView>
);

export default LoginScreen;
