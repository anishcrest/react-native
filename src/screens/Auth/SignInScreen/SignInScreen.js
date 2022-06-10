import React, { useState, useEffect, useRef } from 'react';
import {
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import {
    GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { Button } from '../../../components';
import { Colors } from '../../../helpers';
import styles from './styles';
import { USER_LOGIN, PROVIDER, FIREBASE_TOKEN } from '../../../redux/actions';
import SocialButton from '../../../components/common/SocialButton/SocialButton';

const SignInScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('test123@gmail.com');
    const [password, setPassword] = useState('123456');
    const refEmail = useRef(null);
    const refPassword = useRef(null);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId:
                '796471814300-msrllcm77nmj930kshos8ujpoo4m3dps.apps.googleusercontent.com',
            offlineAccess: true,
        });
    }, []);

    // Function to process the login button click
    async function processLogin() {
        let filterEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email === '') {
            showMessage({
                message: 'Please enter email id.',
                type: 'info',
            });
        } else if (password === '') {
            setPassword('');
            showMessage({
                message: 'Please enter password.',
                type: 'info',
            });
        } else if (filterEmail.test(email) == false) {
            showMessage({
                message: 'Please enter valid email id.',
                type: 'danger',
            });
        } else if (password.length < 3) {
            setPassword('');
            showMessage({
                message: 'Please enter password length more then 3',
                type: 'danger',
            });
        } else {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(response => {
                    dispatch(USER_LOGIN(response.user));
                    dispatch(PROVIDER(response.user._user.providerId));
                    navigation.navigate('Tabs');
                    showMessage({
                        message: 'User Login Success',
                        type: 'success',
                    });
                    setPassword('');
                    setEmail('');
                })
                .catch(error => {
                    if (error.code === 'auth/user-not-found') {
                        showMessage({
                            message:
                                'There is no user record corresponding to this identifier. The user may have been deleted.',
                            type: 'danger',
                        });
                    }
                    if (error.code === 'auth/email-already-in-use') {
                        showMessage({
                            message: 'That email address is already in use!',
                            type: 'danger',
                        });
                    }
                    if (error.code === 'auth/wrong-password') {
                        console.log(
                            'The password is invalid or the user does not have a password.',
                        );
                        showMessage({
                            message:
                                'The password is invalid or the user does not have a password.',
                            type: 'danger',
                        });
                    }
                    if (error.code === 'auth/too-many-requests') {
                        console.log(
                            ' We have blocked all requests from this device due to unusual activity. Try again later.',
                        );
                        showMessage({
                            message:
                                ' We have blocked all requests from this device due to unusual activity. Try again later.',
                            type: 'danger',
                        });
                    }
                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                        showMessage({
                            message: 'That email address is invalid!',
                            type: 'danger',
                        });
                    }
                    console.error(error);
                });
        }
    }

    // Function to handle the google signin
    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        dispatch(FIREBASE_TOKEN(googleCredential.token));
        dispatch(PROVIDER(googleCredential.providerId));
        // Sign-in the user with the credential
        try {
            auth()
                .signInWithCredential(googleCredential)
                .then(response => {
                    dispatch(USER_LOGIN(response.user));
                    navigation.navigate('Tabs');
                    showMessage({
                        message: 'User Login Success',
                        type: 'success',
                    });
                });
        } catch (error) {
            showMessage({
                message: 'Google signin error',
                type: 'danger',
            });
        }
    }

    // Return signin screen JSX
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Icon name="home" size={50} color={Colors.Red} />
                <Text style={styles.textStyle}>Redux</Text>
                <View style={styles.seconView}>
                    <TextInput
                        style={styles.textInputStyle}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email id"
                        autoCapitalize="none"
                        returnKeyType="next"
                        placeholderTextColor="#fff"
                        ref={refEmail}
                        keyboardType="email-address"
                        onSubmitEditing={() => refPassword.current.focus()}
                    />
                    <TextInput
                        style={styles.textInputStyle}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        placeholderTextColor="#fff"
                        ref={refPassword}
                    />
                </View>
                <Button
                    title="Sign In"
                    onPress={() => processLogin()}
                    containerStyle={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle1}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.createAccountText}>
                        Don't have an account? Create here
                    </Text>
                </TouchableOpacity>
                <View style={styles.separator}></View>
                <SocialButton
                    buttonTitle="Sign In with Google"
                    btnType="google"
                    color="#de4d41"
                    backgroundColor="#f5e7ea"
                    onPress={() => onGoogleButtonPress()}
                />
                <SocialButton
                    buttonTitle="Sign In with Facebook"
                    btnType="facebook"
                    color="#de4d41"
                    backgroundColor="#f5e7ea"
                    onPress={() => { }}
                />
            </View>
        </SafeAreaView>
    );
};
export { SignInScreen };
