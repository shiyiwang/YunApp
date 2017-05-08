/**
 * 钱包页面
 */
import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  StatusBar
} from 'react-native'

import BackPageComponent from '../../Common/BackPageComponent'
import SettingItem from '../../Common/SettingItem';
import Button from '../../Common/Button';

const {height} = Dimensions.get('window');

class WalletPage extends BackPageComponent {
  static navigationOptions = {
    title: '钱包',
    headerStyle: {backgroundColor: '#FF6700', shadowOpacity: 0},
    headerTintColor: '#FFFFFF'
  }

  constructor(props){
      super(props)
  }

  componentWillMount() {
    StatusBar.setBarStyle('light-content')
  }

  render(){
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.chargeDesc}>可用余额(元)</Text>
          <Text style={styles.chargePrice}>100.00</Text>
          <Text style={styles.chargeDesc}>冻结余额(元)：500.00</Text>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.setBox}>
            <SettingItem
              handlePress={() => navigation.navigate('FrozenPrice')}
              title='冻结金额'
            />
            <SettingItem
              handlePress={() => navigation.navigate('Bill')}
              title='对账单'
              noBorder={true}
            />
          </View>
          <View style={styles.setBox}>
            <SettingItem
              handlePress={() => navigation.navigate('Coupon')}
              title='优惠券'
              desc='2 张'
            />
            <SettingItem
              handlePress={() => navigation.navigate('BankCard')}
              title='银行卡'
            />
            <SettingItem
              handlePress={() => navigation.navigate('Score')}
              title='积分'
              desc='41484'
              noBorder={true}
            />
          </View>
          <View style={styles.bottomMenu}>
            <Button
              text='充值'
              btnStyle={{flex: 1, backgroundColor: '#FFFFFF', borderRadius: 0, borderRightWidth: 1, borderColor: '#DDDDDD'}}
              textStyle={{color: '#FF6700', fontSize: 16}}
              onPress={() => console.log('btn click')}
            />
            <Button
              text='提现'
              btnStyle={{flex: 1, backgroundColor: '#FFFFFF', borderRadius: 0}}
              textStyle={{color: '#FF6700', fontSize: 16}}
              onPress={() => console.log('btn click')}
            />
          </View>
        </View>
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
    height: 110,
    backgroundColor: '#FF6700',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center'
  },
  chargeDesc: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  chargePrice: {
    fontSize: 38,
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
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    height: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})

export default WalletPage
