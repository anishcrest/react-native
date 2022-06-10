import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../../helpers';
import styles from './styles';

const SplashScreen = () => {
    const navigation = useNavigation();
    const loginData = useSelector(state => state.loginData);

    useEffect(() => {
        timeOut();
    });

    // Function to add timeout before performing the actions
    function timeOut() {
        setTimeout(() => {
            var isMyObjectEmpty = 0;

            isMyObjectEmpty = Object.keys(loginData).length;

            if (isMyObjectEmpty === 0) {
                navigation.navigate('Auth');
            } else {
                navigation.navigate('Tabs');
            }
        }, 1500);
    }

    // Return splash screen JSX
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Splash Screen</Text>
            <Icon name="home" size={50} color={Colors.Red} />
            <Text style={styles.textStyle}>Redux</Text>
        </View>
    );
};

export default SplashScreen;
