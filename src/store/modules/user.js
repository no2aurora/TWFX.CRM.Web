// 基础数据
const user = {
  state: {
    token: ''
  },
  mutations: {
    token(state, token) {
      state.token = token
    }
  },
  getters : {
    token: state => state.token
  }
}
/**
 * 声明vuex中的几个模块，保证其可以全局使用
 */
export default user
