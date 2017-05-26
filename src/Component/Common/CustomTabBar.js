import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const CustomTabBar = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  },

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {
          this.props.tabs.map((tab, i) => {
            const isActive = this.props.activeTab === i
            return (
              <TouchableOpacity style={this.props.touchableStyle} activeOpacity={0.5} key={tab} onPress={() => this.props.goToPage(i)}>
                <View style={[styles.tab, isActive ? {borderBottomColor: '#FF6700'} : {}]}>
                  <Text style={[styles.font, isActive ? {color: '#FF6700'} : {}]}>{tab}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
});

const styles = StyleSheet.create({
  container: {
    height: 35,
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    justifyContent: 'space-around'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 4,
    paddingRight: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2'
  },
  font: {
    fontSize: 14,
    color: '#666666'
  }
});

export default CustomTabBar;
