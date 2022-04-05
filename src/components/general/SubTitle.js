import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color, Dimensions } from '../../helper';

const SubTitle = ({ text, containerProps, icon, iconType, iconStyle, maincontainerstyle }) => {
  return (
    <View style={[styles.container, maincontainerstyle]}>
      <Text style={[styles.text, containerProps]}>{text}</Text>
    </View>
  );
};
export default SubTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Color.White,
    fontSize: Dimensions.FontSize.medium,
  },
  iconStyles: {
    paddingRight: Dimensions.Spacing.small,
    paddingTop: 5,
  },
});
