/**
 * 登录页面
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  AlertIOS,
  ActivityIndicator
} from 'react-native';

import { connect } from 'dva'

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Sae, Hideo, Kohana } from 'react-native-textinput-effects';

import CustomerTabBar from '../Component/Login/CustomerTabBar';
import Button from '../Component/Common/Button';

import { createAction, NavigationActions } from '../Utils'

class Login extends Component {
  constructor(props){
      super(props)
      this.state = {
        user_name: '',
        password: ''
      }
  }

  login(type) {
    console.log('into login')
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
        action: type ? type : 'login'
      })
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      // AlertIOS.alert('提示信息', json.info);
    })
    .catch((error) => {
      console.error(error)
    })
  }

  load() {
    // fetch('http://m.yunipo.com/index/getIndexAd', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'X-Requested-With': 'XMLHttpRequest'
    //   },
    //   body: JSON.stringify({
    //   })
    // })
    // .then((response) => response.json())
    // .then((json) => {
    //   console.log(json)
    // })
    // .catch((error) => {
    //   console.error(error)
    // })
    this.props.dispatch(createAction('app/login')())
    console.log(this.props);
  }

  onClose = () => {
    this.props.dispatch(NavigationActions.back())
  }

  render() {
    const { navigation, fetching } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../img/yunipoLogo.png')} style={styles.logo} />
        </View>
        <View style={{position: 'absolute', top: 20, right: 20}}>
          <Button
            text="X"
            btnStyle={{backgroundColor: 'transparent'}}
            textStyle={{color: '#999999', fontSize: 16}}
            onPress={this.onClose.bind(this)}
          />
        </View>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <CustomerTabBar />}
          >
          <View tabLabel="登录" style={styles.tabView}>
            <View style={styles.form}>
              <View style={{height: 45}}>
                <Kohana
                  onChangeText={(user_name) => this.setState({user_name})}
                  style={[styles.input, { backgroundColor: '#f9f5ed' }]}
                  label={'请输入手机号'}
                  iconClass={Icon}
                  iconName={'mobile'}
                  iconColor={'#FF6700'}
                  labelStyle={{ color: '#999999', fontSize: 14, marginTop: -4}}
                  inputStyle={{ color: '#666666', fontSize: 14}}
                />
              </View>
              <View style={{height: 45, marginTop: 10}}>
                <Kohana
                  onChangeText={(password) => this.setState({password})}
                  style={[styles.input, { backgroundColor: '#f9f5ed' }]}
                  label={'请输入密码'}
                  iconClass={Icon}
                  iconName={'lock'}
                  iconColor={'#FF6700'}
                  secureTextEntry={true}
                  labelStyle={{ color: '#999999', fontSize: 14, marginTop: -4}}
                  inputStyle={{ color: '#666666', fontSize: 14 }}
                />
              </View >

              <View style={{height:40}}>
                <Button
                  text="登录"
                  btnStyle={{backgroundColor: '#FF6700', marginTop: 15}}
                  textStyle={{color: '#FFFFFF', fontSize: 16}}
                  onPress={this.login.bind(this, 'login')}
                />
              </View>
              <View style={{flex: 1, paddingTop: 15}}>
                  <Button
                    text={fetching ? '操作中' : '检测是否登录'}
                    btnStyle={{backgroundColor: '#FF6700'}}
                    textStyle={{color: '#FFFFFF', fontSize: 16}}
                    onPress={this.load.bind(this)}
                  />
              </View>
            </View>
          </View>
          <View tabLabel="注册" style={styles.tabView}>
            <View style={styles.form}>
              <Kohana
                onChangeText={(text) => { console.log(text) }}
                style={[styles.input, { backgroundColor: '#f9f5ed' }]}
                label={'请输入手机号'}
                iconClass={Icon}
                iconName={'phone'}
                iconColor={'#FF6700'}
                labelStyle={{ color: '#999999', fontSize: 14 }}
                inputStyle={{ color: '#666666', fontSize: 14 }}
              />
              <TouchableOpacity style={styles.button}>
                <Text style={{fontSize: 14, color: '#FFFFFF'}}>注册</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  header: {
    height: 140,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 143,
    height: 47
  },
  tabView: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  form: {
    padding: 15
  },
  input: {
    marginTop: 4,
  },
  button: {
    marginTop: 30,
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6700',
    borderRadius: 3
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
});

function mapState (state) {
  return ({ app }) => ({ ...app })
}

const RootLogin = connect(mapState)(Login);

export default RootLogin
