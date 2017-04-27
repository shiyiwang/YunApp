import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const CouponTabBar = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  },

  render() {
    return <View style={[styles.container, this.props.style]}>
      {this.props.tabs.map((tab, i) => {
        const color = this.props.activeTab === i ? '#FF6700' : '#666666';
        return (
            <View style={this.props.activeTab === i ? styles.active : styles.normal}>
              <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <Text style={styles.font} style={{color: color}}>{tab}</Text>
                </TouchableOpacity>
            </View>
        )
      })}
    </View>;
  },
});

const styles = StyleSheet.create({
  container: {
    height: 35,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF6700',
    flex: 1
  },
  normal: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
    flex: 1
  },
  font: {
    fontSize: 10
  }
});

export default CouponTabBar;
