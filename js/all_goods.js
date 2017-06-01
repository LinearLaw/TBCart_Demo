/**
 * Created by Administrator on 2017/3/20.
 */
angular.module("AGoods", [])
    .controller("AGoods_Ctrl", ["$scope", "$http","$document", function ($scope, $http,$document) {
        /**
         * @func watchPrice
         * @desc 监视总价的变化，渲染总价和数量
         * @param {object} list 商品列表信息
         */
        function watchPrice(list) {
            var sum = 0;
            var count = 0;
            angular.forEach(list, function (value, key) {
                for (var i = 0; i < value.shopGoods.length; i++) {
                    if (value.shopGoods[i].checkitem) {
                        sum += value.shopGoods[i].count * value.shopGoods[i].price;
                        count++;
                    }
                }
            })
            $scope.totalPrice = sum;
            $scope.count = count;
        }
        /**
         * @func commonSel
         * @desc 所有商品全选功能
         * @param {boolean} obj 当前是否已全选
         * @param {object} list 商品列表信息
         */
        function commonSel(obj,list) {
            if (obj == true) {
                angular.forEach(list, function (value, key) {
                    value.S_Sel = true;
                    $scope.G_Sel = true;
                    $scope.F_Sel = true;
                    for (var i = 0; i < value.shopGoods.length; i++) {
                        value.shopGoods[i].checkitem = true;
                    }
                })
            } else {
                angular.forEach(list, function (value, key) {
                    value.S_Sel = false;
                    $scope.G_Sel = false;
                    $scope.F_Sel = false;
                    for (var i = 0; i < value.shopGoods.length; i++) {
                        value.shopGoods[i].checkitem = false;
                    }
                })
            }
            watchPrice(list);
        }
        /**
         * @desc 定义初始化值
         */
        $scope.count = 0;//当前以及选中的商品数量
        $scope.totalPrice = 0;//所有选中商品的总价
        $scope.G_Sel = false;//商品全选按钮初始值
        $scope.F_Sel = false;//底部结算全选按钮的初始值
        $scope.list = null;
        $scope.render = function () {
            watchPrice();
        }
        /**
         * @desc 上部分的全选按钮
         */
        $scope.allSel1 = function () {
            commonSel($scope.G_Sel,$scope.list);
        }
        /**
         * @desc 下部分的全选按钮
         */
        $scope.allSel2 = function () {
            commonSel($scope.F_Sel,$scope.list);
        }
        /**
         * @desc 当前店铺商品全选
         */
        var thisShop = function () {
            if (this.S_Sel) {
                for (var i = 0; i < this.shopGoods.length; i++) {
                    this.shopGoods[i].checkitem = true;
                }
            } else {
                for (var i = 0; i < this.shopGoods.length; i++) {
                    this.shopGoods[i].checkitem = false;
                }
            }
            watchPrice($scope.list);
        }
        /**
         * @desc 获取json数据进行处理，渲染到页面中
         */
        $http({
            url: "../data/cart.json"
        }).then(function (res) {
            $scope.list = res.data;
            //8.1、定义增加和减少商品数量的方法
            var minus = function () {
                if (this.count == 0) {
                    return;
                } else {
                    this.count--;
                    watchPrice($scope.list);
                }
            }
            var plus = function () {
                if (this.count > 20) {
                    return;
                }
                else {
                    this.count++;
                    watchPrice($scope.list);
                }
            }
            //8.2、遍历$scope.list数组，将minus和plus方法都加入
            for (var i = 0; i < $scope.list.length; i++) {
                for (var j = 0; j < $scope.list[i].shopGoods.length; j++) {
                    $scope.list[i].shopGoods[j].minus = minus;
                    $scope.list[i].shopGoods[j].plus = plus;
                }
            }
        })
        /**
         * @desc 所有商品数量计算
         */
        var sumCount = 0;
        angular.forEach($scope.list, function (value, key) {
            console.log(value.shopGoods.length);
            sumCount += value.shopGoods.length;
        })
        $scope.totalCount = sumCount;
        /**
         * @param 点击删除，将当前商品删除
         * @param item
         * @param shopItem
         */
        $scope.delThis = function (item, shopItem) {
            //console.log(1);
            var index_1 = $scope.list.indexOf(item);
            var index_2 = $scope.list[index_1].shopGoods.indexOf(shopItem);
            if (confirm("是否删除该商品？")) {
                if (item.shopGoods.length == 1) {
                    $scope.list.splice(index_1, 1);
                } else {
                    $scope.list[index_1].shopGoods.splice(index_2, 1);
                }
            } else {
                return;
            }
        }
        /**
         * @desc 页面滑动的时候，把结算栏固定到底部或释放
         */
        $document.on("scroll",function(){
            var body = document.querySelector("body");
            var pages = document.querySelector("#allPages")
            var $ = angular.element;
            var foot = document.querySelector("#foot");
            var posi = pages.offsetHeight - body.scrollTop;
            if(posi < 1300){
                $(foot).removeClass("normal");
                $(foot).addClass("static");
            }else{
                $(foot).removeClass("static");
                $(foot).addClass("normal");
            }
        })

    }])