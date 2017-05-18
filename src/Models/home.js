import { createAction } from '../Utils'
import * as homeService from '../Services/home'

export default {
  namespace: 'home',
  state: {
    fetchingAd: false,
    fetchingProduct: false,
    indexAd: [],
    productList: []
  },
  reducers: {
    fetchAdStart(state, { payload }) {
      return { ...state, ...payload, fetchingAd: true }
    },
    fetchAdEnd(state, { payload }) {
      return { ...state, ...payload, fetchingAd: false }
    },
    fetchProductsStart(state, { payload }) {
      return { ...state, ...payload, fetchingProduct: true }
    },
    fetchProductsEnd(state, { payload }) {
      return { ...state, ...payload, fetchingProduct: false }
    },
  },
  effects: {
    *getAd({ payload }, { call, put, select}) {
      yield put(createAction('fetchAdStart')())
      const ad = yield call(homeService.getHomeAd, payload)
      const data = []
      if (ad.status === 1) {
        ad.data.map((value, index) => {
          data.push({
            product_id: value.product_id,
            main_img_url: value.main_img_url || '',
            product_name: value.product_name,
            slogan: value.slogan
          })
        })
      }

      yield put(createAction('fetchAdEnd')({indexAd: data}))
    },
    *getProducts({ payload }, { call, put, select}) {
      yield put(createAction('fetchProductsStart')())
      const ad = yield call(homeService.getHomeProducts, payload)
      let data = []
      if (ad.status === 1) {
        data = ad.data
      }

      yield put(createAction('fetchProductsEnd')({productList: data}))
    },
  },
}
