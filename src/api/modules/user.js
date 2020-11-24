import request from '../Request'
import { Message, MessageBox } from 'element-ui'
import {setToken} from '../CookieService'

/**
 * 登录
 * @param param
 */
export function login(param) {
  request.post('/api/login', param).then(res => {
    this.store.user.commit('', res.data)
    setToken(res.data)
  })
}
