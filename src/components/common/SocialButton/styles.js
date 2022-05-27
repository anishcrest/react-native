import { StyleSheet } from 'react-native';

// Return social button styles
export default StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '95%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        borderRadius: 15,
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontWeight: 'bold',
    },
    btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
