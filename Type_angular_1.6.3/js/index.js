/**
 * Created by Administrator on 2017/3/20.
 */
angular.module("cart",["ui.router","AGoods","nav"])
    .controller("cartCtrl",["$scope", function ($scope) {

    }])
    .config(["$stateProvider", function ($stateProvider) {
        /**
         * @desc 购物车所有商品信息模块的配置
         */
        $stateProvider.state({
            name:"nav.agoods",
            url:"/agoods",
            views:{
                carts:{
                    templateUrl:"../pages/all_goods.html",
                    controller:"AGoods_Ctrl"
                }
            }
        })
        /**
         * @desc 顶部导航栏设置
         */
        $stateProvider.state({
            name:"nav",
            url:"/nav",
            templateUrl:"../pages/nav.html",
            controller:"nav_Ctrl"
        })
        var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 1500,
                autoplayDisableOnInteraction: false,
                observer:true,
                observeParents:true
        });
    }])