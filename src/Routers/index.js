import React, { PureComponent } from 'react'
import { BackAndroid } from 'react-native'
import {
  addNavigationHelpers,
  NavigationActions,
} from 'react-navigation'
import { connect } from 'dva'

import AppNavigator from './AppNavigator'

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
    BackAndroid.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getCurrentScreen(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Main') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
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
