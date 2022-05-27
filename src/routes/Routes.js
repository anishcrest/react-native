import { RenderBack } from './common/common';

import { AuthRoutes } from './AuthRoutes';
import React from 'react';
import SplashScreen from '../screens/splash/SplashScreen/SplashScreen';
import { Tabs } from './Tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TermsConditionScreen } from '../screens/auth';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Splash" component={SplashScreen} />
                <AppStack.Screen name="Auth" component={AuthRoutes} />
                <AppStack.Screen name="Tabs" component={Tabs} />
                <AppStack.Screen
                    name="TermsCondition"
                    options={({ navigation }) => ({
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

export { Routes };
