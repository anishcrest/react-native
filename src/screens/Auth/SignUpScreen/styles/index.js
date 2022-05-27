import { StyleSheet } from 'react-native';
import { Colors, Dimensions, ApplicationStyles } from '../../../../helpers';

export default StyleSheet.create({
    container: {
        ...ApplicationStyles.screen.container,
        width: '100%',
        padding: Dimensions.Spacing.large,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topImageStyle: {
        height: '20%',
        width: '80%',
    },
    safeStyle: {
        flex: 1,
    },
    titleStyle: {
        fontSize: Dimensions.FontSize.extraHuge,
        fontWeight: '600',
        color: Colors.Black,
    },
    buttonStyle: {
        backgroundColor: Colors.Red,
        width: '95%',
        marginVertical: Dimensions.Spacing.tiny,
        borderRadius: 16,
        marginTop: 10,
    },
    buttonTextStyle: {
        fontSize: 20,
        fontWeight: '800',
    },
    blankViewStyle: {
        marginVertical: 20,
    },
    seconView: {
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    createAccountText: {
        color: Colors.TheamBlack,
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
    },
    textInputStyle: {
        backgroundColor: Colors.TheamCard,
        width: '95%',
        marginTop: 10,
        padding: 10,
        fontSize: 16,
        borderRadius: 15,
        alignSelf: 'center',
        color: Colors.White,
    },
    imageStyle: {
        height: 50,
        width: 50,
    },
    socialTouch: {
        alignItems: 'center',
        padding: 5,
        marginTop: 10,
        width: '95%',
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: Colors.fbBackground,
        borderRadius: 16,
    },
    iconContainer: {
        flex: 0.15,
        alignItems: 'center',
    },
    textContainer: {
        flex: 0.85,
        alignItems: 'center',
    },
    signInText: {
        color: Colors.Blue589ACD,
        fontSize: 16,
        fontWeight: '600',
    },
    createText: {
        color: Colors.Blue589ACD,
        fontSize: 16,
        fontWeight: '600',
        marginTop: 20,
    },
    separator: {
        marginVertical: 50,
        borderWidth: 0.5,
        borderColor: Colors.Blue589ACD,
        width: '95%',
    },
});
