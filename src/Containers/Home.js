/**
 * 首页
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  StyleSheet
} from 'react-native';

import { connect } from 'dva'

//轮播图
import HomeSwiper from '../Component/Home/HomeSwiper';
//产品列表
import HomeScrollList from '../Component/Home/HomeScrollList';
//加载动图
import CommonLoading from '../Component/Common/Loading';

import { createAction, NavigationActions } from '../Utils'

class HomeClass extends Component {
  static navigationOptions = {
    tabBarLabel: '推荐',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../../img/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }

  constructor(props){
      super(props)
      this.state = {
        swiperData: [],
        scrollListData: [],
        refreshing: false
      }
  }

  _onRefresh() {
    this.props.dispatch(createAction('home/getProducts')())
    this.setState({refreshing: this.props.fetchingProduct});
  }

  render() {
    return (
      <View
        style={{flex: 1, backgroundColor: '#FFFFFF'}}
      >
          {/*轮播图*/}
          {this.renderHomeSwiper()}
          {/*产品列表*/}
          {this.renderHomeScrollList()}
      </View>
    );
  }

  componentDidMount(){
      // 请求首页数据
      this.props.dispatch(createAction('home/getAd')())
      this.props.dispatch(createAction('home/getProducts')())
  }

  renderHomeSwiper(){
    if(!this.props.fetchingAd){
      return (
        <HomeSwiper
          data = {this.props.indexAd}
        />
      )
    }else{
      return (
        <CommonLoading />
      )
    }
  }

  renderHomeScrollList() {
    if(!this.props.fetchingProduct){
      return (
        <HomeScrollList
          data = {this.props.productList}
        />
      )
    }else{
      return (
        <CommonLoading />
      )
    }
  }

}

const styles = StyleSheet.create({
	icon: {
    height: 26,
		width: 26,
		resizeMode: 'contain'
  }
});

function mapState (state) {
  return ({ home }) => ({ ...home })
}

const Home = connect(mapState)(HomeClass);

export default Home
