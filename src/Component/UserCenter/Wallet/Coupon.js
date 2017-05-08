/**
 * 优惠券
 */
import React,{Component} from 'react'
import {
  View,
  ScrollView,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native'

import Modal from 'react-native-modal';

import BackPageComponent from '../../Common/BackPageComponent'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CouponTabBar from './CouponTabBar';
import TicketItem from './TicketItem'
import Button from '../../Common/Button'

const {height, width} = Dimensions.get('window');

const data = {
  unused: [
    {price: '3000', priceDesc: '现金抵扣券', time: '2017-10-17 00:00:00', desc: '投资10万抵扣3000元', type: 'cash', status: 'unused'},
    {price: '100', priceDesc: '现金抵扣券', time: '2017-10-17 00:00:00', desc: '投资1万抵扣100元', type: 'cash', status: 'unused'},
    {price: '', priceDesc: '免费提现劵', time: '2017-10-17 00:00:00', desc: '可用于免费提现一次', type: 'free', status: 'unused'},
  ],
  used: [
    {price: '3000', priceDesc: '现金抵扣券', time: '2017-10-17 00:00:00', desc: '投资10万抵扣3000元', status: 'used'},
    {price: '', priceDesc: '免费提现劵', time: '2017-10-17 00:00:00', desc: '可用于免费提现一次', type: 'free', status: 'used'},
  ],
  expire: [
    {price: '100', priceDesc: '现金抵扣券', time: '2017-10-17 00:00:00', desc: '投资1万抵扣100元', status: 'expire'},
    {price: '', priceDesc: '免费提现劵', time: '2017-10-17 00:00:00', desc: '可用于免费提现一次', type: 'free', status: 'expire'},
    {price: '300', priceDesc: '现金抵扣券', time: '2017-10-17 00:00:00', desc: '投资1万抵扣300元', status: 'expire'},
    {price: '200', priceDesc: '现金抵扣券', time: '2017-10-17 00:00:00', desc: '投资1万抵扣200元', status: 'expire'}
  ]
}

class Coupon extends BackPageComponent {
  static navigationOptions = {
    title: '优惠券',
    headerStyle: {backgroundColor: '#FF6700'},
    headerTintColor: '#FFFFFF'
  }

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      isModalVisible: false,
      text: null,
      unusedDataSource: ds.cloneWithRows(data.unused),
      usedDataSource: ds.cloneWithRows(data.used),
      expireDataSource: ds.cloneWithRows(data.expire)
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
            <ListView
              style={styles.contentList}
              dataSource={this.state.unusedDataSource}
              renderRow={this._renderRow.bind(this)}
            />
          </View>
          <View tabLabel="已使用" style={styles.cardBox}>
            <ListView
              style={styles.contentList}
              dataSource={this.state.usedDataSource}
              renderRow={this._renderRow.bind(this)}
            />
          </View>
          <View tabLabel="已过期" style={styles.cardBox}>
            <ListView
              style={styles.contentList}
              dataSource={this.state.expireDataSource}
              renderRow={this._renderRow.bind(this)}
            />
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

  _renderRow(rowData, sectionID) {
    return (
      <TicketItem
        price={rowData.price}
        priceDesc={rowData.priceDesc}
        time={rowData.time}
        desc={rowData.desc}
        type={rowData.type}
        status={rowData.status}
        key={sectionID}
        onPress={this._giveTicket.bind(this)}
      />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
