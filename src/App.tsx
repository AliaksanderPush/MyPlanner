import {RootNavigation} from './app/navigation';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
