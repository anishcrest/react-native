/**
 * @format
 */
import { AppRegistry, Text, TextInput, LogBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

//Disable textinput accessibility
Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

LogBox.ignoreLogs(['[Setting a timer]', '[react-native-gesture-handler]']);

AppRegistry.registerComponent(appName, () => App);
