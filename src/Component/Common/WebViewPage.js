import React,{Component} from 'react'
import {
 View,
 StyleSheet,
 WebView,
 ActivityIndicator,
 Dimensions
} from 'react-native'

import AutoHeightWebView from './AutoHeightWebView'

const {width} = Dimensions.get('window');

export default class WebViewPage extends Component{
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title || '',
    headerStyle: {backgroundColor: '#FF6700', shadowOpacity: 0, elevation: 0},
    headerTintColor: '#FFFFFF'
  })

  constructor(props){
      super(props)
      this.state = {
      }
  }

  render(){
    const { params } = this.props.navigation.state
    return(
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <WebView
          source={{uri: params.url || "http://m.yunipo.com/activity/dividendshare?shareuserid=1&projectid=94"}}
          scalesPageToFit={true}
          width={width}
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
