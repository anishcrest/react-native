import { Platform, StyleSheet } from 'react-native';
import { Colors, Dimensions } from '../../../helpers';

// Return button styles
export default StyleSheet.create({
    container: {
        width: '70%',
        height: Dimensions.moderateScale(45),
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Red,
        alignSelf: 'center',
    },
    text: {
        color: Colors.White,
        fontSize: Dimensions.FontSize.large,
        paddingTop: Platform.OS === 'ios' ? 2 : 0,
    },
});