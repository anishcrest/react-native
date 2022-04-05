import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Color} from '../../../../helper';
import styles from '../styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Icon name="home" size={50} color={Color.Red} />
      <Text style={styles.textStyle}>Redux</Text>
    </View>
  );
};
export {HomeScreen};
