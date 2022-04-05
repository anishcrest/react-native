/**
 * @format
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  TermsConditionScreen,
  SignInScreen,
  SignUpScreen,
} from '../screens/Auth';
import {RenderBack} from './common';

const AuthStack = createStackNavigator();

const AuthRoutes = props => {
  const {screenOptions} = props;
  return (
    <AuthStack.Navigator
      screenOptions={{...screenOptions, gestureEnabled: true}}>
      <AuthStack.Screen
        name="Login"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Register"
        component={SignUpScreen}
        options={({navigation, route}) => ({
          headerLeft: () => <RenderBack navigation={navigation} />,
          headerTitle: 'Registration',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#262a33',
          },
          headerTintColor: '#fff',
        })}
      />

      <AuthStack.Screen
        name="TermsCondition"
        component={TermsConditionScreen}
        options={({navigation, route}) => ({
          headerLeft: () => <RenderBack navigation={navigation} />,
          headerTitle: 'Terms and Condition',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#262a33',
          },
          headerTintColor: '#fff',
        })}
      />
    </AuthStack.Navigator>
  );
};

export {AuthRoutes};