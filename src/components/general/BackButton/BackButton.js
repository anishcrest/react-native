import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = props => {
    const { onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} styles={styles.touchStyle}>
            <Icon name="arrow-back" size={30} color={'#fff'} />
        </TouchableOpacity>
    );
};

export default BackButton;
