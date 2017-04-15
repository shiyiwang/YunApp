import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const CustomTabBar = React.createClass({
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
          <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
            <View style={this.props.activeTab === i ? styles.active : styles.normal}>
              <Text style={styles.font} style={{color: color}}>{tab}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>;
  },
});

const styles = StyleSheet.create({
  container: {
    marginTop: -5,
    height: 35,
    flexDirection: 'row',
    backgroundColor: '#f2f2f2'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    paddingLeft: 6,
    paddingRight: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#FF6700',
    flex: 1,
    paddingTop: 10
  },
  normal: {
    paddingLeft: 6,
    paddingRight: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2',
    flex: 1,
    paddingTop: 10
  },
  font: {
    fontSize: 10
  }
});

export default CustomTabBar;
