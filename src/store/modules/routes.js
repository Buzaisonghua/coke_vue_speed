// 路由模块
import asyncRoutes, { asyncConfig } from '@/router/routes/async-routes'
import PowerRoutes from '@/router/routes/power-routes'
import TaskRoutes from '@/router/routes/task-routes'
import constantRoutes from '@/router/routes/constant-routes'
import InformationRoutes from '@/router/routes/information-routes'

const state = {
  routes: []
}
const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = routes
  }
}
const actions = {
  setRoutes({ commit }, routes) {
    commit('SET_ROUTES', routes)
  },
  generateRoutes({ commit }, roles) {
    // 根据后台的返回值判断对应的路由
    return new Promise(resolve => {
      const accessedRoutes = asyncRoutes.concat(constantRoutes, TaskRoutes, InformationRoutes, PowerRoutes, asyncConfig)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
