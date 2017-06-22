import Vue from 'vue'
import Router from 'vue-router'

import Goods from "@/components/goods.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: Goods,
      children:[

      ]
    },
  ]
})
