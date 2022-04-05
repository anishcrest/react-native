/**
 * @format
 */
// import './api/ReactotronConfig';

import {AppState, StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Providers} from './Providers';
import React from 'react';
import {Routes} from './routes';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor} from './redux/store';

const App = () => {
  return (
    <Providers>
      {/* <StatusBar hidden={true} /> */}
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
      <FlashMessage position="top" />
    </Providers>
  );
};

export default App;
