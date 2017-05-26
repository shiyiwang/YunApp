import { request } from '../Utils/RequestUtils'

export const login = async (payload) => {
  const result = request('http://wangshiyi.yunipo.com/apps/login', 'POST', payload)

  return result;
}
