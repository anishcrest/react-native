/**
 * @format
 */
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Images from '../../../assets';
import styles from './BackButtonStyle';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = props => {
  const {onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} styles={styles.touchStyle}>
      <Icon name="arrow-back" size={30} color={'#fff'} />
    </TouchableOpacity>
  );
};

export default BackButton;
