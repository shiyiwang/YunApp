/**
 * 用户中心
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Iconfont from 'react-native-vector-icons/Iconfont';

import LoginComponent from '../Login/LoginComponent';
import SettingItem from '../Common/SettingItem';
import WalletComponent from './Wallet/WalletComponent';

const {width} = Dimensions.get('window');

class UserCenterComponent extends Component {
  constructor(props){
      super(props)
      this.handleLogin = this.handleLogin.bind(this);
      this.handleWallet = this.handleWallet.bind(this);
  }

  handleLogin() {
    this.props.navigator.push({component: LoginComponent});
  }

  handleWallet() {
    this.props.navigator.push({component: WalletComponent});
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.handleLogin}>
            <Image
              style={styles.face}
              source={{uri: 'http://static.yunipo.com/images/project/covers/20170316/58ca82cf30a62.jpg'}}
            />
            <Text style={styles.name}>龙哥</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.setButton}>
            <Iconfont name="setting" size={24} color='#777777'></Iconfont>
          </TouchableOpacity>
        </View>
        <View style={styles.chargeBox}>
          <View>
            <Text style={styles.chargeDesc}>可用余额(元)</Text>
            <Text style={styles.chargePrice}>100.00</Text>
          </View>
          <View>
            <Text>充值</Text>
          </View>
        </View>
        <View style={styles.setBox}>
          <SettingItem
            handlePress={this.handleWallet}
            title='钱包'
            iconName='wallet'
          />
          <SettingItem
            handlePress={() => console.log('click')}
            title='会员'
            desc='普通投资人'
            iconName='member'
          />
          <SettingItem
            handlePress={() => console.log('click')}
            title='预约'
            desc='暂无预约资格'
            iconName='order'
          />
          <SettingItem
            handlePress={() => console.log('click')}
            title='投资'
            iconName='invest'
          />
          <SettingItem
            handlePress={() => console.log('click')}
            title='分红'
            iconName='bonus'
            noBorder={true}
          />
        </View>
        <View style={styles.setBox}>
          <SettingItem
            handlePress={() => console.log('click')}
            title='消息'
            iconName='message'
            noBorder={true}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  header: {
    flex: 1,
    height: 140,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  face: {
    width: 66,
    height: 66,
    borderRadius: 33
  },
  name: {
    textAlign: 'center',
    fontSize: 15,
    color: '#666666',
    paddingTop: 8
  },
  setButton: {
    position: 'absolute',
    right: 15,
    top: 15
  },
  chargeBox: {
    flex: 1,
    height: 90,
    backgroundColor: '#fe8330',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  chargeDesc: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  chargePrice: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  setBox: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    marginTop: 10,
    paddingLeft: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
});

export default UserCenterComponent;
