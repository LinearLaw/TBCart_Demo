# TBCart_Demo
    淘宝网购物车Demo。

##  框架
    angular 版本为v1.6.3
    vue     版本为v2.5.2
    react   版本为v16.2.0

##  Angular 1.6.3
    1、使用angular进行了模块划分；
    2、ui-router路由嵌套实现页面加载；
    3、数据绑定单价和总价关联；
    4、顺便练习了一下css和html布局
    5、$http完成ajax，获取json中的内容

##  vue 2.5.2

    vue-cli脚手架搭建项目目录
    vue + vue-router + vuex + axios + swiper
        1、商品单选、商品店铺全选、商品全选
        2、动态计算总价格
        3、增减商品数量
        4、底部广告轮播图

##  react 16.2.0

    create-react-app脚手架搭建
    更新中。


##  结构

    Type_angular_1.6.3
        │  
        ├─data                  //json数据文件夹
        │      cart.json
        │      copys.json
        │      navinfo.json
        │      service.json
        ├─fonts                 //字体文件
        ├─images                //图片资源
        ├─js                    //主js文件夹
        │      all_goods.js     //购物车详细内容模块
        │      index.js         //配置购物车主模块
        │      nav.js           //顶部header和底部footer
        ├─less
        │      base.less        //通用样式
        │      index.less       //主页面样式
        │      nav.less         //底部导航样式
        ├─pages
        │      all_goods.html   //购物车详细信息页面
        │      index.html       //主页面
        │      nav.html         //header和footer
        └─plugins               //用到的js插件
            ├─angular
            ├─angular-ui-router
            ├─less
            └─swiper
                ├─css
                └─js

    Type_vue_2.5.2
        │
        │  .babelrc
        │  .gitignore
        │  .postcssrc.js
        │  index.html               主html页
        │  package.json
        │  README.md
        │  
        ├─build
        ├─config                    
        ├─src                       源代码
        │  │  App.vue               app主入口组件
        │  │  main.js               app主组件
        │  │  
        │  ├─assets                 静态资源文件
        │  │  ├─css                 
        │  │  │      
        │  │  ├─fonts
        │  │  │      
        │  │  └─img
        │  │          
        │  ├─components             子组件
        │  │      goods.vue
        │  │      
        │  ├─router                 路由配置
        │  │      index.js
        │  │      
        │  └─store                  vuex配置
        │          actions.js
        │          getters.js
        │          index.js
        │          mutation-types.js
        │          mutations.js
        │          state.js
        │          
        ├─static                    生产环境静态文件
        │  │  
        │  ├─json
        │  │      cart.json
        │  │      copys.json
        │  │      navinfo.json
        │  │      service.json
        │  │      
        │  └─swiper
        │      ├─css
        │      │      
        │      └─js
        └─test
