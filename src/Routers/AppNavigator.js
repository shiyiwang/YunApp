import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation'

import Home from '../Containers/Home'
import Touhou from '../Containers/Touhou'
import BigBomb from '../Containers/BigBomb'
import UserCenter from '../Containers/UserCenter'
import Login from '../Containers/Login'
import ProjectDetailPage from '../Containers/ProjectDetailPage'
import ForgetPassPage from '../Component/Login/ForgetPassPage'
import SettingPage from '../Component/UserCenter/Setting/SettingPage'
import WalletPage from '../Component/UserCenter/Wallet/WalletPage'
import FrozenPrice from '../Component/UserCenter/Wallet/FrozenPrice'
import Bill from '../Component/UserCenter/Wallet/Bill'
import Coupon from '../Component/UserCenter/Wallet/Coupon'
import BankCard from '../Component/UserCenter/Wallet/BankCard'
import AddBankCard from '../Component/UserCenter/Wallet/AddBankCard'
import Score from '../Component/UserCenter/Wallet/Score'
import MemberPage from '../Component/UserCenter/Member/MemberPage'
import OrderPage from '../Component/UserCenter/Order/OrderPage'
import InvestPage from '../Component/UserCenter/Invest/InvestPage'
import BonusPage from '../Component/UserCenter/Bonus/BonusPage'
import MessagePage from '../Component/UserCenter/Message/MessagePage'
import WebViewPage from '../Component/Common/WebViewPage'


const HomeNavigator = TabNavigator({
  Home: {screen: Home},
  Touhou: {screen: Touhou},
	BigBomb: {screen: BigBomb},
	UserCenter: {screen: UserCenter}
}, {
	tabBarComponent: TabBarBottom,
	animationEnabled: false, // 切换页面时显示动画
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: true, // 左右滑动
  lazyLoad: true, // 懒加载
  tabBarOptions: {
    activeTintColor: '#FF6700', // 文字和图片选中颜色
    inactiveTintColor: '#999999', // 文字和图片默认颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
    style: {
        backgroundColor: '#fff', // TabBar 背景色
    },
    labelStyle: {
        fontSize: 12, // 文字大小
				marginBottom: 2
    },
  }
});

const MainNavigator = StackNavigator(
  {
  	HomeNavigator: {
      screen: HomeNavigator,
      navigationOptions: {
  			header: null
      }
    },
  	WalletPage: { screen: WalletPage },
  	FrozenPrice: { screen: FrozenPrice },
    Bill: {screen: Bill},
    Coupon: {screen: Coupon},
    Score: {screen: Score},
    BankCard: { screen: BankCard },
    AddBankCard: { screen: AddBankCard },
    MemberPage: {screen: MemberPage},
    OrderPage: {screen: OrderPage},
    InvestPage: {screen: InvestPage},
    BonusPage: {screen: BonusPage},
    MessagePage: {screen: MessagePage},
    SettingPage: {screen: SettingPage},
    WebViewPage: {screen: WebViewPage},
    ForgetPass: { screen: ForgetPassPage},
    ProjectDetailPage: { screen: ProjectDetailPage}
  }, {
	mode: 'card',
	headerMode: 'screen'
});

const LoginNavigator = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    ForgetPass: { screen: ForgetPassPage}
  }, {
  mode: 'card',
  headerMode: 'screen'
})

const AppNavigator = StackNavigator(
  {
    Main: { screen: MainNavigator },
    LoginNavigator: { screen: LoginNavigator },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default AppNavigator;
