/**
 * 主页产品列表子组件
 */
import React,{Component} from 'react'
import {
  View,
  StyleSheet,
  ListView,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native'

const {width} = Dimensions.get('window');

class ScrollListItem extends Component {
  static defaultProps = {
    data:[]
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data),
    };
  }

  goDetail(product_type, product_id){
    this.props.navigation.navigate('ProjectDetailPage', {product_type, product_id})
  }

  render(){
    return (
      <View style={styles.container}>
        <ListView
          style={styles.msgBox}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          enableEmptySections={true}
          initialListSize={5}
        />
      </View>
    )
  }

  _renderRow(rowData) {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this.goDetail.bind(this,rowData.product_type, rowData.product_id)}>
        <View style={styles.contentItem}>
          <View style={styles.imgBox}>
            <Image
              source={{uri: rowData.main_img_url.startsWith('/static') ? rowData.main_img_url.replace('/static', 'http://static.yunipo.com') : rowData.main_img_url}}
              style={{width: 108, height: 60}}
            />
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>{rowData.product_name}</Text>
            <View style={styles.infoDescBox}>
              <Text style={styles.infoDesc}>目标：{(rowData.product_money/10000).toFixed(0)}万</Text>
              {
                rowData.type === 'prepare' ?
                  <Text style={styles.infoDesc}></Text>
                  :
                  <Text style={styles.infoDesc}>进度：{rowData.product_progress}%{this._renderResult(rowData.type)}</Text>
              }
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  _renderResult(type) {
    if (type === 'sellend') {
      return ' | 已截止';
    }else if (type === 'sellout') {
      return ' | 已售罄';
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentItem: {
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
    lineHeight: 16,
    maxWidth: 0.6 * width,
    color: '#333333'
  },
  infoDescBox: {
    paddingTop: 8,
    maxWidth: 0.59 * width,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoDesc: {
    fontSize: 12,
    color: '#999999'
  }
})

export default ScrollListItem
