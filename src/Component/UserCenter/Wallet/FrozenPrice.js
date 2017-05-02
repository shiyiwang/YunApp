/**
 * 冻结金额页面
 */
import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native'

import Iconfont from 'react-native-vector-icons/Iconfont';

import BackPageComponent from '../../Common/BackPageComponent'
import { naviGoBack } from '../../../Utils/CommonUtils';

const {width} = Dimensions.get('window');

const data = [
  {
    title: '提现冻结',
    price: 300.00,
    time: '2017-02-10 18:58',
    desc: '备注：中国农业银行 / ******120 / 王世一'
  },
  {
    title: '提现冻结',
    price: 100.00,
    time: '2017-02-10 18:58',
    desc: '备注：中国农业银行 / ******120 / 王世一'
  },
  {
    title: '提现冻结',
    price: 200.00,
    time: '2017-02-10 18:58',
    desc: '备注：中国农业银行 / ******120 / 王世一'
  }
]

class FrozenPrice extends BackPageComponent {
  constructor(props){
      super(props)
      this.handleBack = this.handleBack.bind(this)
  }

  handleBack() {
    const {navigator} = this.props

    if (navigator) {
      naviGoBack(navigator);
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={{height: 25, flex: 1, backgroundColor: 'rgba(255,255,255,0)', justifyContent: 'center', position: 'absolute', zIndex: 10, top: 0, right: 0, left: 0}}>
          <TouchableOpacity onPress={this.handleBack}>
            <Iconfont name="left-arrow" size={18} color='rgba(255,255,255,0.5)'></Iconfont>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.frozenDesc}>冻结金额(元)</Text>
          <Text style={styles.frozenPrice}>100.00</Text>
        </View>
        <ScrollView style={styles.itemBox}>
          {this._renderItem()}
        </ScrollView>
      </View>
    )
  }

  _renderItem() {
    let itemList = []

    data.map((item, i) => {
      itemList.push(
        <View style={styles.item} key={i}>
          <View style={styles.leftBox}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemTime}>{item.time}</Text>
            <Text style={styles.itemDesc}>{item.desc}</Text>
          </View>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
      )
    })

    return itemList
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 20,
    borderColor: '#3d9fa0'
  },
  header: {
    height: 110,
    backgroundColor: '#3d9fa0',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center'
  },
  frozenDesc: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  frozenPrice: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  itemBox: {
    flex: 1,
    paddingLeft: 15
  },
  item: {
    flex: 1,
    height: 90,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E9E9E9'
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333'
  },
  itemTime: {
    fontSize: 12,
    color: '#BBBBBB',
    lineHeight: 24
  },
  itemDesc: {
    fontSize: 12,
    color: '#666666',
    maxWidth: width * 0.75
  },
  itemPrice: {
    fontSize: 16,
    color: '#FF6700'
  }
})

export default FrozenPrice
