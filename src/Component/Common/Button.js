'use strict';

import React, {Component, PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';

export default class Button extends Component{
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    btnStyle: PropTypes.object,
    textStyle: PropTypes.object
  };

  render(){
    if(Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback style={[styles.container, this.props.btnStyle]}
          onPress={this.props.onPress}>
          {this._renderContent()}
        </TouchableNativeFeedback>
      );
    }else if(Platform.OS === 'ios'){
      return(
        <TouchableOpacity style={[styles.container, this.props.btnStyle]}
          activeOpacity={0.5}
          onPress={this.props.onPress}>
          {this._renderContent()}
        </TouchableOpacity>
      );
    }
  }

  _renderContent(){
    return(
      <View style={styles.textBox}>
        <Text style={[styles.text, this.props.textStyle]}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#FF6700'
  },
  textBox: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    color: '#FFFFFF',
    fontSize: 14
  }
});
