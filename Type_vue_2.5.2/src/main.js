
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import Vuex from 'vuex'
import axios from "vue-axios"

import "../static/swiper/css/swiper.min.css"
import "./assets/css/common.css"

Vue.use(Vuex);
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
