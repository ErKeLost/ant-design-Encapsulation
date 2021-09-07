import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'

// default router permission control
// 默认路由器权限控制 2021.9.7
import permission from './modules/permission'

// dynamic router permission control (Experimental)
// 实验性 动态路由后台管理生成
// import permission from './modules/async-router'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    permission
  },
  state: {},
  mutations: {},
  actions: {},
  getters
})
