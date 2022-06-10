import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';

const Button = ({ onPress, title, containerStyle = null, textStyle = null, disbale }) => {
    // Return component JSX
    return (
        <TouchableOpacity
            disabled={disbale}
            activeOpacity={0.9}
            onPress={onPress}
            style={[styles.container, containerStyle]}
        >
            {title === 'loading' ? (
                <ActivityIndicator color="white" size="large" />
            ) : (
                <Text style={[styles.text, textStyle]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

export default Button;
