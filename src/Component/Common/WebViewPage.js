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
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <WebView
          source={{uri: "http://m.yunipo.com/activity/dividendshare?shareuserid=1&projectid=95"}}
          style={styles.webView}
          scalesPageToFit={true}
          javaScriptEnabled={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  webView: {
    width: width,
    height: height
  }
});
