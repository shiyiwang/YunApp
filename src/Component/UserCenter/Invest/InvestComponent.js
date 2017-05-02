/**
 * 投资主页面
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

import BackPageComponent from '../../Common/BackPageComponent'

class InvestComponent extends BackPageComponent {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.priceName}>投资金额（元）</Text>
          <Text style={styles.price}>47,973.00</Text>
        </View>
        <View style={styles.descBox}>
          <View style={styles.descItemBox}>
            <Text style={styles.descItemName}>参投计划(个)</Text>
            <Text style={styles.descItemNum}>8</Text>
            <View style={styles.descItemLine}></View>
          </View>
          <View style={styles.descItemBox}>
            <Text style={styles.descItemName}>最新估值(元)</Text>
            <Text style={styles.descItemNum}>47,973.00</Text>
          </View>
        </View>
        <View style={styles.contentBox}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentTitleText}>投资资产明细</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 20,
    borderColor: '#5067a3'
  },
  header: {
    height: 130,
    backgroundColor: '#5067a3',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255,255,255,0.4)'
  },
  priceName: {
    fontSize: 14,
    color: '#FFFFFF'
  },
  price: {
    marginTop: 10,
    fontSize: 36,
    color: '#FFFFFF'
  },
  descBox: {
    height: 90,
    backgroundColor: '#425993',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  descItemBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  descItemLine: {
    position: 'absolute',
    right: 5,
    top: -4,
    width: 0.5,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.4)'
  },
  descItemName: {
    fontSize: 14,
    color: '#FFFFFF'
  },
  descItemNum: {
    paddingTop: 2,
    fontSize: 28,
    color: '#FFFFFF'
  },
  contentBox: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#FFFFFF'
  },
  contentTitle: {
    height: 40,
    paddingLeft: 15,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9'
  },
  contentTitleText: {
    fontSize: 16,
    color: '#333333'
  }
})

export default InvestComponent
