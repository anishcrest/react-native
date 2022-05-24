import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Color } from '../../../helper';
import styles from '../styles';

const SplashScreen = props => {
    const navigation = useNavigation();
    const loginData = useSelector(state => state.loginData);
    console.log('SplashScreen_loginData___', loginData);

    useEffect(() => {
        TimeOut();
    });

    function TimeOut() {
        setTimeout(() => {
            var isMyObjectEmpty = 0;

            isMyObjectEmpty = Object.keys(loginData).length;
            console.log('isMyObjectEmptys', isMyObjectEmpty);

            if (isMyObjectEmpty === 0) {
                navigation.navigate('Auth');
            } else {
                navigation.navigate('Tabs');
            }
        }, 1500);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Splash Screen</Text>
            <Icon name="home" size={50} color={Color.Red} />
            <Text style={styles.textStyle}>Redux</Text>
        </View>
    );
};

export default SplashScreen;
