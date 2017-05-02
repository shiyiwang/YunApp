/**
 * 预约页面
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

import BackPageComponent from '../../Common/BackPageComponent'

class OrderComponent extends BackPageComponent {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.noRecordText}>无预约记录</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    borderTopWidth: 20,
    borderColor: '#F2F2F2',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  noRecordText: {
    fontSize: 14,
    color: '#999999'
  }
})

export default OrderComponent
