import React, { PureComponent } from 'react'
import { BackHandler } from 'react-native'
import {
  addNavigationHelpers,
  NavigationActions,
} from 'react-navigation'
import { connect } from 'dva'

import AppNavigator from './AppNavigator'
import ToastUtils from '../Utils/ToastUtils'

function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentScreen(route)
  }
  return route.routeName
}

class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getCurrentScreen(this.props.router)

    if (currentScreen === 'Home') {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        return false
      }
      ToastUtils.showShort('再按一次退出应用')
      this.lastBackPressed = Date.now()
      return true;
    }

    this.props.dispatch(NavigationActions.back())
    return true
  }

  render() {
    const { dispatch, router } = this.props
    const navigation = addNavigationHelpers({ dispatch, state: router })
    return <AppNavigator navigation={navigation} />
  }
}

export function routerReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state)
}

function mapState (state) {
  return ({ router }) => ({ router })
}

const RootRouter = connect(mapState)(Router);

export default RootRouter
