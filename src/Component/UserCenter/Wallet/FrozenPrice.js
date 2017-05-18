/**
 * 冻结金额页面
 */
import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  ListView,
  Dimensions
} from 'react-native'

const {width} = Dimensions.get('window');

const data = [
  {
    title: '提现冻结',
    price: 300.00,
    time: '2017-02-10 18:58',
    desc: '备注：中国农业银行 / ******120 / 王世一'
  },
  {
    title: '提现冻结',
    price: 100.00,
    time: '2017-02-10 18:58',
    desc: '备注：中国农业银行 / ******120 / 王世一'
  },
  {
    title: '提现冻结',
    price: 200.00,
    time: '2017-02-10 18:58',
    desc: '备注：中国农业银行 / ******120 / 王世一'
  }
]

class FrozenPrice extends Component {
  static navigationOptions = {
    title: '冻结金额',
    headerTitleStyle: {color: '#FFFFFF'},
    headerStyle: {backgroundColor: '#3d9fa0', shadowOpacity: 0, elevation: 0},
    headerTintColor: '#FFFFFF'
  }

  constructor(props){
      super(props)
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      this.state = {
        dataSource: ds.cloneWithRows(data),
      }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.frozenDesc}>冻结金额(元)</Text>
          <Text style={styles.frozenPrice}>100.00</Text>
        </View>
        <ListView
          style={styles.itemBox}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    )
  }

  _renderRow(rowData) {
    return (
      <View style={styles.item}>
        <View style={styles.leftBox}>
          <Text style={styles.itemTitle}>{rowData.title}</Text>
          <Text style={styles.itemTime}>{rowData.time}</Text>
          <Text style={styles.itemDesc}>{rowData.desc}</Text>
        </View>
        <Text style={styles.itemPrice}>{rowData.price}</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    height: 110,
    backgroundColor: '#3d9fa0',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center'
  },
  frozenDesc: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  frozenPrice: {
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
    height: 90,
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
    color: '#333333'
  },
  itemTime: {
    fontSize: 12,
    color: '#BBBBBB',
    lineHeight: 24
  },
  itemDesc: {
    fontSize: 12,
    color: '#666666',
    maxWidth: width * 0.75
  },
  itemPrice: {
    fontSize: 16,
    color: '#FF6700'
  }
})

export default FrozenPrice
