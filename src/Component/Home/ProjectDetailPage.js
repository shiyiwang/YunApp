/**
 * 项目详情页
 */
import React,{Component} from 'react'
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  WebView
} from 'react-native'

import Iconfont from 'react-native-vector-icons/Iconfont';

const {width} = Dimensions.get('window');

const html = "<p style='text-align: center'><img src='http://img2.yunipo.com/image/20170121/1484967578656145.jpg' /></p>";

class ProjectDetailPage extends Component {
  static navigationOptions = {
    title: '笨鸟分期',
    headerStyle: {backgroundColor: '#EEEEEE', shadowOpacity: 0, elevation: 0},
    headerTintColor: '#333333'
  }

  constructor(props){
      super(props)
      this.state = {
        lineWidth: 0.2 * (width - 20)
      }
  }

  componentDidMount() {
    StatusBar.setBarStyle('default')
  }

  componentWillUnMount() {
    StatusBar.setBarStyle('light-content')
  }

  render(){
    return (
      <ScrollView style={styles.container}>
        {/* 页头START */}
        <View style={styles.header}>
          <View style={styles.imageBox}>
            <Image
              style={styles.bgImage}
              source={{uri: 'http://static.yunipo.com/images/1607/xsb1.png'}}
            />
          </View>
          <View style={styles.fontBox}>
            <View style={styles.headerFlagBox}>
              <View style={styles.headerFlag}>
                <Text style={styles.headerFlagText}>进行中</Text>
              </View>
              <View style={[styles.headerFlag, styles.headerFlagInvite]}>
                <Text style={styles.headerFlagText}>邀</Text>
              </View>
            </View>
            <Text style={styles.title}>笨鸟分期</Text>
            <View style={styles.descBox}>
              <Text style={styles.desc}>培训教育分期界的预选独角兽培训教育分期界的预选独角兽</Text>
            </View>
            <View style={styles.headerTagBox}>
              <Iconfont name="tag" size={16} color='rgba(255,255,255,0.6)'></Iconfont>
              <Text style={styles.headerTag}>双项目合投</Text>
              <Text style={styles.headerTag}>合投宝</Text>
              <Text style={styles.headerTag}>增速惊人</Text>
            </View>
          </View>
        </View>
        {/* 页头END */}
        {/* 预约进程 START */}
        <View style={styles.preOrderBox}>
          <View style={styles.preOrderHead}>
            <Text style={styles.preOrderHeadTitle}>预约进程</Text>
            <View style={styles.preOrderHeadTimeBox}>
              <Iconfont name="clock" size={16} color='#83c44e'></Iconfont>
              <Text style={styles.preOrderHeadTimeText}>剩余92天</Text>
            </View>
          </View>
          <View style={styles.preOrderBd}>
            <View style={styles.progressBox}>
              <View style={styles.progressBg}></View>
              <View style={[styles.progress, {width: this.state.lineWidth}]}>
                <View style={[styles.progressColor, {width: this.state.lineWidth}]}></View>
                <View style={styles.progressDesc}>
                  <Text style={styles.progressText}>20%</Text>
                </View>
              </View>
            </View>
            <View style={styles.preOrderContent}>
              <View style={styles.preOrderContentItem}>
                <Text style={styles.preOrderContentItemTitle}>2000万</Text>
                <Text style={styles.preOrderContentItemDesc}>目标金额</Text>
              </View>
              <View style={[styles.preOrderContentItem, styles.preOrderContentItemCenter]}>
                <Text style={styles.preOrderContentItemTitle}>1000元</Text>
                <Text style={styles.preOrderContentItemDesc}>单份价格</Text>
              </View>
              <View style={styles.preOrderContentItem}>
                <Text style={styles.preOrderContentItemTitle}>1000元</Text>
                <Text style={styles.preOrderContentItemDesc}>起投金额</Text>
              </View>
            </View>
          </View>
        </View>
        {/* 预约进程 END */}

        {/* 图文详情 START */}
        <View style={styles.detailBox}>
          <View style={styles.detailHead}>
            <Text style={styles.detailHeadText}>图文详情</Text>
          </View>
          <View style={{flex: 1}}>
            <WebView
              style={{width: width, paddingTop: 400}}
              source={{html: "<p style='text-align: center;padding: 0;margin:0;'><img style='width: 100%' src='http://img2.yunipo.com/image/20170121/1484967578656145.jpg' /></p>"}}
              scalesPageToFit={true}
              javaScriptEnabled={true}
              automaticallyAdjustContentInsets={true}
            />
          </View>
        </View>
        {/* 图文详情 END */}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: width,
    height: 160
  },
  imageBox: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  bgImage: {
    flex: 1,
    resizeMode: "stretch"
  },
  fontBox: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  descBox: {
    marginTop: 10,
    maxWidth: width * 0.85,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,.3)'
  },
  desc: {
    fontSize: 12,
    color: '#FFFFFF'
  },
  headerFlagBox: {
    position: 'absolute',
    top: 10,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerFlag: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 5,
    backgroundColor: '#83c44e',
    borderRadius: 5
  },
  headerFlagInvite: {
    backgroundColor: '#e53935'
  },
  headerFlagText: {
    fontSize: 12,
    color: '#FFFFFF'
  },
  headerTagBox: {
    position: 'absolute',
    bottom: 0,
    height: 30,
    width: 0.85 * width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTag: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
    marginRight: 10,
  },
  preOrderBox: {
    backgroundColor: '#FFFFFF'
  },
  preOrderHead: {
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC'
  },
  preOrderHeadTitle: {
    fontSize: 14,
    color: '#333333'
  },
  preOrderHeadTimeBox: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  preOrderHeadTimeText: {
    marginLeft: 3,
    fontSize: 14,
    color: '#83c44e'
  },
  preOrderBd: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 15,
  },
  progressBox: {
    height: 30
  },
  progressBg: {
    position: 'absolute',
    top: 13,
    left: 0,
    height: 4,
    width: width - 20,
    backgroundColor: '#ECECEC'
  },
  progress: {
    position: 'absolute',
    top: 6,
    left: 0,
    height: 18,
    width: 130,
    maxWidth: width - 20,
    minWidth: 37,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  progressColor: {
    height: 4,
    width: width - 20,
    backgroundColor: '#FF6700'
  },
  progressDesc: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 18,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 7,
    backgroundColor: '#FF6700',
    alignItems: 'center',
    justifyContent: 'center'
  },
  progressText: {
    fontSize: 12,
    color: '#FFFFFF'
  },
  preOrderContent: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  preOrderContentItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  preOrderContentItemCenter: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ECECEC'
  },
  preOrderContentItemTitle: {
    fontSize: 14,
    color: '#333333'
  },
  preOrderContentItemDesc: {
    paddingTop: 3,
    fontSize: 14,
    color: '#999999'
  },
  detailBox: {
    marginTop: 10,
    backgroundColor: '#FFFFFF'
  },
  detailHead: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingLeft: 10
  },
  detailHeadText: {
    fontSize: 14,
    color: '#333333'
  }
})

export default ProjectDetailPage
