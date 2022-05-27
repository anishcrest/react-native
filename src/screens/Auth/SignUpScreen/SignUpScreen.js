import React, { useState, useRef } from 'react';
import {
    TextInput,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import { Button } from '../../../components';
import styles from './styles';

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const refEmail = useRef(null);
    const refPassword = useRef(null);
    const refConfirmPassword = useRef(null);

    function processLogin() {
        let filterEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email === '') {
            showMessage({
                message: 'Please enter email id.',
                type: 'info',
            });
        } else if (filterEmail.test(email) == false) {
            showMessage({
                message: 'Please enter valid email id.',
                type: 'danger',
            });
        } else if (password === '') {
            setPassword('');
            showMessage({
                message: 'Please enter password.',
                type: 'info',
            });
        } else if (password.length < 3) {
            setPassword('');
            showMessage({
                message: 'Please enter password length more then 3',
                type: 'danger',
            });
        } else if (confirmPassword === '') {
            setConfirmPassword('');
            showMessage({
                message: 'Please enter confirm password.',
                type: 'info',
            });
        } else if (password !== confirmPassword) {
            setConfirmPassword('');
            showMessage({
                message: 'Please enter valid confirm password',
                type: 'danger',
            });
        } else {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(response => {
                    console.log('User account created', response);
                    navigation.navigate('Login');
                    setEmail('');
                    setConfirmPassword('');
                    setPassword('');
                    showMessage({
                        message: 'Create User Success',
                        type: 'success',
                    });
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                        showMessage({
                            message: 'That email address is already in use!',
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

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>Create Account</Text>
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
                    onSubmitEditing={() => refConfirmPassword.current.focus()}
                />
                <TextInput
                    style={styles.textInputStyle}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Enter your confirm password"
                    secureTextEntry={true}
                    placeholderTextColor="#fff"
                    ref={refConfirmPassword}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('TermsCondition')}>
                <Text style={styles.createAccountText}>Terms and Condition</Text>
            </TouchableOpacity>
            <Button
                title="Sign Up"
                onPress={() => processLogin()}
                containerStyle={styles.buttonStyle}
                textStyle={styles.buttonTextStyle}
            />
        </View>
    );
};
export { SignUpScreen };
