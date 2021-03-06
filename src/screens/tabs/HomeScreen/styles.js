import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../../helpers';

// Return home screen styles
export default StyleSheet.create({
    container: {
        ...ApplicationStyles.screen.container,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: { fontSize: 50, fontWeight: '900', color: 'black' },
});
