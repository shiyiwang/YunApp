/**
 * 会员页面
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  Dimensions
} from 'react-native'

import Iconfont from 'react-native-vector-icons/Iconfont';

import BackPageComponent from '../../Common/BackPageComponent'

const {width} = Dimensions.get('window');

class MemberComponent extends BackPageComponent {

  constructor() {
    super()
    this.state = {
      grade: 2,
      lineWidth: 175
    }
  }

  componentWillMount() {
    StatusBar.setBarStyle('light-content')
  }

  _renderFaceIcon() {
    if (this.state.grade === 3) {
      return (
        <View style={styles.faceIcon}>
          <Iconfont name="member-v3" size={13} color='#FFFFFF'></Iconfont>
        </View>
      )
    }else if (this.state.grade === 2) {
      return (
        <View style={styles.faceIcon}>
          <Iconfont name="member-v2" size={13} color='#FFFFFF'></Iconfont>
        </View>
      )
    }else {
      return (
        <View style={styles.faceIcon}>
          <Iconfont name="member-v1" size={13} color='#FFFFFF'></Iconfont>
        </View>
      )
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.faceBox}>
            <Image
              style={styles.face}
              source={{uri: 'http://yunipo-10059392.file.myqcloud.com/avatar/20161224/wuKNgvSSoUZnmKgz.png'}}
            />
            {this._renderFaceIcon()}
          </View>
          <Text style={styles.name}>吴家龙</Text>
        </View>
        <View style={styles.levelBox}>
            <View style={styles.levelLineBg}></View>
            <View style={[styles.levelLine, {width: this.state.lineWidth}]}>
              <View style={styles.lineInnerPoint}></View>
              <View style={styles.lineOuterPoint}></View>
            </View>
            <View style={[styles.levelLabel, styles.levelOne]}>
              <View style={[styles.levelLabelIcon, this.state.grade >= 1 ? styles.levelLabelIconActive : '']}>
                <Iconfont name="member-v1" size={16} color='#FFFFFF'></Iconfont>
              </View>
              <Text style={styles.levelText}>普通投资人</Text>
            </View>
            <View style={[styles.levelLabel, styles.levelTwo]}>
              <View style={[styles.levelLabelIcon, this.state.grade >= 2 ? styles.levelLabelIconActive : '']}>
                <Iconfont name="member-v2" size={16} color='#FFFFFF'></Iconfont>
              </View>
              <Text style={styles.levelText}>认证投资人</Text>
            </View>
            <View style={[styles.levelLabel, styles.levelThree]}>
              <View style={[styles.levelLabelIcon, this.state.grade >= 3 ? styles.levelLabelIconActive : '']}>
                <Iconfont name="member-v3" size={16} color='#FFFFFF'></Iconfont>
              </View>
              <Text style={styles.levelText}>敬请期待</Text>
            </View>
        </View>
        <View style={styles.privilegeBox}>
          <View style={styles.privilegeTitle}>
            <Text style={styles.privilegeTitleText}>我的特权</Text>
          </View>
          <View style={styles.privilegeList}>
            <View style={styles.privilege}>
              <Iconfont name="plan-book" size={38} color={this.state.grade >= 1 ? '#76a9f0' : '#999999'}></Iconfont>
              <Text>浏览计划</Text>
            </View>
            <View style={styles.privilege}>
              <Iconfont name="member-big" size={38} color={this.state.grade >= 1 ? '#ff8932' : '#999999'}></Iconfont>
              <Text>专属顾问</Text>
            </View>
            <View style={styles.privilege}>
              <Iconfont name="trend" size={38} color={this.state.grade >= 1 ? '#66cbf5' : '#999999'}></Iconfont>
              <Text>小额跟投</Text>
            </View>
            <View style={styles.privilege}>
              <Iconfont name="quota-upgrade" size={38} color={this.state.grade >= 2 ? '#f17672' : '#999999'}></Iconfont>
              <Text>额度提升</Text>
            </View>
            <View style={styles.privilege}>
              <Iconfont name="discount" size={38} color={this.state.grade >= 2 ? '#75c87f' : '#999999'}></Iconfont>
              <Text>投资优惠</Text>
            </View>
            <View style={styles.privilege}>
              <Iconfont name="privilege" size={38} color='#999999'></Iconfont>
              <Text>更多权利</Text>
            </View>
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
    borderColor: '#382f26'
  },
  header: {
    height: 150,
    backgroundColor: '#382f26',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#847a71'
  },
  faceBox: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: '#d0b17b',
    borderWidth: 3,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center'
  },
  face: {
    width: 66,
    height: 66,
    borderRadius: 33
  },
  faceIcon: {
    position: 'absolute',
    right: 2,
    bottom: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#d0b17b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    color: '#FFFFFF'
  },
  levelBox: {
    height: 75,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#483e34',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  levelLineBg: {
    position: 'absolute',
    top: 30,
    left: 15,
    height: 3,
    width: width - 30,
    backgroundColor: '#6e665e'
  },
  levelLine: {
    position: 'absolute',
    top: 30,
    left: 15,
    height: 3,
    width: 130,
    backgroundColor: '#d0b17b'
  },
  lineInnerPoint: {
    position: 'absolute',
    right: -4,
    top: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d0b17b'
  },
  lineOuterPoint: {
    position: 'absolute',
    right: -7,
    top: -5,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#d0b17b',
    opacity: 0.5
  },
  levelLabel: {
    width: 0.2 * width,
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  levelLabelIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#6e665e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  levelLabelIconActive: {
    backgroundColor: '#d0b17b'
  },
  levelText: {
    marginTop: 6,
    fontSize: 12,
    color: '#b1a79b'
  },
  privilegeBox: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#FFFFFF'
  },
  privilegeTitle: {
    height: 40,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
    justifyContent: 'center'
  },
  privilegeTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333'
  },
  privilegeList: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  privilege: {
    paddingTop: 20,
    paddingBottom: 20,
    width: 0.33 * width,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default MemberComponent
