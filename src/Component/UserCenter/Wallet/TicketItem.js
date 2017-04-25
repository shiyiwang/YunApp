/**
 * 优惠券Item
 */
import React,{Component, PropTypes} from 'react'
import {
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native'

import Iconfont from 'react-native-vector-icons/Iconfont';

import Button from '../../Common/Button'

const {width} = Dimensions.get('window');

class TicketItem extends Component {
  static propTypes = {
    price: PropTypes.string,
    priceDesc: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    time: PropTypes.string,
    status: PropTypes.string,
    type: PropTypes.string,
    onPress: PropTypes.func
  };

  render(){
    return (
      <View style={styles.couponCard}>
        <View style={styles.pointLine}></View>
        <View style={styles.topPoint}></View>
        <View style={styles.bottomPoint}></View>
        <View style={styles.infoBox}>
          {this._renderLeftInfo()}
          <View style={styles.rightInfo}>
            <View>
              <Text style={styles.desc}>有效期至：{this.props.time}</Text>
              <Text style={styles.desc}>使用细则：{this.props.desc}</Text>
            </View>
          </View>
          <View style={styles.giveBtn}>
            {this._renderButton()}
          </View>
        </View>
      </View>
    )
  }

  _renderButton() {
    if (this.props.status == 'used') {
      return (
        <Button
          text="已使用"
          btnStyle={{backgroundColor: 'rgba(255,255,255,0)', width: 50, height: 12}}
          textStyle={{color: '#999999', fontSize: 11}}
        />
      )
    }else if (this.props.status == 'expire') {
      return (
        <Button
          text="已过期"
          btnStyle={{backgroundColor: 'rgba(255,255,255,0)', width: 50, height: 12}}
          textStyle={{color: '#999999', fontSize: 11}}
        />
      )
    }else {
      return (
        <Button
          text="赠送好友"
          btnStyle={{backgroundColor: 'rgba(255,255,255,0)', width: 50, height: 12}}
          textStyle={{color: '#FF6700', fontSize: 11}}
          onPress={this.props.onPress}
        />
      )
    }
  }

  _renderLeftInfo() {
    if(this.props.type == 'free') {
      return (
        <View style={styles.leftInfo}>
          <Iconfont name="free-ticket" size={42} color={this.props.status == 'used' ? '#999999' : this.props.status == 'expire' ? '#999999' : '#FF6700'}></Iconfont>
          <Text style={[styles.priceDesc, this.props.status == 'used' ? styles.usedStyle : this.props.status == 'expire' ? styles.usedStyle : '']}>{this.props.priceDesc}</Text>
        </View>
      )
    }else {
      return (
        <View style={styles.leftInfo}>
          <Text style={[styles.price, this.props.status == 'used' ? styles.usedStyle : this.props.status == 'expire' ? styles.usedStyle : '']}>￥{this.props.price}</Text>
          <Text style={[styles.priceDesc, this.props.status == 'used' ? styles.usedStyle : this.props.status == 'expire' ? styles.usedStyle : '']}>{this.props.priceDesc}</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  couponCard: {
    height: 90,
    width: 0.9 * width,
    marginTop: 15,
    backgroundColor: '#FFFFFF'
  },
  topPoint: {
    position: 'absolute',
    width: 16,
    height: 16,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    top: -8,
    left: 0.32 * width
  },
  bottomPoint: {
    position: 'absolute',
    width: 16,
    height: 16,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    bottom: -8,
    left: 0.32 * width
  },
  pointLine: {
    position: 'absolute',
    left: 0.34 * width,
    width: 1,
    height: 90,
    borderWidth: 0.5,
    borderColor: '#E9E9E9',
    borderStyle: 'dotted'
  },
  infoBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  leftInfo: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  price: {
    fontSize: 26,
    color: '#FF6700'
  },
  priceDesc: {
    fontSize: 12,
    color: '#FF6700'
  },
  rightInfo: {
    flex: 5,
    marginTop: -10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    fontSize: 11,
    color: '#999999',
    lineHeight: 16
  },
  giveBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  usedStyle: {
    color: '#999999'
  }
})

export default TicketItem
