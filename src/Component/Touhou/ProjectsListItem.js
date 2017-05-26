/**
 * 投后项目子组件
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

import Iconfont from 'react-native-vector-icons/Iconfont';

const {width} = Dimensions.get('window')

class ProjectsListItem extends Component {
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
    // this.props.navigation.navigate('ProjectDetailPage', {product_type, product_id})
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
        <View style={styles.contentItem}>
          <View style={styles.imgBox}>
            <TouchableOpacity activeOpacity={0.9} onPress={this.goDetail.bind(this,rowData.project_id)}>
              <Image
                source={{uri: rowData.project_logo_url}}
                style={{width: 50, height: 50, borderWidth: 1,borderColor: '#EEEEEE', borderRadius: 25}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.infoBox}>
            <TouchableOpacity activeOpacity={0.9} onPress={this.goDetail.bind(this,rowData.project_id)}>
              <Text style={styles.infoTitle}>{rowData.project_name}</Text>
            </TouchableOpacity>
            <Text style={[styles.infoDesc, {paddingTop: 6}]} numberOfLines={1}>{rowData.slogan}</Text>
            <View style={styles.infoDescBox}>
              {this._renderInfoItem('location', rowData.address)}
              {this._renderInfoItem('tag', rowData.industry)}
              {this._renderInfoItem('link', '众筹宝1期')}
              {this._renderInfoItem('coin', '投资' + rowData.investment_funds/10000 + '万元')}
            </View>
          </View>
        </View>
    )
  }

  _renderInfoItem(iconName, info) {
    if (info) {
      return (
        <View style={styles.infoItem}>
          <Iconfont name={iconName} size={12} color='#999999' style={{height: 12}}></Iconfont>
          <Text style={styles.infoItemText} numberOfLines={1}>{info}</Text>
        </View>
      )
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  contentItem: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9'
  },
  imgBox: {
    width: 60,
  },
  infoBox: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  infoTitle: {
    paddingTop: 8,
    fontSize: 14,
    lineHeight: 16,
    maxWidth: 0.6 * width,
    color: '#333333'
  },
  infoTitleSpan: {
    fontSize: 12,
    color: '#999999'
  },
  infoDescBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f3f4f6',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  infoItem: {
    width: 0.33 * width,
    height: 20,
    marginRight: 5,
    alignItems: 'center',
    flexDirection: 'row'
  },
  infoItemText: {
    marginLeft: 3,
    fontSize: 11,
    color: '#666666'
  },
  infoDesc: {
    fontSize: 12,
    lineHeight: 18,
    color: '#333333'
  },
  infoRowTitle: {
    fontSize: 12,
    color: '#999999'
  },
  infoRowDesc: {
    fontSize: 12,
    lineHeight: 18,
    color: '#333333'
  },
  timeText: {
    fontSize: 11,
    color: '#999999'
  }
})

export default ProjectsListItem
