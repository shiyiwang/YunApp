/**
 * 设置页面元素组件
 */
import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native'
import Iconfont from 'react-native-vector-icons/Iconfont';

class SettingItem extends Component {
  static propTypes: {
    noBorder: PropTypes.bool,
    handlePress: PropTypes.func,
    title: PropTypes.string,
    desc: PropTypes.string,
    iconName: PropTypes.string
  }

  render(){
    if(Platform.OS === 'android') {
      return (
        <View style={[styles.container, this.props.noBorder ? styles.noBorder : '']}>
          <TouchableNativeFeedback style={styles.setItem}
            onPress={this.props.handlePress}
            >
            <View style={styles.itemFrontBox}>
              {this.props.iconName && <Iconfont name={this.props.iconName} size={20} color='#fe8330'></Iconfont>}
              <Text style={styles.itemTitle}>{this.props.title}</Text>
            </View>
            <View  style={styles.itemBackBox}>
              <Text style={styles.itemDesc}>{this.props.desc}</Text>
              <Iconfont name="right-arrow" size={18} color='#999999'></Iconfont>
            </View>
          </TouchableNativeFeedback>
        </View>
      )
    }else if(Platform.OS === 'ios'){
      return (
        <View style={[styles.container, this.props.noBorder ? styles.noBorder : '']}>
          <TouchableOpacity style={styles.setItem}
            onPress={this.props.handlePress}
            >
            <View style={styles.itemFrontBox}>
              {this.props.iconName && <Iconfont name={this.props.iconName} size={20} color='#fe8330'></Iconfont>}
              <Text style={styles.itemTitle}>{this.props.title}</Text>
            </View>
            <View  style={styles.itemBackBox}>
              <Text style={styles.itemDesc}>{this.props.desc}</Text>
              <Iconfont name="right-arrow" size={18} color='#999999'></Iconfont>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#dedede'
  },
  setItem: {
    flex: 1,
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
    fontSize: 15,
    color: '#333333'
  },
  itemBackBox: {
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemDesc: {
    marginRight: 6,
    fontSize: 13,
    color: '#BBBBBB'
  }
})

export default SettingItem
