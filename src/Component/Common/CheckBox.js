/**
 * Checkbox组件
 */
import React,{Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      internalChecked: this.props.checked || false
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    let internalChecked = this.state.internalChecked;

    if(this.props.onChange){
      this.props.onChange(!internalChecked);
    }
    this.setState({
        internalChecked: !internalChecked
    });
  }

  componentDidMount() {
    if (this.props.checked) {
      this.setState({internalChecked: true})
    }
  }

  render(){
    const { checkBoxStyle, labelStyle, label } = this.props

    return (
      <TouchableOpacity onPress={this.onChange} activeOpacity={0.8} style={styles.flexContainer}>
        <View style={[styles.container, checkBoxStyle]}>
          <View style={styles.checkBox}>
            <Icon name={this.state.internalChecked ? "check-square" : "square-o"} size={16} color='#FF6700'></Icon>
          </View>
          <View style={styles.labelContainer}>
            <Text style={[styles.label, labelStyle]}>{label}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkBox: {
    width: 16
  },
  labelContainer: {
    marginLeft: 5,
    marginRight: 5,
  },
  label: {
    fontSize: 13,
    color: '#666666'
  }
})

export default CheckBox
