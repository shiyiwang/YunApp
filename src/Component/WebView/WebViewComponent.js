/**
 * 首页
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  WebView,
  Dimensions
} from 'react-native';

const url = "http://m.yunipo.com";
const WEBVIEW_REF = "WEBVIEW";
const {width, height} = Dimensions.get('window');

class WebViewComponent extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={{width:width,height:height}}
          style={styles.webView}
          source={{uri: url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={true}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  webView: {
    height: height,
    width: width
  }
});

export default WebViewComponent;
