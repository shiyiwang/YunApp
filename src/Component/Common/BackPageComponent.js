/**
 * 安卓返回键处理
 */
import React, {Component} from 'react';
import {BackAndroid} from 'react-native';

export default class BackPageComponent extends Component{
  constructor(props){
    super(props);
    this.handleBack = this._handleBack.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
  }

  _handleBack() {
    const navigator = this.props.navigator;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop()
      return true;
    }
    return false;
  }
}
