import { createAction } from '../Utils'
import * as touhouService from '../Services/touhou'

export default {
  namespace: 'touhou',
  state: {
    fetchingNews: false,
    fetchingProjects: false,
    news: [],
    projects: [],
  },
  reducers: {
    fetchNewsStart(state, { payload }) {
      return { ...state, ...payload, fetchingNews: true }
    },
    fetchNewsEnd(state, { payload }) {
      return { ...state, ...payload, fetchingNews: false }
    },
    fetchProjectsStart(state, { payload }) {
      return { ...state, ...payload, fetchingProjects: true }
    },
    fetchProjectsEnd(state, { payload }) {
      return { ...state, ...payload, fetchingProjects: false }
    },
    saveMoreNews(state, { payload }) {
      return Object.assign({}, state, payload)
    }
  },
  effects: {
    *getNews({ payload }, { call, put }) {
      yield put(createAction('fetchNewsStart')())
      const news = yield call(touhouService.getNews, payload)

      yield put(createAction('fetchNewsEnd')({news: news}))
    },
    *loadMoreNews({ payload }, { call, put }) {
      const news = yield call(touhouService.getNews, payload)

      yield put(createAction('saveMoreNews')({news: news}))
    },
    *getProjects({ payload }, { call, put}) {
      yield put(createAction('fetchProjectsStart')())
      const projects = yield call(touhouService.getProjects, payload)

      yield put(createAction('fetchProjectsEnd')({projects: projects}))
    }
  },
}
