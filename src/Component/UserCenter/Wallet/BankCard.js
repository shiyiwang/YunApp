/**
 * 银行卡
 */
import React,{Component} from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'

const {width} = Dimensions.get('window');

class BankCard extends Component {
  static navigationOptions = {
    title: '银行卡',
    headerStyle: {backgroundColor: '#fa7642'},
    headerTintColor: '#FFFFFF'
  }

  constructor(props){
    super(props);
    this.handleAddBankCard = this.handleAddBankCard.bind(this);
    this.state = {
      cardList: [
        {bankName: '中信银行', cardNum: '**** **** **** 4609', userName: '吴家龙', typeName: '储蓄卡'},
        {bankName: '招商银行', cardNum: '**** **** **** 3042', userName: '吴家龙', typeName: '储蓄卡'}
      ]
    }
  }

  handleAddBankCard() {
    this.props.navigation.navigate('AddBankCard')
  }


  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          {
            this.state.cardList.map((item, index) => {
              return (
                <View style={styles.cardBox}>
                  <View style={styles.cardInfo}>
                    <Text style={styles.bankName}>{item.bankName}</Text>
                    <Text style={styles.cardNum}>{item.cardNum}</Text>
                    <Text style={styles.userName}>{item.userName}</Text>
                  </View>
                  <View style={styles.cardType}>
                    <Text style={styles.typeName}>{item.typeName}</Text>
                  </View>
                </View>
              )
            })
          }
          <TouchableOpacity onPress={this.handleAddBankCard}>
            <View style={[styles.cardBox, styles.blankCardBox]}>
              <View style={styles.addBtn}>
                <View style={styles.addBtnRow}></View>
                <View style={styles.addBtnColumn}></View>
              </View>
              <Text style={styles.addText}>添加银行卡</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F2F2'
  },
  cardBox: {
    width: 0.93 * width,
    backgroundColor: '#fa7642',
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  cardInfo: {
    flex: 3,
    justifyContent: 'space-between'
  },
  bankName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  cardNum: {
    fontSize: 14,
    color: '#FFFFFF',
    height: 50,
    lineHeight: 50
  },
  userName: {
    fontSize: 14,
    color: '#b3451b'
  },
  cardType: {
    flex: 1,
    width: 40,
    alignSelf: 'flex-start',
  },
  typeName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#b3451b',
    textAlign: 'right'
  },
  blankCardBox: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  addBtn: {
    height: 40,
    width: 40,
    marginBottom: 10,
  },
  addBtnRow: {
    position: 'absolute',
    top: 20,
    left: 2,
    height: 2,
    width: 36,
    backgroundColor: '#CCCCCC'
  },
  addBtnColumn: {
    position: 'absolute',
    top: 2,
    left: 19,
    height: 36,
    width: 2,
    backgroundColor: '#CCCCCC'
  },
  addText: {
    fontSize: 16,
    color: '#999999'
  }
})

export default BankCard
