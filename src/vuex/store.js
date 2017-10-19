import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 需要维护的状态
// 初始化 state
const state = {
  list: [],
  is_login:false,
  current_user:{},
}
// 初始化 mutations
const mutations = {
  is_login() {
    var self = this
    $.ajax({url: '/login',
      async: false,
      success: function (data) {
        if (data.status == "true") {
          self.state.is_login = true
        }
      }
    })
  }
}
// 初始化 actions
const actions = {
  list({commit},data) {
    commit('List',data)
  }
}
// 返回改变后的数值
const getters = {

};
export default new Vuex.Store({
  state,
mutations,
  actions})
