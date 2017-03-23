/**
 * Created by Administrator on 2017/3/20.
 */
angular.module("cart",["ui.router","AGoods","nav"])
    .controller("cartCtrl",["$scope", function ($scope) {

    }])
    .config(["$stateProvider", function ($stateProvider) {
        //1、全部商品模块配置
        $stateProvider.state({
            url:"/agoods",
            name:"nav.agoods",
            templateUrl:"../pages/all_goods.html",
            controller:"AGoods_Ctrl"
        })
        //2、顶部导航栏设置
        $stateProvider.state({
            url:"/nav",
            name:"nav",
            templateUrl:"../pages/nav.html",
            controller:"nav_Ctrl"
        })
    }])