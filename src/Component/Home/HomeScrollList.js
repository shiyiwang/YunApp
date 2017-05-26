/**
 * 主页产品列表
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Iconfont from 'react-native-vector-icons/Iconfont';
import CustomTabBar from '../Common/CustomTabBar';
import ScrollListItem from './ScrollListItem';

class HomeScrollList extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <CustomTabBar />}
        >
        <View tabLabel="全部" style={styles.tabView}>
          <ScrollListItem
            data = {this.props.data}
            navigation = {this.props.navigation}
            />
        </View>
        <View tabLabel="预热中" style={styles.tabView}>
          <ScrollListItem
            data = {this.props.data.filter((item) => {return item.type === 'prepare'})}
            navigation = {this.props.navigation}
            />
        </View>
        <View tabLabel="发售中" style={styles.tabView}>
          <ScrollListItem
            data = {this.props.data.filter((item) => {return item.type === 'selling'})}
            navigation = {this.props.navigation}
            />
        </View>
        <View tabLabel="已售罄" style={styles.tabView}>
          <ScrollListItem
            data = {this.props.data.filter((item) => {return item.type === 'sellout'})}
            navigation = {this.props.navigation}
            />
        </View>
        <View tabLabel="已截止" style={styles.tabView}>
          <ScrollListItem
            data = {this.props.data.filter((item) => {return item.type === 'sellend'})}
            navigation = {this.props.navigation}
            />
        </View>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    paddingLeft: 15
  }
})

export default HomeScrollList;
