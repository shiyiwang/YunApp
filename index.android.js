import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  View
} from 'react-native';
import App from './src/app';

export default class YunApp extends Component {
	render() {
		return (
			<App />
		)
	}
}

AppRegistry.registerComponent('YunApp', () => YunApp);
