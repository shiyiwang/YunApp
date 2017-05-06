/**
 * Created by wangdi on 13/11/16.
 */
import React,{Component} from 'react'
import {
 View,
 StyleSheet,
 WebView,
 ActivityIndicator,
 Dimensions
} from 'react-native'
import BackPageComponent from './BackPageComponent';
import CommonLoading from './Loading'

const {width, height} = Dimensions.get('window');

export default class WebViewPage extends BackPageComponent{
  static navigationOptions = {
    header: null
  }

  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <WebView
          source={{uri: "http://m.yunipo.com/activity/dividendshare?shareuserid=1&projectid=95"}}
          style={styles.webView}
          javaScriptEnabled={true}
          scalesPageToFit={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  webView: {
    flex: 1
  }
});
