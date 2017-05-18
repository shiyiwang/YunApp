/**
 * 登录模块
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  AlertIOS
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { Kohana } from 'react-native-textinput-effects';
import Button from '../Common/Button';

const {width} = Dimensions.get('window');

class LoginComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      user_name: '',
      password: '',
    }
  }

  login() {
    fetch('https://www.yunipo.com/weixin/index', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({
        user_name: this.state.user_name,
        password: this.state.password,
        action: 'login'
      })
    })
    .then((response) => response.json())
    .then((json) => {
      AlertIOS.alert('提示信息', json.info);
    })
    .catch((error) => {
      console.error(error)
    })
  }

  wechatLogin() {
    console.log('into wechatLogin')
  }

  render(){
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={{height: 45, marginTop: 5, marginBottom: 5}}>
            <Kohana
              onChangeText={(user_name) => this.setState({user_name})}
              style={[styles.input, { backgroundColor: '#f9f5ed' }]}
              label={'请输入手机号'}
              iconClass={Icon}
              iconName={'mobile'}
              iconColor={'#FF6700'}
              labelStyle={{ color: '#999999', fontSize: 14, marginTop: -2}}
              inputStyle={{ color: '#666666', fontSize: 14, padding: 0}}
              keyboardType={'numeric'}
              maxLength={11}
            />
          </View>
          <View style={{height: 45, marginTop: 5, marginBottom: 5}}>
            <Kohana
              onChangeText={(password) => this.setState({password})}
              style={[styles.input, { backgroundColor: '#f9f5ed' }]}
              label={'请输入密码'}
              iconClass={Icon}
              iconName={'lock'}
              iconColor={'#FF6700'}
              secureTextEntry={true}
              labelStyle={{ color: '#999999', fontSize: 14, marginTop: -2}}
              inputStyle={{ color: '#666666', fontSize: 14, padding: 0}}
            />
          </View >
          <View style={{height: 30, marginTop: 5, alignItems: 'flex-end', justifyContent: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('ForgetPass')}
              >
              <Text style={{fontSize: 14, color: '#666666'}}>忘记密码？</Text>
            </TouchableOpacity>
          </View>
          <Button
            text="登录"
            btnStyle={{marginTop: 20}}
            textStyle={{fontSize: 16}}
            onPress={this.login.bind(this)}
          />
        </View>
        <View style={styles.otherLoginBox}>
          <View style={styles.boxLine}></View>
          <Text style={styles.boxTitle}>使用其他社交账号登录</Text>
          <View style={styles.otherLoginBtns}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={this.wechatLogin.bind(this)}
              >
              <Icon name="weixin" size={24} color='#FF6700'></Icon>
            </TouchableOpacity>
          </View>
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
    padding: 0,
    marginTop: 4,
  },
  otherLoginBox: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  boxLine: {
    position: 'absolute',
    top: 7,
    height: 1,
    width: 0.8 * width,
    backgroundColor: '#D8D8D8'
  },
  boxTitle: {
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#999999',
    textAlign: 'center'
  },
  otherLoginBtns: {
    paddingTop: 10
  },
})

export default LoginComponent
