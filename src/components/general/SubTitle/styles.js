import { StyleSheet } from 'react-native';
import { Colors, Dimensions } from '../../../helpers';

// Return sub title styles
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: Colors.White,
        fontSize: Dimensions.FontSize.medium,
    },
    iconStyles: {
        paddingRight: Dimensions.Spacing.small,
        paddingTop: 5,
    },
});