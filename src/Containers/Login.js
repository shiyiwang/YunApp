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
  TouchableOpacity
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Sae, Hideo, Kohana } from 'react-native-textinput-effects';

import CustomerTabBar from '../Component/Login/CustomerTabBar';

class Login extends Component {
  constructor(props){
      super(props)
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../img/yunipoLogo.png')} style={styles.logo} />
        </View>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <CustomerTabBar />}
          >
          <View tabLabel="登录" style={styles.tabView}>
            <View style={styles.form}>
              <Kohana
                onChangeText={(text) => { console.log(text) }}
                style={[styles.input, { backgroundColor: '#f9f5ed' }]}
                label={'请输入手机号'}
                iconClass={Icon}
                iconName={'mobile'}
                iconColor={'#FF6700'}
                labelStyle={{ color: '#999999', fontSize: 14 }}
                inputStyle={{ color: '#666666', fontSize: 14 }}
              />
              <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={{fontSize: 14, color: '#FFFFFF'}}>下一步</Text>
              </TouchableOpacity>
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
    padding: 15,
    height: 150
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

export default Login;
