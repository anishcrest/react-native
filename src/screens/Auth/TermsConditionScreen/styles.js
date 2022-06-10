import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../../helpers';

// Return styles for terms and conditions page
export default StyleSheet.create({
    container: {
        ...ApplicationStyles.screen.container,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E0E0E0',
    },
    textStyle: { fontSize: 50, fontWeight: '900', color: 'black' },
});
