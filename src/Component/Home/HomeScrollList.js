/**
 * 轮播图组件
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Iconfont from 'react-native-vector-icons/Iconfont';
import CustomerTabBar from './CustomerTabBar';

const {width} = Dimensions.get('window');

class HomeScrollList extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <ScrollableTabView
        initialPage={0}
        renderTabBar={() => <CustomerTabBar />}
        >
        <View tabLabel="全部" style={styles.tabView}>
          <View style={styles.contentItem}>
            <View style={styles.imgBox}>
              <Image
                source={{uri: 'http://static2.yunipo.com/images/project/covers/20170320/58cfa8b653517.jpg'}}
                style={{width: 108, height: 60}}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle} numberOfLines={2}>【双子星-千宙】合投计划</Text>
              <View style={styles.infoDescBox}>
                <Text style={styles.infoDesc}>目标：120万</Text>
                <Text style={styles.infoDesc}>进度：60%</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentItem}>
            <View style={styles.imgBox}>
              <Image
                source={{uri: 'http://static2.yunipo.com/images/project/covers/20170214/58a267db13d63.jpg'}}
                style={{width: 108, height: 60}}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>云岸金服体验项目</Text>
              <View style={styles.infoDescBox}>
                <Text style={styles.infoDesc}>目标：120万</Text>
                <Text style={styles.infoDesc}>进度：60%</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentItem}>
            <View style={styles.imgBox}>
              <Image
                source={{uri: 'http://static.yunipo.com/images/project/covers/20170316/58ca82cf30a62.jpg'}}
                style={{width: 108, height: 60}}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>留洋帮（深圳）家长股东投资计划</Text>
              <View style={styles.infoDescBox}>
                <Text style={styles.infoDesc}>目标：100万</Text>
                <Text style={styles.infoDesc}>进度：60% | 已结束</Text>
              </View>
            </View>
          </View>
        </View>
        <View tabLabel="预热中" style={styles.tabView}>
          <View style={styles.contentItem}>
            <View style={styles.imgBox}>
              <Image
                source={{uri: 'http://static2.yunipo.com/images/project/covers/20170320/58cfa8b653517.jpg'}}
                style={{width: 108, height: 60}}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>【双子星-千宙】合投计划</Text>
              <View style={styles.infoDescBox}>
                <Text style={styles.infoDesc}>目标：120万</Text>
                <Text style={styles.infoDesc}>进度：60%</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentItem}>
            <View style={styles.imgBox}>
              <Image
                source={{uri: 'http://static2.yunipo.com/images/project/covers/20170214/58a267db13d63.jpg'}}
                style={{width: 108, height: 60}}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>云岸金服体验项目</Text>
              <View style={styles.infoDescBox}>
                <Text style={styles.infoDesc}>目标：120万</Text>
                <Text style={styles.infoDesc}>进度：60%</Text>
              </View>
            </View>
          </View>
        </View>
        <View tabLabel="发售中" style={styles.tabView}>
          <View style={styles.contentItem}>
            <View style={styles.imgBox}>
              <Image
                source={{uri: 'http://static2.yunipo.com/images/project/covers/20170320/58cfa8b653517.jpg'}}
                style={{width: 108, height: 60}}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>【双子星-千宙】合投计划</Text>
              <View style={styles.infoDescBox}>
                <Text style={styles.infoDesc}>目标：120万</Text>
                <Text style={styles.infoDesc}>进度：60%</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentItem}>
            <View style={styles.imgBox}>
              <Image
                source={{uri: 'http://static2.yunipo.com/images/project/covers/20170214/58a267db13d63.jpg'}}
                style={{width: 108, height: 60}}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>云岸金服体验项目</Text>
              <View style={styles.infoDescBox}>
                <Text style={styles.infoDesc}>目标：120万</Text>
                <Text style={styles.infoDesc}>进度：60%</Text>
              </View>
            </View>
          </View>
        </View>
        <View tabLabel="已售罄" style={styles.tabView}>
          <View style={styles.contentItem}>
            <View style={styles.imgBox}>
              <Image
                source={{uri: 'http://static2.yunipo.com/images/project/covers/20170214/58a267db13d63.jpg'}}
                style={{width: 108, height: 60}}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>云岸金服体验项目</Text>
              <View style={styles.infoDescBox}>
                <Text style={styles.infoDesc}>目标：120万</Text>
                <Text style={styles.infoDesc}>进度：60%</Text>
              </View>
            </View>
          </View>
        </View>
        <View tabLabel="已截止" style={styles.tabView}>
          <View style={styles.contentItem}>
            <View style={styles.imgBox}>
              <Image
                source={{uri: 'http://static2.yunipo.com/images/project/covers/20170320/58cfa8b653517.jpg'}}
                style={{width: 108, height: 60}}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>【双子星-千宙】合投计划</Text>
              <View style={styles.infoDescBox}>
                <Text style={styles.infoDesc}>目标：120万</Text>
                <Text style={styles.infoDesc}>进度：60%</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    paddingLeft: 15
  },
  contentItem: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9'
  },
  imgBox: {
    height: 100,
    width: 120,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  infoBox: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  infoTitle: {
    fontSize: 14,
    lineHeight: 16,
    maxWidth: 0.6 * width,
    color: '#333333'
  },
  infoDescBox: {
    paddingTop: 8,
    maxWidth: 0.59 * width,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoDesc: {
    fontSize: 12,
    color: '#999999'
  }
})

export default HomeScrollList;
