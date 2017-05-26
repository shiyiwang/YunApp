import { createAction } from '../Utils'
import * as homeService from '../Services/home'

export default {
  namespace: 'detail',
  state: {
    fetching: false,
    product: {
      project_info: {
        full_description: ''
      }
    }
  },
  reducers: {
    fetchStart(state, { payload }) {
      return { ...state, ...payload, fetching: true }
    },
    fetchEnd(state, { payload }) {
      return { ...state, ...payload, fetching: false }
    }
  },
  effects: {
    *getProductById({ payload }, { call, put, select}) {
      yield put(createAction('fetchStart')())
      const ad = yield call(homeService.getHomeProductById, payload)

      let data = []
      if (ad.status === 1) {
        data = ad.data
      }

      yield put(createAction('fetchEnd')({product: data}))
    },
  },
}
