/**
 * 积分页面
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions
} from 'react-native'

import BackPageComponent from '../../Common/BackPageComponent'
import Button from '../../Common/Button'

const {width} = Dimensions.get('window');

const data = [
  {
    title: '增加',
    price: '5 分',
    time: '2017-02-10 18:58',
    desc: '备注：【 双子星-千宙】提前付款赠送积分'
  },
  {
    title: '减少',
    price: '-3 分',
    time: '2017-02-10 18:58',
    desc: '备注：兑换礼品消费3积分'
  },
  {
    title: '减少',
    price: '-3 分',
    time: '2017-02-10 18:58',
    desc: '备注：兑换礼品消费3积分'
  },
  {
    title: '增加',
    price: '36 分',
    time: '2017-02-10 18:58',
    desc: '备注：通过2016个人年报领取'
  },
]

class Score extends BackPageComponent {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.scoreTitle}>我的积分</Text>
          <Text style={styles.score}>33</Text>
          <Button
            text="积分商城"
            btnStyle={{backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 10, width: 70, height: 22}}
            textStyle={{color: '#fff71b', fontSize: 12}}
            onPress={() => console.log('btn click')}
          />
          <View style={styles.scoreRuleBtn}>
            <Button
              text="积分规则"
              btnStyle={{backgroundColor: 'rgba(255,255,255,0)'}}
              textStyle={{color: '#FFFFFF', fontSize: 12}}
              onPress={() => console.log('btn click')}
            />
          </View>
        </View>
        <View style={styles.itemHeader}>
          <View style={styles.itemHeaderTextBox}>
            <Text style={styles.itemHeaderText}>积分明细</Text>
          </View>
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
      let priceStyle = item.title === '减少' ? {color: '#333333'} : {}
      itemList.push(
        <View style={styles.item} key={i}>
          <View style={styles.leftBox}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemTime}>{item.time}</Text>
            <Text style={styles.itemDesc}>{item.desc}</Text>
          </View>
          <Text style={[styles.itemPrice, priceStyle]}>{item.price}</Text>
        </View>
      )
    })

    return itemList
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    height: 160,
    paddingTop: 45,
    backgroundColor: '#5ba143',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scoreTitle: {
    fontSize: 14,
    color: '#FFFFFF'
  },
  score: {
    fontSize: 36,
    color: '#FFFFFF',
    marginBottom: 15,
    marginTop: 5
  },
  scoreRuleBtn: {
    position: 'absolute',
    top: 10,
    right: 20
  },
  itemBox: {
    flex: 1,
    paddingLeft: 15
  },
  itemHeader: {
    height: 40,
    paddingLeft: 15
  },
  itemHeaderTextBox: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e9e9e9',
    justifyContent: 'center'
  },
  itemHeaderText: {
    fontSize: 14,
    color: '#333333'
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

export default Score
