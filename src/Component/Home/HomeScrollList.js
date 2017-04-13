/**
 * 轮播图组件
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomerTabBar from './CustomerTabBar';

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
          <View style={styles.card}>
            <Text>全部</Text>
          </View>
        </View>
        <View tabLabel="预热中" style={styles.tabView}>
            <Text>预热中</Text>
        </View>
        <View tabLabel="发售中" style={styles.tabView}>
            <Text>发售中</Text>
        </View>
        <View tabLabel="已售罄" style={styles.tabView}>
            <Text>已售罄</Text>
        </View>
        <View tabLabel="已截止" style={styles.tabView}>
            <Text>已截止</Text>
        </View>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
})

export default HomeScrollList;
