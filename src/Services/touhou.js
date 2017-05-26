import { request } from '../Utils/RequestUtils'

export const getNews = async () => {
  const result = request('http://m.yunipo.com/touhou/zixunlist', 'POST')

  return result;
}

export const getProjects = async () => {
  const result = request('http://m.yunipo.com/touhou/projectlist', 'POST')

  return result;
}
