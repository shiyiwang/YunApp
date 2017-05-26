import appModel from './app'
import homeModel from './home'
import touhouModel from './touhou'
import router from './router'
import detailModel from './detail'

export function registerModels(app) {
  app.model(appModel)
  app.model(homeModel)
  app.model(touhouModel)
  app.model(detailModel)
  app.model(router)
}
