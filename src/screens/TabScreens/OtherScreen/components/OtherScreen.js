import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';
import { Colors } from '../../../../helpers';
import styles from '../styles';

const OtherScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Other Screen</Text>
            <Icon name="home" size={50} color={Colors.Red} />
            <Text style={styles.textStyle}>Redux</Text>
        </View>
    );
};
export { OtherScreen };
