/**
 * 投资主页面
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  ListView,
  Image,
  StatusBar
} from 'react-native'

import Iconfont from 'react-native-vector-icons/Iconfont';

const data = [
  {
    imgSrc: 'http://static2.yunipo.com/images/project/covers/20170320/58cfa8b653517.jpg',
    title: '【双子星-千宙】合投计划',
    count: 10
  },
  {
    imgSrc: 'http://static2.yunipo.com/images/project/covers/20170214/58a267db13d63.jpg',
    title: '云岸金服体验项目',
    count: 3
  },
  {
    imgSrc: 'http://static2.yunipo.com/images/project/covers/20170320/58cfa8b653517.jpg',
    title: '【双子星-千宙】合投计划',
    count: 10
  },
  {
    imgSrc: 'http://static2.yunipo.com/images/project/covers/20170214/58a267db13d63.jpg',
    title: '云岸金服体验项目',
    count: 3
  }
]

class InvestPage extends Component {
  static navigationOptions = {
    title: '投资',
    headerTitleStyle: {color: '#FFFFFF'},
    headerStyle: {backgroundColor: '#5067a3', shadowOpacity: 0, elevation: 0},
    headerTintColor: '#FFFFFF'
  }

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.priceName}>投资金额（元）</Text>
          <Text style={styles.price}>47,973.00</Text>
        </View>
        <View style={styles.descBox}>
          <View style={styles.descItemBox}>
            <Text style={styles.descItemName}>参投计划(个)</Text>
            <Text style={styles.descItemNum}>8</Text>
            <View style={styles.descItemLine}></View>
          </View>
          <View style={styles.descItemBox}>
            <Text style={styles.descItemName}>最新估值(元)</Text>
            <Text style={styles.descItemNum}>47,973.00</Text>
          </View>
        </View>
        <View style={styles.contentBox}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentTitleText}>投资资产明细</Text>
          </View>
          <ListView
            style={styles.contentList}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
          />
        </View>
      </View>
    )
  }

  _renderRow(rowData) {
    return (
      <View style={styles.contentItem}>
        <View style={styles.imgBox}>
          <Image
            source={{uri: rowData.imgSrc}}
            style={{width: 108, height: 60}}
          />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>{rowData.title}</Text>
          <Text style={styles.infoDesc}>持有份额：{rowData.count}份</Text>
        </View>
        <View style={styles.contentIcon}>
          <Iconfont name="right-arrow" size={18} color='#999999'></Iconfont>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 130,
    backgroundColor: '#5067a3',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255,255,255,0.4)'
  },
  priceName: {
    fontSize: 14,
    color: '#FFFFFF'
  },
  price: {
    marginTop: 10,
    fontSize: 36,
    color: '#FFFFFF'
  },
  descBox: {
    height: 90,
    backgroundColor: '#425993',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  descItemBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  descItemLine: {
    position: 'absolute',
    right: 5,
    top: -4,
    width: 0.5,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.4)'
  },
  descItemName: {
    fontSize: 14,
    color: '#FFFFFF'
  },
  descItemNum: {
    paddingTop: 2,
    fontSize: 28,
    color: '#FFFFFF'
  },
  contentBox: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#FFFFFF'
  },
  contentTitle: {
    height: 40,
    paddingLeft: 15,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9'
  },
  contentTitleText: {
    fontSize: 16,
    color: '#333333'
  },
  contentList: {
    paddingLeft: 15,
  },
  contentItem: {
    flex: 1,
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
    color: '#333333'
  },
  infoDesc: {
    paddingTop: 10,
    fontSize: 12,
    color: '#999999'
  },
  contentIcon: {
    position: 'absolute',
    top: 35,
    right: 10
  }
})

export default InvestPage
