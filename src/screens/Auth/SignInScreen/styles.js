import { StyleSheet } from 'react-native';
import { Colors, Dimensions, ApplicationStyles } from '../../../helpers';

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
    blankViewStyle: {
        marginVertical: 20,
    },
    seconView: {
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
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
        backgroundColor: Colors.GoogleBg,
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
        color: Colors.GoogleText,
        fontSize: 16,
        fontWeight: '600',
    },
    createAccountText: {
        color: Colors.TheamBlack,
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
    },
    separator: {
        marginVertical: 50,
        borderWidth: 0.5,
        borderColor: Colors.GoogleText,
        width: '95%',
    },
    textStyle: {
        fontSize: 50,
        fontWeight: '900',
        color: 'black',
    },
    buttonTextStyle: {
        fontSize: 20,
        color: Colors.White,
        fontWeight: '700',
    },
    headrMainView: {
        elevation: 25,
        backgroundColor: Colors.TheamCard,
        width: '100%',
        height: '7%',
        paddingTop: 10,
        flexDirection: 'row',
    },
    headrBack: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerSecondView: {
        width: '80%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerView: {
        width: '10%',
        height: '100%',
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});
