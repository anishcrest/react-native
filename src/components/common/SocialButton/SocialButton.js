import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js';

const SocialButton = ({
    buttonTitle,
    btnType,
    color,
    backgroundColor,
    ...rest
}) => {
    let bgColor = backgroundColor;

    // Return component JSX
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor: bgColor }]}
            {...rest}>
            <View style={styles.iconWrapper}>
                <FontAwesome
                    name={btnType}
                    style={styles.icon}
                    size={30}
                    color={color}
                />
            </View>
            <View style={styles.btnTxtWrapper}>
                <Text style={[styles.buttonText, { color: color }]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SocialButton;
