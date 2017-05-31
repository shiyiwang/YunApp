/**
 * 分红
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import Iconfont from 'react-native-vector-icons/Iconfont';

import WebViewPage from '../../Common/WebViewPage'

const {width} = Dimensions.get('window');

const data = [
  {
    title: '【微语言】退出分红',
    price: 32.00,
    time: '2017-02-10 18:58',
  },
  {
    title: '海钰生物退出分红',
    price: 132.98,
    time: '2017-02-10 18:58',
  },
  {
    title: '众筹宝1期「宜生到家」退出分红众筹宝1期「宜生到家」退出分红',
    price: 152.70,
    time: '2017-02-10 18:58',
  }
]

class BonusPage extends Component {
  static navigationOptions = {
    title: '分红',
    headerTintColor: '#FFFFFF',
    headerStyle: {backgroundColor: '#d64e4b', shadowOpacity: 0, elevation: 0}
  }

  componentWillMount() {
    StatusBar.setBarStyle('light-content')
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerDesc}>累计分红金额(元)</Text>
          <Text style={styles.headerPrice}>317.68</Text>
        </View>
        <ScrollView style={styles.itemBox}>
          {this._renderItem()}
        </ScrollView>
      </View>
    )
  }

  _renderItem() {
    let itemList = []

    data.map((item, i) => {
      itemList.push(
        <View style={styles.item} key={i}>
          <View style={styles.leftBox}>
            <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.itemTime}>{item.time}</Text>
          </View>
          <View style={styles.rightBox}>
            <Text style={styles.itemPrice}>+{item.price}</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('WebViewPage', {title: '分红'})}>
              <View style={styles.shareIcon}>
                <Iconfont name="share" size={18} color='#999999'></Iconfont>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )
    })

    return itemList
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    height: 110,
    backgroundColor: '#d64e4b',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center'
  },
  headerDesc: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  headerPrice: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  itemBox: {
    flex: 1,
    paddingLeft: 15
  },
  item: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E9E9E9'
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    lineHeight: 18,
    maxWidth: 0.65 * width
  },
  itemTime: {
    fontSize: 12,
    color: '#666666'
  },
  itemPrice: {
    fontSize: 16,
    color: '#FF6700',
    marginRight: 5
  },
  rightBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  shareIcon: {
    width: 20,
    height: 8
  }
})

export default BonusPage
