/**
 * @format
 */
import {RenderBack, getHeaderTitle, getScreenOptions} from './common';

import {AuthRoutes} from './AuthRoutes';
// import {CompleteProfileScreen} from '../features/Auth/CompleteProfile/components';
import React, {useEffect} from 'react';
import Splash from '../screens/Splash/components/SplashScreen';
import {Tabs} from './Tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {TermsConditionScreen} from '../screens/Auth';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Splash" component={Splash} />
        <AppStack.Screen name="Auth" component={AuthRoutes} />
        <AppStack.Screen name="Tabs" component={Tabs} />
        <AppStack.Screen
          name="TermsCondition"
          options={({navigation, route}) => ({
            headerTitle: 'Terms and Condition',
            headerLeft: () => <RenderBack navigation={navigation} />,
            headerShown: true,
          })}
          component={TermsConditionScreen}
        />
      </AppStack.Navigator>
    </>
  );
};

export {Routes};
