import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const isMountedRef = React.createRef();
export const navigationRef = React.createRef();

// Function to navigate the user
export function navigate(name, params) {
    if (isMountedRef.current && navigationRef.current) {
        navigationRef.current.navigate(name, params);
    }
}

// Function to push another screen
export function push(...args) {
    navigationRef.current?.dispatch(StackActions.push(...args));
}
