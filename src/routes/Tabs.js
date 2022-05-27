import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { HelpScreen, HomeScreen, OtherScreen } from '../screens/TabScreens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { getScreenOptions } from './common';

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ ...getScreenOptions() }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const OtherStack = () => {
    return (
        <Stack.Navigator screenOptions={{ ...getScreenOptions() }}>
            <Stack.Screen
                name="Other"
                options={{ headerShown: false }}
                component={OtherScreen}
            />
        </Stack.Navigator>
    );
};

const HelpStack = () => {
    return (
        <Stack.Navigator screenOptions={{ ...getScreenOptions() }}>
            <Stack.Screen
                name="Help"
                options={{ headerShown: false }}
                component={HelpScreen}
            />
        </Stack.Navigator>
    );
};

const getTabIcon = (routeName, iconProps) => {
    const { focused, size } = iconProps;
    let IconS;
    switch (routeName) {
        case 'HomeStack':
            IconS = focused ? (
                <Icon name="home" size={20} />
            ) : (
                <Icon name="home" size={20} />
            );
            break;
        case 'OtherStack':
            IconS = focused ? (
                <Icon name="home" size={20} />
            ) : (
                <Icon name="home" size={20} />
            );
            break;

        case 'HelpStack':
            IconS = focused ? (
                <Icon name="home" size={20} />
            ) : (
                <Icon name="home" size={20} />
            );
            break;
    }
    return <Icon width={size} height={size} />;
};

const getTabLabelColor = (routeName, titleProps) => {
    const { focused } = titleProps;
    let textTitle;
    let textColor;
    switch (routeName) {
        case 'HomeStack':
            textColor = focused ? '#FF7A00' : '#353534';
            textTitle = 'Home';
            break;
        case 'OtherStack':
            textColor = focused ? '#FF7A00' : '#353534';
            textTitle = 'Other';
            break;
        case 'HelpStack':
            textColor = focused ? '#FF7A00' : '#353534';
            textTitle = 'Help';
            break;
    }
    return <Text style={{ color: textColor }}> {textTitle} </Text>;
};

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#FF7A00',
                tabBarInactiveTintColor: '#676765',
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: '#f2f2f2',
                    height: 72,
                    paddingBottom: 16,
                    paddingTop: 8,
                    paddingRight: 5,
                },
            }}>
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarLabel: titleProps => getTabLabelColor('HomeStack', titleProps),
                    tabBarIcon: iconProps => getTabIcon('HomeStack', iconProps),
                }}
            />
            <Tab.Screen
                name="ContactStack"
                component={OtherStack}
                options={{
                    headerShown: false,
                    tabBarLabel: titleProps => getTabLabelColor('OtherStack', titleProps),
                    tabBarIcon: iconProps => getTabIcon('OtherStack', iconProps),
                }}
            />
            <Tab.Screen
                name="HelpStack"
                component={HelpStack}
                options={{
                    headerShown: false,
                    tabBarLabel: titleProps => getTabLabelColor('HelpStack', titleProps),
                    tabBarIcon: iconProps => getTabIcon('HelpStack', iconProps),
                }}
            />
        </Tab.Navigator>
    );
};

export { Tabs };
