import request from '../Request'
import { Message, MessageBox } from 'element-ui'
import Cookies from '../Cookies'

export function login(param) {
  request.post('/login', param).then(res => {
    this.store.commit('', res.data)
  })
}
