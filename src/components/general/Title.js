import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Color, Dimensions } from '../../helper';

const Title = ({ text, containerProps }) => {
    return (
        <Text style={[styles.text, containerProps]}>{text.toUpperCase()}</Text>
    );
};
export default Title;

const styles = StyleSheet.create({
    text: {
        color: Color.White,
        fontSize: Dimensions.FontSize.huge,
    },
});
