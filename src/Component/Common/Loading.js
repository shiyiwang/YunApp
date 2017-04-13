/**
 * 通用加载模块
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

class CommonLoading extends Component {
  render(){
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.indicator} color='#ff6700' size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicator: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  }
})

export default CommonLoading
