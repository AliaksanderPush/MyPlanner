/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import i18next from './src/app/languages/i18next';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
