import request from '../Request'
import {setToken} from '../CookieService'

/**
 * 登录
 * @param param
 */
export function login(param) {
  return request.post('/api/login', param)
}
