import { request } from '../Utils/RequestUtils'

export const getHomeAd = async () => {
  const result = request('http://m.yunipo.com/test/homesliderdata', 'POST')

  return result;
}

export const getHomeProducts = async () => {
  const result = request('http://m.yunipo.com/test/homeProductData', 'POST')

  return result;
}
