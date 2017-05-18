import { request } from '../Utils/RequestUtils'

export const getHomeAd = async () => {
  const body = JSON.stringify({
    type: 'ad'
  })
  const result = request('http://m.yunipo.com/test/homesliderdata', 'POST', body);

  return result;
}

export const getHomeProducts = async () => {
  const body = JSON.stringify({
    type: 'ad'
  })
  const result = request('http://m.yunipo.com/test/homeProductData', 'POST', body);

  return result;
}
