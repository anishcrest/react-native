import FlashMessage from 'react-native-flash-message';
import { Providers } from './providers/Providers';
import React from 'react';
import { Routes } from './routes';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor } from './redux/store';

const App = () => {
    // Return the main app component
    return (
        <Providers>
            <PersistGate loading={null} persistor={persistor}>
                <Routes />
            </PersistGate>
            <FlashMessage position="top" />
        </Providers>
    );
};

export default App;
