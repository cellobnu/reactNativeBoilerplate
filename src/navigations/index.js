import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from '../navigations/RootStack';

function Navigator() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default Navigator;
