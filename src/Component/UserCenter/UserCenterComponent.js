/**
 * 首页
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { createIconSet } from 'react-native-vector-icons';
const glyphMap = {
  'setting': 59222,
  'wallet': 59106,
  'right-arrow': 58918,
  'member': 58881,
  'order': 59004,
  'invest': 59083,
  'bonus': 58889,
  'message': 59144
};
const IconFont = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

const {width} = Dimensions.get('window');

class UserCenterComponent extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image
              style={styles.face}
              source={{uri: 'http://static.yunipo.com/images/project/covers/20170316/58ca82cf30a62.jpg'}}
            />
            <Text style={styles.name}>龙哥</Text>
          </View>
          <TouchableOpacity style={styles.setButton}>
            <IconFont name="setting" size={24} color='#777777'></IconFont>
          </TouchableOpacity>
        </View>
        <View style={styles.chargeBox}>
          <View>
            <Text style={styles.chargeDesc}>可用余额(元)</Text>
            <Text style={styles.chargePrice}>100.00</Text>
          </View>
          <View>
            <Text>充值</Text>
          </View>
        </View>
        <View style={styles.setBox}>
            <TouchableOpacity>
              <View style={styles.setItem}>
                <View style={styles.itemFrontBox}>
                  <IconFont name="wallet" size={18} color='#fe8330'></IconFont>
                  <Text style={styles.itemTitle}>钱包</Text>
                </View>
                <View  style={styles.itemBackBox}>
                  <Text style={styles.itemDesc}></Text>
                  <IconFont name="right-arrow" size={18} color='#999999'></IconFont>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.setItem}>
                <View style={styles.itemFrontBox}>
                  <IconFont name="member" size={18} color='#fe8330'></IconFont>
                  <Text style={styles.itemTitle}>会员</Text>
                </View>
                <View  style={styles.itemBackBox}>
                  <Text style={styles.itemDesc}>普通投资人</Text>
                  <IconFont name="right-arrow" size={18} color='#999999'></IconFont>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.setItem}>
                <View style={styles.itemFrontBox}>
                  <IconFont name="order" size={18} color='#fe8330'></IconFont>
                  <Text style={styles.itemTitle}>预约</Text>
                </View>
                <View  style={styles.itemBackBox}>
                  <Text style={styles.itemDesc}>暂无预约资格</Text>
                  <IconFont name="right-arrow" size={18} color='#999999'></IconFont>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.setItem}>
              <TouchableOpacity style={{flex: 1,alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row'}} onPress={() => console.log('press')}>
                <View style={styles.itemFrontBox}>
                  <IconFont name="invest" size={18} color='#fe8330'></IconFont>
                  <Text style={styles.itemTitle}>投资</Text>
                </View>
                <View  style={styles.itemBackBox}>
                  <Text style={styles.itemDesc}></Text>
                  <IconFont name="right-arrow" size={18} color='#999999'></IconFont>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={[styles.setItem, styles.noBorder]}>
                <View style={styles.itemFrontBox}>
                  <IconFont name="bonus" size={18} color='#fe8330'></IconFont>
                  <Text style={styles.itemTitle}>分红</Text>
                </View>
                <View  style={styles.itemBackBox}>
                  <Text style={styles.itemDesc}></Text>
                  <IconFont name="right-arrow" size={18} color='#999999'></IconFont>
                </View>
              </View>
            </TouchableOpacity>
        </View>
        <View style={styles.setBox}>
            <TouchableOpacity>
              <View style={[styles.setItem, styles.noBorder]}>
                <View style={styles.itemFrontBox}>
                  <View>
                    <IconFont name="message" size={18} color='#fe8330'></IconFont>
                  </View>
                  <Text style={styles.itemTitle}>消息</Text>
                </View>
                <View  style={styles.itemBackBox}>
                  <Text style={styles.itemDesc}></Text>
                  <IconFont name="right-arrow" size={18} color='#999999'></IconFont>
                </View>
              </View>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  header: {
    flex: 1,
    height: 140,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  face: {
    width: 66,
    height: 66,
    borderRadius: 33
  },
  name: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666666',
    paddingTop: 8
  },
  setButton: {
    position: 'absolute',
    right: 15,
    top: 15
  },
  chargeBox: {
    flex: 1,
    height: 90,
    backgroundColor: '#fe8330',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  chargeDesc: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  chargePrice: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  setBox: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    marginTop: 10,
    paddingLeft: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  setItem: {
    flex: 1,
    height: 40,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  noBorder: {
    borderBottomWidth: 0
  },
  itemFrontBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemTitle: {
    marginLeft: 6,
    color: '#333333'
  },
  itemBackBox: {
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemDesc: {
    marginRight: 6,
    fontSize: 12,
    color: '#BBBBBB'
  }
});

export default UserCenterComponent;
