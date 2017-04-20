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
        <TouchableNativeFeedback
          onPress={this.props.onPress}>
          {this._renderContent()}
        </TouchableNativeFeedback>
      );
    }else if(Platform.OS === 'ios'){
      return(
        <TouchableOpacity style={{flex: 1}}
          activeOpacity={0.5}
          onPress={this.props.onPress}>
          {this._renderContent()}
        </TouchableOpacity>
      );
    }
  }

  _renderContent(){
    return(
      <View style={[styles.container, this.props.btnStyle]}>
        <Text style={[styles.text, this.props.textStyle]}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    backgroundColor: '#FF6700',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 3
  },
  text:{
    color: 'white',
    fontSize: 14
  }
});
