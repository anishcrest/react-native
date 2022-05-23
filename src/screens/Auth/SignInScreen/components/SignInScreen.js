import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  Text,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Button} from '../../../../components';
import {Color} from '../../../../helper';
import styles from '../styles';
import {USER_LOGIN, PROVIDER, FIREBASE_TOKEN} from '../../../../redux/Actions';
import Images from '../../../../assets';
import SocialButton from '../../../../components/common/SocialButton/SocialButton';
import {AnimatedButton} from '../../../../components/common/AnimatedButton/AnimatedButton';
// import { AppleButton } from '@invertase/react-native-apple-authentication';
// import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

const SignInScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.loginData);
  const firbaseToken = useSelector(state => state.firbaseToken);
  console.log('loginData___', loginData);
  console.log('firbaseToken___', firbaseToken);

  const [email, setEmail] = useState('test123@gmail.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);
  const ref_input2 = useRef(null);
  const ref_input1 = useRef(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '796471814300-msrllcm77nmj930kshos8ujpoo4m3dps.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  async function _isLogin() {
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
          console.log('User signed with signInWithEmailAndPassword!', response);
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
          console.log(error, '___________error');
          if (error.code === 'auth/user-not-found') {
            console.log(
              'There is no user record corresponding to this identifier. The user may have been deleted.',
            );
            showMessage({
              message:
                'There is no user record corresponding to this identifier. The user may have been deleted.',
              type: 'danger',
            });
          }
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
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

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log('idToken__', idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('googleCredential___', googleCredential);
    console.log('googleCredential_providerId__', googleCredential.providerId);
    dispatch(FIREBASE_TOKEN(googleCredential.token));
    dispatch(PROVIDER(googleCredential.providerId));
    // Sign-in the user with the credential
    try {
      auth()
        .signInWithCredential(googleCredential)
        .then(response => {
          console.log('response___', response);
          dispatch(USER_LOGIN(response.user));
          navigation.navigate('Tabs');
          showMessage({
            message: 'User Login Success',
            type: 'success',
          });
        });
    } catch (error) {
      console.log('GoogleSignin___', error);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Icon name="home" size={50} color={Color.Red} />
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
            ref={ref_input1}
            keyboardType="email-address"
            onSubmitEditing={() => ref_input2.current.focus()}
          />
          <TextInput
            style={styles.textInputStyle}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry={true}
            placeholderTextColor="#fff"
            ref={ref_input2}
          />
        </View>
        {/* <View style={{marginTop: 10}}>
          <AnimatedButton
            backgroundColor={Color.Red}
            borderRadius={15}
            paddingHorizontal={'38%'}
            // paddingVertical={10}
            // borderWidth={}
            onTapped={_isLogin}>
            <Text style={styles.buttonTextStyle}>Sign In</Text>
          </AnimatedButton>
        </View> */}
        <Button
          title="Sign In"
          onPress={() => _isLogin()}
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
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};
export {SignInScreen};
