import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/common/IndexPage.vue'
import Index from '@/components/common/Index.vue'

import Login from '@/components/login/Login.vue'
import ShopInfo from '@/components/shop/ShopInfo.vue'
import ShopEdit from '@/components/shop/ShopEdit.vue'
import ShopRecord from '@/components/shop/ShopRecord.vue'
import ProdList from '@/components/product/ProdList.vue'
import ProdView from '@/components/product/ProdView.vue'
import ProdPub from '@/components/product/ProdPub.vue'
import AfterProcess from '@/components/aftermarket/AfterProcess.vue'
import AfterLocation from '@/components/aftermarket/AfterLocation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage,
      children:[
        //1、Default router
        {   path:'',  name:'Index',  component:Index  },
        {   path:'shopmain_info',  name:'ShopInfo',  component:ShopInfo  },
        {   path:'shopmain_edit',  name:'ShopEdit',  component:ShopEdit  },
        {   path:'shopmain_record',  name:'ShopRecord',  component:ShopRecord  },
        {   path:'prod_list',  name:'ProdList',  component:ProdList  },
        {   path:'prod_view',  name:'ProdView',  component:ProdView  },
        {   path:'prod_publish',  name:'ProdPub',  component:ProdPub  },
        {   path:'aftermarket_process',  name:'AfterProcess',  component:AfterProcess  },
        {   path:'aftermarket_location',  name:'AfterLocation',  component:AfterLocation  },
      ]
    },
    //2、Login page
    {   path:'/login',  name:'Login',   component:Login   }
  ]
})
