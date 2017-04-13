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
  ScrollView
} from 'react-native';

//加载动图
import CommonLoading from '../Common/Loading';

class UserCenterComponent extends Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.card}>
            <Text>用户中心</Text>
        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
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
});

export default UserCenterComponent;
