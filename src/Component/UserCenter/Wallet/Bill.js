/**
 * 对账单页面
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

import {Select, Option} from "react-native-chooser";

import BackPageComponent from '../../Common/BackPageComponent'

class Bill extends BackPageComponent {
  static navigationOptions = {
    title: '对账单'
  }

  constructor(props){
      super(props)
      this.onSelect = this.onSelect.bind(this);
  }

  onSelect() {

  }

  render(){
    return (
      <View style={styles.container}>
        <Select
            onSelect = {this.onSelect}
            defaultText  = "全部"
            style = {{ borderBottomWidth : 1, borderBottomColor : "#DDDDDD"}}
            textStyle = {{}}
            optionListStyle = {{backgroundColor : "#DDDDDD"}}
          >
          <Option value = "全部">全部</Option>
          <Option value = "项目投资">项目投资</Option>
          <Option value = "云+转让">云+转让</Option>
          <Option value = "充值">充值</Option>
          <Option value = "提现">提现</Option>
        </Select>
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

export default Bill
