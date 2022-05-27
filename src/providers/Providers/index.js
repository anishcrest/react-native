/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { NetworkProvider } from 'react-native-offline';

import { isMountedRef, navigationRef } from '../../routes/RootNavigation';
import { store } from '../../redux/store';

const Providers = props => {
    useEffect(() => {
        isMountedRef.current = true;
        return () => (isMountedRef.current = false);
    }, []);

    return (
        <NetworkProvider>
            <Provider store={store}>
                <CustomNavContainer>{props.children}</CustomNavContainer>
            </Provider>
        </NetworkProvider>
    );
};

const NavContainer = props => {
    return (
        <NavigationContainer ref={navigationRef}>
            {props.children}
        </NavigationContainer>
    );
};

const CustomNavContainer = NavContainer;

export { Providers };
