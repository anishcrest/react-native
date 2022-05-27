import React, { useEffect, useState } from 'react';
import { View, Alert, ActivityIndicator, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {
    GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { Colors } from '../../../../helpers';
import styles from '../styles';
import { Button } from '../../../../components';
import { LOG_OUT } from '../../../../redux/actions';

const HelpScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const loginData = useSelector(state => state.loginData);
    const provider = useSelector(state => state.provider);

    function processLogout() {
        Alert.alert(
            '',
            'Are you sure you want to Logout?',
            [
                {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: async () => yesPressed(),
                },
            ],
            { cancelable: false },
        );
    }

    async function yesPressed() {
        if (loginData !== null) {
            if (provider === 'google.com') {
                GoogleSignin.signOut();
                dispatch(LOG_OUT());
                setIsLoading(false);
                AsyncStorage.clear();
                navigation.navigate('Login');
                console.log('innnnn end');
            } else if (provider === 'firebase') {
                try {
                    setIsLoading(true);
                    auth()
                        .signOut()
                        .then(() => {
                            dispatch(LOG_OUT());
                            setIsLoading(false);
                            AsyncStorage.clear();
                            navigation.navigate('Login');
                            setIsLoading(false);
                        });
                } catch (err) {
                    setIsLoading(false);
                }
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Help Screen</Text>
            <Icon name="home" size={50} color={Colors.Red} />
            <Text style={styles.textStyle}>Redux</Text>
            {isLoading ? (
                <ActivityIndicator
                    size="large"
                    animating={true}
                    color={'#EF7A04'}
                    style={{ marginTop: 20 }}
                />
            ) : (
                <Button
                    title="SIGN OUT"
                    onPress={() => processLogout()}
                    textStyle={styles.buttonTextStyle}
                    containerStyle={styles.buttonStyle}
                />
            )}
        </View>
    );
};
export { HelpScreen };
