import appModel from './app'
import homeModel from './home'
import router from './router'

export function registerModels(app) {
  app.model(appModel)
  app.model(homeModel)
  app.model(router)
}
