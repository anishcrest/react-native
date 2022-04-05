import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    // width: width * 0.9,
    flexDirection: 'row',
    borderWidth: 10,
    // alignContent: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
});
