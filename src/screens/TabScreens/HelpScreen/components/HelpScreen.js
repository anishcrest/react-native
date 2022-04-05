import React, {useEffect, useState} from 'react';
import {View, Alert, ActivityIndicator, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {Color} from '../../../../helper';
import styles from '../styles';
import {Button} from '../../../../components';
import {LOG_OUT} from '../../../../redux/Actions';

const HelpScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const loginData = useSelector(state => state.loginData);
  const firbaseToken = useSelector(state => state.firbaseToken);
  const provider = useSelector(state => state.provider);
  console.log('loginData___', loginData);
  console.log('firbaseToken___', firbaseToken);
  console.log('provider__', provider);

  useEffect(() => {
    const currentUser = GoogleSignin.getCurrentUser();
    console.log('currentUser__', currentUser);
  }, []);

  function _logout() {
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
          onPress: async () => _yesPress(),
        },
      ],
      {cancelable: false},
    );
  }

  async function _yesPress() {
    if (loginData !== null) {
      if (provider === 'google.com') {
        console.log('innnnn google');
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
            .then(response => {
              console.log('User signed out!', response);
              dispatch(LOG_OUT());
              setIsLoading(false);
              AsyncStorage.clear();
              navigation.navigate('Login');
              setIsLoading(false);
            });
        } catch (err) {
          console.log('___err', err);
          setIsLoading(false);
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Help Screen</Text>
      <Icon name="home" size={50} color={Color.Red} />
      <Text style={styles.textStyle}>Redux</Text>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          animating={true}
          color={'#EF7A04'}
          style={{marginTop: 20}}
        />
      ) : (
        <Button
          title="SIGN OUT"
          onPress={() => _logout()}
          textStyle={styles.buttonTextStyle}
          containerStyle={styles.buttonStyle}
        />
      )}
    </View>
  );
};
export {HelpScreen};
