import request from '../request'
import {setToken} from '../cookie-service'

/**
 * 登录
 * @param param
 */
export function login(param) {
  return request.post('/api/login', param)
}

export function getUserInfo() {
  return request.get('/user')
}
