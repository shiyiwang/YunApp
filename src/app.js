import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Navigator
} from 'react-native';
import Home from './Home';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Navigator
					initialRoute={{component: Home}}
					renderScene={(route, navigator) => {
							return <route.component navigator={navigator} {...route.args}/>
							}
					}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20
	}
});
