/**
 * 投后
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  Platform
} from 'react-native';

import { connect } from 'dva'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import CustomTabBar from '../Component/Common/CustomTabBar'
import CommonLoading from '../Component/Common/Loading'
import NewsListItem from '../Component/Touhou/NewsListItem'
import ProjectsListItem from '../Component/Touhou/ProjectsListItem'

import { createAction, NavigationActions } from '../Utils'

class TouhouClass extends Component {
  static navigationOptions = {
    tabBarLabel: '投后',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../../img/touhou.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }

  constructor(props){
      super(props)
      this.state = {
        fetchingNews: false,
        fetchingProjects: false
      }
  }

  componentDidMount() {
    this.props.dispatch(createAction('touhou/getNews')({information_type: '1,2,98,99', list_rows: 5}))
    this.props.dispatch(createAction('touhou/getProjects')())
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={[styles.headerItem, {borderRightWidth: 1, borderRightColor: 'rgba(255,255,255,0.2)'}]}>
            <Text style={styles.headerTitle}>4476.4<Text style={styles.headerTitleSpan}>万元</Text></Text>
            <Text style={styles.headerDesc}>累计募集</Text>
          </View>
          <View style={styles.headerItem}>
            <Text style={styles.headerTitle}>128<Text style={styles.headerTitleSpan}>个</Text></Text>
            <Text style={styles.headerDesc}>投资项目</Text>
          </View>
        </View>
        <ScrollableTabView
          renderTabBar={() => (<CustomTabBar style={{height: 40, backgroundColor: '#F0F0F0'}} touchableStyle={{flex: 1}} />)}
          >
          <View tabLabel="动态" style={styles.tabView}>
            {
              this.props.fetchingNews ?
                <CommonLoading />
              :
                <NewsListItem data={this.props.news} navigation={this.props.navigation} dispatch={this.props.dispatch}/>
            }
          </View>
          <View tabLabel="项目" style={styles.tabView}>
            {
              this.props.fetchingProjects ?
                <CommonLoading />
              :
                <ProjectsListItem data={this.props.projects} navigation={this.props.navigation}/>
            }
          </View>
        </ScrollableTabView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  icon: {
    height: 26,
		width: 26,
		resizeMode: 'contain'
  },
  container: {
    flex: 1
  },
  header: {
    height: 120,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#1b3d54',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  headerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  headerTitleSpan: {
    fontSize: 14
  },
  headerDesc: {
    paddingTop: 3,
    fontSize: 12,
    color: 'rgba(255,255,255,0.5)'
  },
  tabView: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});

function mapState (state) {
  return ({ touhou }) => ({ ...touhou })
}

const Touhou = connect(mapState)(TouhouClass);

export default Touhou
