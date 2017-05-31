/**
 * 投后动态子组件
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

import { formatDateString } from '../../Utils/FormatUtils'
import { createAction, NavigationActions } from '../../Utils'

const {width} = Dimensions.get('window')

class NewsListItem extends Component {
  static defaultProps = {
    data:[]
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data),
      newsPage: 1
    };
  }

  goDetail(title, project_id){
    this.props.navigation.navigate('WebViewPage', {title: title, url: 'http://m.yunipo.com/touhou/prodetail?id=' + project_id})
  }

  goNewsWebPage(title, id) {
    this.props.navigation.navigate('WebViewPage', {title: title, url: 'http://news.yunipo.com/wp/article/' + id})
  }

  loadMore() {
    this.props.dispatch(createAction('touhou/loadMoreNews')({information_type: '1,2,98,99', list_rows: 5, page: this.state.newsPage}))
    this.setState({newsPage: this.state.newsPage + 1})
    console.log('into loadMore')
    console.log(this.state.newsPage)
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
          onEndReachedThreshold={10}
          onEndReached={this.loadMore.bind(this)}
        />
      </View>
    )
  }

  _renderRow(rowData) {
    return (
        <View style={styles.contentItem}>
          <View style={styles.imgBox}>
            <TouchableOpacity activeOpacity={0.9} onPress={this.goDetail.bind(this, rowData.project_name, rowData.project_id)}>
              <Image
                source={{uri: rowData.project_logo_url.startsWith("//") ? "http:" + rowData.project_logo_url : rowData.project_logo_url}}
                style={{width: 50, height: 50, borderWidth: 1,borderColor: '#EEEEEE', borderRadius: 4}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.infoBox}>
            <TouchableOpacity activeOpacity={0.9} onPress={this.goDetail.bind(this, rowData.project_name, rowData.project_id)}>
              <Text style={styles.infoTitle}>{rowData.project_name}<Text style={styles.infoTitleSpan}>  的{this._renderNewsType(rowData.information_type)}</Text></Text>
            </TouchableOpacity>
            <View style={styles.infoDescBox}>
              {this._renderNewsContent(rowData)}
            </View>
            {this._renderNewsFooter(rowData)}
          </View>
        </View>
    )
  }

  _renderNewsFooter(news) {
    if (news.project_id !== '154') {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.timeText, {maxWidth: 0.6 * width}]} numberOfLines={1}>{news.plan_name_list.map((item) => item.plan_name).join(',').toString()}</Text>
          <Text style={styles.timeText} numberOfLines={1}>{(news.plan_name_list.length > 0 ? ' · ' : '') + formatDateString(news.release_time)}</Text>
        </View>
      )
    }
  }

  _renderNewsContent(news) {
    if (news.information_type === '1') {
      return (
        <TouchableOpacity activeOpacity={0.5} onPress={this.goNewsWebPage.bind(this, news.data_title, news.data_id)}>
          <Text style={styles.infoDesc} numberOfLines={2}>{news.data_title}</Text>
        </TouchableOpacity>
      )
    }else if (news.information_type === '2') {
      return (
        <TouchableOpacity activeOpacity={0.5} onPress={this.goNewsWebPage.bind(this, news.data_title, news.data_id)}>
            <Text style={styles.infoDesc} numberOfLines={news.is_investor === '1' ? 2 : 1}>{news.data_title}</Text>
            {news.is_investor === '1' ? '' : <Text style={styles.infoRowTitle}>（仅限已投资该项目的投资人查看！)</Text>}
        </TouchableOpacity>
      )
    }else if (news.information_type === '98') {
      return (
        <TouchableOpacity activeOpacity={0.5} onPress={news.is_investor === '1' ? this.goNewsWebPage.bind(this, news.data_title, news.file_info.visit_path) : undefined}>
            <Text style={styles.infoDesc} numberOfLines={news.is_investor === '1' ? 2 : 1}>{news.data_title}</Text>
            {news.is_investor === '1' ? '' : <Text style={styles.infoRowTitle}>（仅限已投资该项目的投资人查看！)</Text>}
        </TouchableOpacity>
      )
    }else if (news.information_type === '99') {
      return (
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.infoRowDesc}><Text style={styles.infoRowTitle}>融资日期：</Text>{news.valuation_info.invest_date}</Text>
          <Text style={styles.infoRowDesc}><Text style={styles.infoRowTitle}>融资金额：</Text>{news.valuation_info.investment_amount}万</Text>
          <Text style={styles.infoRowDesc}><Text style={styles.infoRowTitle}>所属阶段：</Text>{news.valuation_info.financing_stage}</Text>
          <Text style={styles.infoRowDesc}><Text style={styles.infoRowTitle}>投后估值：</Text>{news.valuation_info.post_investment_valuation === '0.00' ? '未公布' : news.valuation_info.post_investment_valuation + '万'}</Text>
        </TouchableOpacity>
      )
    }
  }

  _renderNewsType(type) {
    let result = '新闻资讯'
    switch (type) {
      case '1':
        result = '新闻资讯'
        break;
      case '2':
        result = '回报事件'
        break;
      case '98':
        result = '披露事件'
        break;
      case '99':
        result = '融资事件'
        break;
      default:
        result = '新闻资讯'
    }
    return result
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
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f3f4f6',
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

export default NewsListItem
