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
  RefreshControl
} from 'react-native';

//轮播图
import HomeSwiper from './HomeSwiper';
//产品列表
import HomeScrollList from './HomeScrollList';
//加载动图
import CommonLoading from '../Common/Loading';

class HomeComponent extends Component {
  constructor(props){
      super(props)
      this.state = {
        swiperData: [],
        scrollListData: [],
        refreshing: false
      }
  }

  _onRefresh() {
    this.setState({refreshing: true});
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
          {/*轮播图*/}
          {this.renderHomeSwiper()}
          {/*产品列表*/}
          {this.renderHomeScrollList()}
      </ScrollView>
    );
  }

  componentDidMount(){
      // 请求首页数据
      this.getData()
  }

  getData(){
    let swiperData  = [
      {id: 1, title: '双子星-飞幻', desc: '超IMAX体验的飞行影院+百度战略投资的文学IP泛娱乐生态平台', image: 'http://static.yunipo.com/images/project/covers/20170405/58e495d386777.jpg'},
      {id: 2, title: '留洋帮（深圳）家长股东投资计划', desc: '国内股权投资，国外留学受益', image: 'http://static.yunipo.com/images/project/covers/20170316/58ca82cf30a62.jpg'},
      {id: 3, title: '超新星 - 锋飞', desc: '全球首款采用RTK技术的燃油直驱多旋翼无人机', image: 'http://static.yunipo.com/images/project/covers/20170321/58d09dc370bec.jpg'},
      {id: 4, title: '全美基因（香港）', desc: '基因诊疗技术专家，大幅提升生命质量', image: 'http://static.yunipo.com/images/project/covers/20170306/58bd2f3149f79.jpg'}
    ];
    let scrollListData = [
      1
    ]
    this.setState({
        swiperData: swiperData,
        scrollListData: scrollListData
    })
  }

  renderHomeSwiper(){
    if(this.state.swiperData.length){
      return (
        <HomeSwiper
          data = {this.state.swiperData}
          navigator={this.props.navigator}
        />
      )
    }else{
      return (
        <CommonLoading />
      )
    }
  }

  renderHomeScrollList() {
    if(this.state.scrollListData.length > 0){
      return (
        <HomeScrollList
          data = {this.state.scrollListData}
          navigator={this.props.navigator}
        />
      )
    }else{
      return (
        <CommonLoading />
      )
    }
  }

}

export default HomeComponent;
