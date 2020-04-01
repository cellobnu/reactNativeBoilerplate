import React from 'react';
import {Text} from 'react-native';

import {ContentView, Button} from './styles';

const UserDetailScreen = ({navigation}) => {
  return (
    <ContentView>
      <Text>Screen: User Detail</Text>
      <Button onPress={() => navigation.navigate('User')}>
        <Text>Go to User</Text>
      </Button>
    </ContentView>
  );
};

export default UserDetailScreen;
