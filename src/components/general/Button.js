import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { Color, Dimensions } from '../../helper';

const Button = ({ onPress, title, containerStyle = null, textStyle = null, loader, disbale }) => (
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

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: Dimensions.moderateScale(45),
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.Red,
    alignSelf: 'center',
  },
  text: {
    color: Color.White,
    fontSize: Dimensions.FontSize.large,
    paddingTop: Platform.OS === 'ios' ? 2 : 0,
  },
});
