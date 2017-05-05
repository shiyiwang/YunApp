/**
 * 添加银行卡
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions
} from 'react-native'

import BackPageComponent from '../../Common/BackPageComponent'
import Button from '../../Common/Button'
import SelectBankModal from '../../Common/SelectBankModal'
import { naviGoBack } from '../../../Utils/CommonUtils';

const {width} = Dimensions.get('window');

class AddBankCard extends BackPageComponent {
  constructor(props){
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.state = {
      bank: '',
      cardNum: '',
      userName: '吴家龙'
    }
  }

  handleAdd() {
    const {navigator} = this.props

    if (navigator) {
      naviGoBack(navigator);
    }
  }

  render(){
    let index = 0;
    const data = [
        { key: index++, section: true, label: '请选择银行' },
        { key: index++, label: '中国农业银行' },
        { key: index++, label: '中国建设银行' },
        { key: index++, label: '中国银行' },
        { key: index++, label: '中信银行' },
        { key: index++, label: '中国农业银行' },
        { key: index++, label: '中国建设银行' },
        { key: index++, label: '中国银行' },
        { key: index++, label: '中信银行' },
        { key: index++, label: '中国农业银行' },
        { key: index++, label: '中国建设银行' },
        { key: index++, label: '中国银行' },
        { key: index++, label: '中信银行' }
    ];
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.formItem}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>银   行</Text>
            </View>
            <View style={styles.inputBox}>
              <SelectBankModal
                data={data}
                initValue="请选择银行"
                optionStyle={{padding: 12}}
                onChange={(option)=>{ this.setState({bank:option.label})}}>
                <TextInput
                    style={{height: 25, width: 0.8 * width,fontSize: 16, color: '#333333'}}
                    editable={false}
                    placeholder="请选择银行"
                    value={this.state.bank} />
                </SelectBankModal>
            </View>
          </View>
          <View style={styles.formItem}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>卡   号</Text>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInput}
                onChangeText={(cardNum) => this.setState({cardNum})}
                value={this.state.cardNum}
                placeholder='请输入银行卡号'
              />
            </View>
          </View>
          <View style={styles.formItem}>
            <View style={styles.labelBox}>
              <Text style={styles.label}>姓   名</Text>
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInput}
                onChangeText={(userName) => this.setState({userName})}
                value={this.state.userName}
                editable={false}
                placeholder='请输入姓名'
              />
            </View>
          </View>
        </View>
        <View style={styles.tipBox}>
          <Text style={styles.tip}>可在个人中心 - 银行卡栏目编辑已添加的银行卡信息</Text>
        </View>
        <View style={styles.btnBox}>
          <Button
            text="确认添加"
            textStyle={{color: '#FFFFFF', fontSize: 16}}
            onPress={this.handleAdd}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F2F2F2'
  },
  form: {
    backgroundColor: '#FFFFFF'
  },
  formItem: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    borderStyle: 'solid'
  },
  labelBox: {
    height: 25,
    width: 0.2 * width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontSize: 16,
    lineHeight: 16,
    color: '#333333'
  },
  inputBox: {
    width: 0.8 * width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    height: 25,
    width: 0.8 * width,
    fontSize: 16,
    color: '#333333'
  },
  tipBox: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tip: {
    fontSize: 14,
    color: '#999999'
  },
  btnBox: {
    paddingLeft: 15,
    paddingRight: 15
  }
})

export default AddBankCard
