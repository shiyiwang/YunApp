/**
 * 优惠券
 */
import React,{Component} from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native'

import Modal from 'react-native-modal';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import CouponTabBar from './CouponTabBar';
import TicketItem from './TicketItem'
import Button from '../../Common/Button'

const {height, width} = Dimensions.get('window');

class Coupon extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
      text: null,
      unused: [
        {price: '3000', priceDesc: '现金抵扣券', time: '2017-10-17 00:00:00', desc: '投资10万抵扣3000元', type: 'cash'},
        {price: '100', priceDesc: '现金抵扣券', time: '2017-10-17 00:00:00', desc: '投资1万抵扣100元', type: 'cash'},
        {price: '', priceDesc: '免费提现劵', time: '2017-10-17 00:00:00', desc: '可用于免费提现一次', type: 'free'},
      ],
      used: [
        {price: '3000', priceDesc: '现金抵扣券', time: '2017-10-17 00:00:00', desc: '投资10万抵扣3000元'},
        {price: '', priceDesc: '免费提现劵', time: '2017-10-17 00:00:00', desc: '可用于免费提现一次', type: 'free'},
      ],
      expire: [
        {price: '100', priceDesc: '现金抵扣券', time: '2017-10-17 00:00:00', desc: '投资1万抵扣100元'},
        {price: '', priceDesc: '免费提现劵', time: '2017-10-17 00:00:00', desc: '可用于免费提现一次', type: 'free'},
        {price: '300', priceDesc: '现金抵扣券', time: '2017-10-17 00:00:00', desc: '投资1万抵扣300元'},
        {price: '200', priceDesc: '现金抵扣券', time: '2017-10-17 00:00:00', desc: '投资1万抵扣200元'}
      ]
    }
  }

  setModalVisible(visible) {
    this.setState({isModalVisible: visible});
  }

  _giveTicket() {
      Alert.alert(
        '温馨提示',
        '请输入正确的手机号码！'
      )
  }

  render(){
    return (
      <View style={styles.container}>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <CouponTabBar />}
          >
          <View tabLabel="未使用" style={styles.cardBox}>
            <ScrollView>
              {
                this.state.unused.map((item, index) => {
                  return (
                    <TicketItem
                      price={item.price}
                      priceDesc={item.priceDesc}
                      time={item.time}
                      desc={item.desc}
                      type={item.type}
                      onPress={() => {this.setModalVisible(true)}}
                      key={index}
                    />
                  )
                })
              }
            </ScrollView>
          </View>
          <View tabLabel="已使用" style={styles.cardBox}>
            <ScrollView>
              {
                this.state.used.map((item, index) => {
                  return (
                    <TicketItem
                      price={item.price}
                      priceDesc={item.priceDesc}
                      time={item.time}
                      desc={item.desc}
                      type={item.type}
                      status='used'
                      key={index}
                    />
                  )
                })
              }
            </ScrollView>
          </View>
          <View tabLabel="已过期" style={styles.cardBox}>
            <ScrollView>
              {
                this.state.expire.map((item, index) => {
                  return (
                    <TicketItem
                      price={item.price}
                      priceDesc={item.priceDesc}
                      time={item.time}
                      desc={item.desc}
                      type={item.type}
                      status='expire'
                      key={index}
                    />
                  )
                })
              }
            </ScrollView>
          </View>
        </ScrollableTabView>
        <Modal isVisible={this.state.isModalVisible} style={{alignItems: 'center', justifyContent: 'center', borderRadius: 3}}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>优惠券赠送</Text>
              <TouchableOpacity style={styles.closeBtn} onPress={() => {this.setModalVisible(false)}}>
                <Text style={{color: '#999999'}}>X</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={{height: 36, borderColor: '#CCCCCC', paddingLeft: 15, borderWidth: 1, marginTop: 15, fontSize: 14, marginBottom: 20}}
              onChangeText={(text) => this.setState({text})}
              maxLength = {11}
              placeholder='请输入好友手机号码'
              value={this.state.text}
            />
            <View style={{width: 100, height: 35}}>
              <Button
                text="确定"
                btnStyle={{width: 100, height: 35}}
                textStyle={{color: '#FFFFFF', fontSize: 14}}
                onPress={this._giveTicket}
              />
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 20,
    borderTopColor: '#FFFFFF',
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardBox: {
    flex: 1,
    alignItems: 'center'
  },
  modalContent: {
    width: 0.85 * width,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.85 * width,
    height: 30,
  },
  modalHeaderText: {
    fontSize: 14,
    color: '#333333'
  },
  closeBtn: {
    position: 'absolute',
    right: 7,
    top: 7
  }
})

export default Coupon
