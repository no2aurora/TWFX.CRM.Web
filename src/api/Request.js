import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from './CookieService'

// create an axios instance
const service = axios.create({
  baseURL: process.env.SERVER_ADDR, // api 的 base_url
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    let token = store.getters.token
    if (!token) {
      token = getToken()
    }
    config.headers['Authorization'] = 'Bearer ' + token
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    switch (res.code) {
      // token 错误
      case 10003:
        MessageBox.alert(res.msg, '错误', {
          confirmButtonText: '确定',
          type: 'error'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()
          })
        })
        return Promise.reject('error')
      default:
        if (res.code !== 1) {
          // 非5xx的错误属于业务错误，留给具体页面处理
          Message({
            message: res.msg,
            type: 'warning'
          })
          // return Promise.reject(response)
        }
    }
    return response.data
  }, error => {
    console.log('err' + error)// for debug
    Message({
      message: '登录连接超时（后台不能连接，请联系系统管理员）',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
