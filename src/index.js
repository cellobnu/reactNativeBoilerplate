import React from 'react';
import {Provider} from 'react-redux';

import Navigator from '_navigations';

import store from '_store';

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
