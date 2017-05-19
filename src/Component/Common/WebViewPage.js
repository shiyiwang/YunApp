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
import CommonLoading from './Loading'

const {width, height} = Dimensions.get('window');

export default class WebViewPage extends Component{
  static navigationOptions = {
    title: '分红',
    headerStyle: {backgroundColor: '#FF6700', shadowOpacity: 0, elevation: 0},
    headerTintColor: '#FFFFFF'
  }

  constructor(props){
      super(props)
      this.state = {
      }
  }

  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <WebView
          source={{uri: "http://m.yunipo.com/activity/dividendshare?shareuserid=1&projectid=94"}}
          scalesPageToFit={true}
          javaScriptEnabled={true}
          automaticallyAdjustContentInsets={true}
        />
      </View>
    );
  }

  _renderLoading(){
    return(
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={'#FF6700'} size="large"/>
      </View>
    );
}
}

const styles = StyleSheet.create({
  webView: {
    flex: 1
  }
});
