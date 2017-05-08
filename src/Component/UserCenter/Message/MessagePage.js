/**
 * 消息
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  ListView,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import Button from '../../Common/Button';

const {width} = Dimensions.get('window');

const data = [
  {
    content: '您预约的『且亭度假酒店（连锁经营）』份额30份已应您要求取消，请登录用户中心查看，您的预约资格不受影响，感谢您的信任与支持！',
    time: '2017-02-10 18:58',
  },
  {
    content: '您预约的『【双子星-飞幻】合投计划』份额1份已应您要求取消，请登录用户中心查看，您的预约资格不受影响，感谢您的信任与支持！',
    time: '2017-02-10 18:58',
  },
  {
    content: '您预约的『【双子星-飞幻】合投计划』份额1份已应您要求取消，请登录用户中心查看，您的预约资格不受影响，感谢您的信任与支持！',
    time: '2017-02-10 18:58',
  },
  {
    content: '您预约的『且亭度假酒店（连锁经营）』份额30份已应您要求取消，请登录用户中心查看，您的预约资格不受影响，感谢您的信任与支持！',
    time: '2017-02-10 18:58',
  },
]

class MessagePage extends Component {
  static navigationOptions = {
    title: '消息',
    headerTintColor: '#FFFFFF',
    headerStyle: {backgroundColor: '#FF6700'}
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
          <Text style={styles.headerDesc}>未读消息（0）</Text>
          <View style={styles.btnBox}>
            <Button
              text='全部标为已读'
              btnStyle={{backgroundColor: '#f1f1f1', width: 100, height: 30, borderRadius: 3, borderRightWidth: 1, borderColor: '#f1f1f1'}}
              textStyle={{color: '#333333', fontSize: 14}}
              onPress={() => console.log('btn click')}
            />
          </View>
        </View>
        <ListView
          style={styles.msgBox}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    )
  }

  _renderRow(rowData) {
    return (
      <View style={styles.msgItem}>
        <View style={styles.iconBox}>
          <Text style={styles.iconName}>通知</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoDesc} numberOfLines={2}>{rowData.content}</Text>
          <Text style={styles.infoTime}>{rowData.time}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  header: {
    height: 50,
    backgroundColor: '#FFFFFF',
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  headerDesc: {
    fontSize: 14,
    color: '#333333'
  },
  btnBox: {
    width: 95,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center'
  },
  msgBox: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#FFFFFF'
  },
  msgItem: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  iconBox: {
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
    backgroundColor: '#fe8330',
    marginRight: 10
  },
  iconName: {
    color: '#FFFFFF',
    fontSize: 13
  },
  infoBox: {
    flex: 1,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  infoDesc: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 14
  },
  infoTime: {
    marginTop: 5,
    fontSize: 13,
    color: '#999999'
  }
})

export default MessagePage
