
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import * as state from './state'
// import cart from './modules/cart'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'     //vuex的logger插件的配置，单独设置在一个文件里

// const debug = process.env.NODE_ENV !== 'production'      //vuex在开发环境下开启严格模式的设置
Vue.use(Vuex)

export default new Vuex.Store({
  actions,    //共用的actions
  getters,    //共用的getters
  mutations,
  state,
  /**
   * @description  modules用于将vuex的各个组件的状态进行一定程度的分割，避免所有的状态写在一起变得臃肿
   *               每个modules都拥有actions/getter/mutations/state四个完整的部分，
   *               通过添加前缀进行访问特定组件的状态，例如this.$state.cart.cart内部的方法
   */
  // modules: {
    // cart,
    // products
  // },
  /**
   * @description strict:   设置只有在非production环境下才开启严格模式
   *              plugins:  vuex提供一个日志插件用于调试代码，仅在开发环境下使用
   */
  // strict: debug,                           //
  // plugins: debug ? [createLogger()] : []   //
})
