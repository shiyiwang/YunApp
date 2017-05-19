/**
 * 轮播图组件
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window');

class HomeSwiper extends Component {
  constructor(props){
    super(props)
  }

  static defaultProps = {
    data:[]
  };

  render() {
    return (
      <View>
        <Swiper style={styles.wrapper}
          loop={true}
          index={0}
          autoplay={true}
          horizontal={true}
          autoplayTimeout={4}
          height={200}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          paginationStyle={styles.paginationStyle}
        >
          {this.renderImg()}
        </Swiper>
      </View>
    );
  }

  renderImg(){
      let imageViews=[];
      let Datas = this.props.data;
      for(var i = 0; i < Datas.length; i++){
          let itemData = Datas[i];
          imageViews.push(
            <View key={i}>
              <TouchableOpacity activeOpacity={0.5} onPress={this.goDetail.bind(this,itemData.product_id)}>
                <View style={styles.container}>
                  <View style={styles.imageBox}>
                    <Image
                      style={styles.bgImage}
                      source={{uri:itemData.main_img_url.replace('/static', 'http://static.yunipo.com')}}
                    />
                  </View>
                  <View style={styles.fontBox}>
                    <Text style={styles.title}>{itemData.product_name}</Text>
                    <View style={styles.descBox}>
                      <Text style={styles.desc}>{itemData.slogan}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
      }
      return imageViews;
  }

  goDetail(id){
    this.props.navigation.navigate('ProjectDetailPage')
  }

}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 200
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
  dot: {
    backgroundColor: '#b4afae',
    width: 7,
    height: 7,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  activeDot: {
    backgroundColor: '#FF6700',
    width: 7,
    height: 7,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  paginationStyle: {
    bottom: 15,
    alignItems: 'center'
  }
})

export default HomeSwiper;
