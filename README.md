# TBCart_Demo
    淘宝网购物车Demo。
##  基本功能
    1、使用angular进行了模块划分，易于维护；
    2、路由嵌套实现页面加载；
    3、数据绑定实现单价和总价关联；
    4、顺便练习了一下css和html布局
    5、模拟了ajax请求数据，获取json中的内容
##  结构
|-data              //json数据文件夹
|-fonts             //字体文件
|-images            //图片资源

|-js                //主js文件夹
|---all_goods.js    //购物车详细内容模块
|---index.js        //配置购物车主模块
|---nav.js          //顶部header和底部footer

|-less
|---base.less       //通用样式
|---index.less      //主页面样式
|---nav.less        //底部导航样式

|-pages
|---all_goods.html  //购物车详细信息页面
|---index.html      //主页面
|---nav.html        //header和footer

|-plugins           //用到的js插件
