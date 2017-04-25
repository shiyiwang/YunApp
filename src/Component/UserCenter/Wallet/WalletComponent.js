/**
 * 钱包页面
 */
import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions
} from 'react-native'

import SettingItem from '../../Common/SettingItem';
import Button from '../../Common/Button';
import FrozenPrice from './FrozenPrice';
import Bill from './Bill';
import Score from './Score';
import Coupon from './Coupon';

const {height} = Dimensions.get('window');

class WalletComponent extends Component {
  constructor(props){
      super(props)
      this.handleFrozenPrice = this.handleFrozenPrice.bind(this);
      this.handleBill        = this.handleBill.bind(this);
      this.handleCoupon      = this.handleCoupon.bind(this);
      // this.handleBankCard    = this.handleBankCard.bind(this);
      this.handleScore       = this.handleScore.bind(this);
  }

  handleFrozenPrice() {
    this.props.navigator.push({component: FrozenPrice});
  }

  handleBill() {
    this.props.navigator.push({component: Bill});
  }

  handleCoupon() {
    this.props.navigator.push({component: Coupon});
  }

  handleScore() {
    this.props.navigator.push({component: Score});
  }

  render(){
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
              handlePress={this.handleFrozenPrice}
              title='冻结金额'
            />
            <SettingItem
              handlePress={this.handleBill}
              title='对账单'
              noBorder={true}
            />
          </View>
          <View style={styles.setBox}>
            <SettingItem
              handlePress={this.handleCoupon}
              title='优惠券'
              desc='2 张'
            />
            <SettingItem
              handlePress={() => console.log('click')}
              title='银行卡'
            />
            <SettingItem
              handlePress={this.handleScore}
              title='积分'
              desc='41484'
              noBorder={true}
            />
          </View>
          <View style={styles.bottomMenu}>
            <Button
              text='充值'
              btnStyle={{backgroundColor: '#FFFFFF', borderRadius: 0, borderRightWidth: 1, borderColor: '#DDDDDD'}}
              textStyle={{color: '#FF6700', fontSize: 16}}
              onPress={() => console.log('btn click')}
            />
            <Button
              text='提现'
              btnStyle={{backgroundColor: '#FFFFFF', borderRadius: 0}}
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
    backgroundColor: '#F2F2F2',
    borderTopWidth: 20,
    borderColor: '#fe8330'
  },
  header: {
    height: 120,
    backgroundColor: '#fe8330',
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

export default WalletComponent
