/**
 * 设置页面
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native'

import Iconfont from 'react-native-vector-icons/Iconfont';

import Button from '../../Common/Button'
import SettingItem from '../../Common/SettingItem';

const {width} = Dimensions.get('window');

class SettingPage extends Component {
  static navigationOptions = {
    title: '设置',
    headerStyle: {backgroundColor: '#FF6700', shadowOpacity: 0, elevation: 0},
    headerTintColor: '#FFFFFF'
  }

  render(){
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.setBox}>
          <SettingItem
            handlePress={() => console.log('into')}
            title='个人信息'
          />
          <SettingItem
            handlePress={() => console.log('into')}
            title='安全中心'
            noBorder={true}
          />
        </View>
        <View style={styles.setBox}>
          <SettingItem
            handlePress={() => console.log('into')}
            title='分享给好友'
          />
          <SettingItem
            handlePress={() => console.log('into')}
            title='帮助中心'
          />
          <SettingItem
            handlePress={() => console.log('into')}
            title='意见反馈'
            noBorder={true}
          />
        </View>
        <View style={styles.setBox}>
          <SettingItem
            handlePress={() => console.log('into')}
            title='联系顾问'
          />
          <SettingItem
            handlePress={() => console.log('into')}
            title='客服电话'
            noBorder={true}
          />
        </View>
        <View style={styles.setBox}>
          <SettingItem
            handlePress={() => console.log('into')}
            title='推广弹药库'
            noBorder={true}
          />
        </View>
        <View style={styles.setBox}>
          <SettingItem
            handlePress={() => console.log('into')}
            title='关于'
            noBorder={true}
          />
        </View>
        <View style={styles.btnBox}>
          <Button
            text="安全退出"
            btnStyle={{width: 0.91 * width}}
            textStyle={{color: '#FFFFFF', fontSize: 16}}
            onPress={() => navigation.navigate('UserCenter')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  setBox: {
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(0,0,0,0.1)',
    marginTop: 10,
    paddingLeft: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  btnBox: {
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SettingPage
