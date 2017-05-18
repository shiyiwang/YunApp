/**
 * 注册模块
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import { Kohana } from 'react-native-textinput-effects'
import Button from '../Common/Button'
import TimerButton from '../Common/TimerButton'
import CheckBox from '../Common/CheckBox'
import ToastUtils from '../../Utils/ToastUtils'

const {width} = Dimensions.get('window');

class RegComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      timerButton: true,
      isChecked: true,
      mobile: '',
      sms_code: '',
      password: '',
      repassword: ''
    }
  }

  showRule() {

  }

  reg() {

  }

  forgetPass() {
    console.log('into forgetPass')
  }

  wechatLogin() {
    console.log('into wechatLogin')
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={{height: 45, marginTop: 5, marginBottom: 5}}>
            <Kohana
              onChangeText={(mobile) => this.setState({mobile})}
              style={[styles.input, { backgroundColor: '#f9f5ed' }]}
              label={'请输入手机号'}
              iconClass={Icon}
              iconName={'mobile'}
              iconColor={'#FF6700'}
              labelStyle={{ color: '#999999', fontSize: 14, marginTop: -2}}
              inputStyle={{ color: '#666666', fontSize: 14}}
            />
          </View>
          <View style={{height: 45, marginTop: 5, marginBottom: 5}}>
            <Kohana
              onChangeText={(sms_code) => this.setState({sms_code})}
              style={[styles.input, { backgroundColor: '#f9f5ed' }]}
              label={'请输入验证码'}
              iconClass={Icon}
              iconName={'envelope'}
              iconColor={'#FF6700'}
              iconSize={20}
              secureTextEntry={true}
              labelStyle={{ color: '#999999', fontSize: 14, marginTop: -2}}
              inputStyle={{ color: '#666666', fontSize: 14 }}
            />
            <View style={{position: 'absolute', top: 4, right: 0, height: 40, width: 110}}>
              <TimerButton
                enable={this.state.timerButton}
                textStyle={{color: '#FFFFFF'}}
                timerCount={60}
                onClick={(shouldStartCountting)=>{
                  if (this.state.mobile.length != 11) {
                    ToastUtils.showShort('请输入正确的手机号')
                    shouldStartCountting && shouldStartCountting(false)
                  }else {
                    ToastUtils.showShort('短信已发送')
                    shouldStartCountting && shouldStartCountting(true)
                  }
                }}/>
            </View>
          </View>
          <View style={{height: 45, marginTop: 5, marginBottom: 5}}>
            <Kohana
              onChangeText={(password) => this.setState({password})}
              style={[styles.input, {backgroundColor: '#f9f5ed'}]}
              label={'请设置登录密码'}
              iconClass={Icon}
              iconName={'lock'}
              iconColor={'#FF6700'}
              secureTextEntry={true}
              labelStyle={{ color: '#999999', fontSize: 14, marginTop: -2}}
              inputStyle={{ color: '#666666', fontSize: 14}}
            />
          </View>
          <View style={{height: 45, marginTop: 5, marginBottom: 5}}>
            <Kohana
              onChangeText={(repassword) => this.setState({repassword})}
              style={[styles.input, {backgroundColor: '#f9f5ed'}]}
              label={'请确认登录密码'}
              iconClass={Icon}
              iconName={'lock'}
              iconColor={'#FF6700'}
              secureTextEntry={true}
              labelStyle={{ color: '#999999', fontSize: 14, marginTop: -2}}
              inputStyle={{ color: '#666666', fontSize: 14}}
            />
          </View>
          <View style={{height: 25, marginTop: 5, marginBottom: 5, flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              label='我已认真阅读并同意'
              checked={true}
              onChange={(isChecked) => this.setState({isChecked})}
              />
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={this.showRule.bind(this)}
                >
                <Text style={{fontSize: 13, color: '#2072b2'}}>《云岸金服服务协议》</Text>
              </TouchableOpacity>
          </View>
          <Button
            text="注册"
            btnStyle={{marginTop: 20}}
            textStyle={{fontSize: 16}}
            onPress={this.reg.bind(this)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  form: {
    flex: 1,
    padding: 20,
    width: 0.95 * width
  },
  input: {
    marginTop: 4,
  }
})

export default RegComponent
