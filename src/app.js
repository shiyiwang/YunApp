import React from 'react'
import { AsyncStorage } from 'react-native'
import dva from 'dva/mobile'
import { persistStore, autoRehydrate } from 'redux-persist'
import { registerApp } from 'react-native-wechat';

import { registerModels } from './Models'
import Router from './Routers'

const app = dva({
  initialState: {},
  extraEnhancers: [autoRehydrate()],
  onError(e) {
    console.log('onError', e)
  },
})
registerModels(app)
app.router(() => <Router />)
const YunApp = app.start()
registerApp('wxd9c1e8bf4a96e7a7');

// eslint-disable-next-line no-underscore-dangle
// persistStore(app._store, { storage: AsyncStorage })

export default YunApp
