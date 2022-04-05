/* eslint-disable no-unused-vars */
/**
 * @format
 */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
// import {QueryClient, QueryClientProvider} from 'react-query';
// import {MenuProvider} from 'react-native-popup-menu';
// import dynamicLinks from '@react-native-firebase/dynamic-links';
import {NetworkProvider} from 'react-native-offline';
//TODO when socket working then uncoment the "SocketProvider" & "MasterContextProvider"
// import {SocketProvider} from '../socket/context';
// import {MasterContextProvider} from '../features/Auth/MasterContext';

// import {ThemeContextProvider, withTheme} from 'assets/theme';
// import {store} from '../redux/store';
// import '../api/ReactotronConfig';

// import i18n from '../locale';

// const queryClient = new QueryClient();

import {isMountedRef, navigationRef} from '../routes/RootNavigation';
import {store, persistor} from '../redux/store';

const Providers = props => {
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NetworkProvider>
      <Provider store={store}>
        {/* <MasterContextProvider>
            <SocketProvider> */}
        {/* <MenuProvider> */}
        {/* <ThemeContextProvider> */}
        <CustomNavContainer>{props.children}</CustomNavContainer>
        {/* </ThemeContextProvider> */}
        {/* </MenuProvider> */}
        {/* </SocketProvider>
          </MasterContextProvider> */}
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

export {Providers};
