import React, { Component } from 'react';
import {
    StyleSheet,
		View,
    Image,
		Platform
} from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import Iconfont from 'react-native-vector-icons/Iconfont';

import HomeComponent from './Component/Home/HomeComponent';
import TouhouComponent from './Component/Touhou/TouhouComponent';
import BigBombComponent from './Component/BigBomb/BigBombComponent';
import UserCenterComponent from './Component/UserCenter/UserCenterComponent';
import WalletComponent from './Component/UserCenter/Wallet/WalletComponent';
import FrozenPrice from './Component/UserCenter/Wallet/FrozenPrice';

const YunApp = TabNavigator({
  Home: {
    screen: HomeComponent
  },
  Touhou: {
    screen: TouhouComponent
  },
	BigBomb: {
    screen: BigBombComponent
  },
	UserCenter: {
    screen: UserCenterComponent
  }
}, {
	tabBarComponent: TabBarBottom,
	animationEnabled: true, // 切换页面时显示动画
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: true, // 左右滑动
  tabBarOptions: {
    activeTintColor: '#FF6700', // 文字和图片选中颜色
    inactiveTintColor: '#999999', // 文字和图片默认颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
    style: {
        backgroundColor: '#fff', // TabBar 背景色
				height: Platform.OS === 'android' ? 55 : 50
    },
    labelStyle: {
        fontSize: 12, // 文字大小
				marginBottom: 2
    },
  }
});

const UserCenterNavigator = StackNavigator({
	Main: {
    screen: YunApp,
    navigationOptions: {
			header: null
    }
  },
	Wallet: {
		screen: WalletComponent,
		navigationOptions: {
			title: '钱包'
		}
	},
	FrozenPrice: {
		screen: FrozenPrice,
		navigationOptions: {
			title: '冻结金额'
		}
	}
}, {
	mode: 'card',
	headerMode: 'screen'
});

const styles = StyleSheet.create({
	icon: {
    height: 25,
		width: 25,
		marginTop: -10,
		marginBottom: -10,
		resizeMode: 'contain'
  }
});

export default UserCenterNavigator;
