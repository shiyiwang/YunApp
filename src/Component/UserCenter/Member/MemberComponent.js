/**
 * 会员页面
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  Image
} from 'react-native'

import Iconfont from 'react-native-vector-icons/Iconfont';

class MemberComponent extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.faceBox}>
            <Image
              source={}
            />
            <Iconfont name="right-arrow" size={18} color='#999999'></Iconfont>
          </View>
          <Text style={styles.name}>jimcry</Text>
        </View>
        <View style={styles.levelBox}>

        </View>
        <View style={styles.privilegeBox}>
          <View style={styles.privilegeTitle}>
            <Text style={styles.privilegeTitleText}>我的特权</Text>
          </View>
          <View style={styles.privilegeList}>
            <View style={styles.privilege}>
              <Iconfont name="right-arrow" size={18} color='#999999'></Iconfont>
              <Text>浏览计划</Text>
            </View>
            <View style={styles.privilege}>
              <Iconfont name="right-arrow" size={18} color='#999999'></Iconfont>
              <Text>专属顾问</Text>
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
})

export default MemberComponent
