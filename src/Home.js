import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Iconfont from 'react-native-vector-icons/Iconfont';

import HomeComponent from './Component/Home/HomeComponent';
import UserCenterComponent from './Component/UserCenter/UserCenterComponent';

export default class Home extends Component{
    static defaultProps = {
        selectedColor: '#FF6700',
        normalColor: '#999999'
    }

    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'Home',
            tabName: ['推荐','我的']
        }
    }

    render() {
        const {selectedColor} = this.props;
        const {tabName} = this.state;
        return(
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TabNavigator
                hidesTabTouch={true}
                tabBarStyle={styles.tabbar}
                sceneStyle={{ paddingBottom: styles.tabbar.height }}>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[0]}
                    selected={this.state.selectedTab === 'Home'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.HomeNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.HomeSelected} />}
                    onPress={() => this.setState({ selectedTab: 'Home' })}>
                    {<HomeComponent navigator={this.props.navigator}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[1]}
                    selected={this.state.selectedTab === 'UserCenter'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.UserCenterNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.UserCenterSelected} />}
                    onPress={() => this.setState({ selectedTab: 'UserCenter' })}>
                    {<UserCenterComponent navigator={this.props.navigator} />}
                </TabNavigator.Item>
            </TabNavigator>
          </View>
        )
    }

    componentWillMount() {
        const {selectedColor, normalColor} = this.props;
        Iconfont.getImageSource('推荐', 50, normalColor).then((source) => this.setState({ HomeNormal: source }));
        Iconfont.getImageSource('推荐', 50, selectedColor).then((source) => this.setState({ HomeSelected: source }));
        Iconfont.getImageSource('我的', 50, normalColor).then((source) => this.setState({ UserCenterNormal: source }));
        Iconfont.getImageSource('我的', 50, selectedColor).then((source) => this.setState({ UserCenterSelected: source }));
    }
};

const styles = StyleSheet.create({
    tabbar: {
        height: 45,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#dcdcdc'
    },
    tabStyle:{
        paddingTop: 3
    },
    rightBorder: {
      borderRightWidth: 1,
      borderRightColor: '#dddddd',
      borderStyle: 'solid'
    },
    tab: {
        width: 22,
        height: 22
    }
});
