import { StyleSheet } from 'react-native';
import { Dimensions } from '../../../helpers';

// Return back button styles
export default StyleSheet.create({
    touchStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        marginLeft: Dimensions.Spacing.medium,
    },
});
