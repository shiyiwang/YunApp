/**
 * 主页产品列表
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Iconfont from 'react-native-vector-icons/Iconfont';
import CustomTabBar from '../Common/CustomTabBar';
import ScrollListItem from './ScrollListItem';

class HomeScrollList extends Component {
  constructor(props){
    super(props)
  }

  static defaultProps = {
    data:[]
  };

  render() {
    return (
      <ScrollableTabView
        initialPage={0}
        renderTabBar={() => <CustomTabBar />}
        >
        <View tabLabel="全部" style={styles.tabView}>
          <ScrollListItem
            data={this.props.data}
            />
        </View>
        <View tabLabel="预热中" style={styles.tabView}>
          <ScrollListItem
            data={this.props.data.filter((item) => {return item.product_type === 'prepare'})}
            />
        </View>
        <View tabLabel="发售中" style={styles.tabView}>
          <ScrollListItem
            data={this.props.data.filter((item) => {return item.product_type === 'selling'})}
            />
        </View>
        <View tabLabel="已售罄" style={styles.tabView}>
          <ScrollListItem
            data={this.props.data.filter((item) => {return item.product_type === 'sellout'})}
            />
        </View>
        <View tabLabel="已截止" style={styles.tabView}>
          <ScrollListItem
            data={this.props.data.filter((item) => {return item.product_type === 'sellend'})}
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
