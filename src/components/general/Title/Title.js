import React from 'react';
import { Text } from 'react-native';

// Return title JSX
const Title = ({ text, containerProps }) => {
    return (
        <Text style={[styles.text, containerProps]}>{text.toUpperCase()}</Text>
    );
};
export default Title;
