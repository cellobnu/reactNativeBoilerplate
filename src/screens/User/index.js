import React from 'react';
import {Text} from 'react-native';

import {ContentView, Button} from './styles';

const UserScreen = ({navigation}) => (
  <ContentView>
    <Text>Screen: User</Text>
    <Button onPress={() => navigation.navigate('UserDetail')}>
      <Text>Go to Detail</Text>
    </Button>
  </ContentView>
);

export default UserScreen;
