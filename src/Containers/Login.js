/**
 * 登录页面
 */
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'

import { connect } from 'dva'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/FontAwesome'

import { NavigationActions } from '../Utils'
import CustomTabBar from '../Component/Common/CustomTabBar'
import LoginComponent from '../Component/Login/LoginComponent'
import RegComponent from '../Component/Login/RegComponent'

class LoginClass extends Component {
  constructor(props){
      super(props)
  }

  onClose = () => {
    this.props.dispatch(NavigationActions.back())
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../img/yunipoLogo.png')} style={styles.logo} />
        </View>
        <View style={styles.closeBtn}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this.onClose.bind(this)}
            >
            <Icon name="angle-down" size={30} color='#cccccc'></Icon>
          </TouchableOpacity>
        </View>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <CustomTabBar />}
          >
          <View tabLabel="登录" style={styles.tabView}>
            <LoginComponent navigation={this.props.navigation} />
          </View>
          <View tabLabel="注册" style={styles.tabView}>
            <RegComponent />
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
  closeBtn: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 20,
    right: 20
  },
  tabView: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});

function mapState (state) {
  return ({ app }) => ({ ...app })
}

const Login = connect(mapState)(LoginClass);

export default Login
