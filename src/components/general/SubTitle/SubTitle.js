import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const SubTitle = ({ text, containerProps, maincontainerstyle }) => {
    // Return sub title JSX
    return (
        <View style={[styles.container, maincontainerstyle]}>
            <Text style={[styles.text, containerProps]}>{text}</Text>
        </View>
    );
};

export default SubTitle;
