/**
 * Created by Administrator on 2017/3/20.
 */
angular.module("AGoods", [])
    .controller("AGoods_Ctrl", ["$scope", function ($scope) {
        //1、监视总价的变化，渲染总价和数量
        function watchPrice() {
            var sum = 0;
            var count = 0;
            angular.forEach($scope.list, function (value, key) {
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
        //4、所有商品全选功能
        function commonSel(obj) {
            if (obj == true) {
                angular.forEach($scope.list, function (value, key) {
                    value.S_Sel=true;
                    $scope.G_Sel = true;
                    $scope.F_Sel = true;
                    for (var i = 0; i < value.shopGoods.length; i++) {
                        value.shopGoods[i].checkitem = true;
                    }
                })
            } else {
                angular.forEach($scope.list, function (value, key) {
                    value.S_Sel=false;
                    $scope.G_Sel = false;
                    $scope.F_Sel = false;
                    for (var i = 0; i < value.shopGoods.length; i++) {
                        value.shopGoods[i].checkitem = false;
                    }
                })
            }
            watchPrice();
        }
        //2、定义增加和减少商品数量的方法
        minus = function () {
            if (this.count == 0) {
                return;
            } else {
                this.count--;
                watchPrice();
            }
        }
        plus = function () {
            if (this.count > 20) {
                return;
            }
            else {
                this.count++;
                watchPrice();
            }
        }
        //3、定义初始化值
        $scope.count = 0;//当前以及选中的商品数量
        $scope.totalPrice = 0;//所有选中商品的总价
        $scope.G_Sel = false;//商品全选按钮初始值
        $scope.F_Sel = false;//底部结算全选按钮初始值
        $scope.render = function () {
            watchPrice();
        }

        //5、上面的全选按钮
        $scope.allSel1 = function(){
            commonSel($scope.G_Sel);
        }
        //6、下面的全选按钮
        $scope.allSel2 = function () {
            commonSel($scope.F_Sel);
        }
        //7、当前店铺商品全选
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
            watchPrice();
        }
        //8、所有商品数量
        var sumCount = 0;
            angular.forEach($scope.list, function (value,key) {
                console.log(value.shopGoods.length);
                sumCount += value.shopGoods.length;
            })

        $scope.totalCount=sumCount;
        
        //9、点击删除，将当前商品删除
        $scope.delThis= function (item,shopItem) {
            //console.log(1);
            var index_1=$scope.list.indexOf(item);
            var index_2=$scope.list[index_1].shopGoods.indexOf(shopItem);
            if(confirm("是否删除该商品？")){
                if(item.shopGoods.length==1){
                    $scope.list.splice(index_1,1);
                }else{
                    $scope.list[index_1].shopGoods.splice(index_2,1);
                }
            }else{
                return;
            }
        }
        //10、店铺数据
        $scope.list = [{
            shopName: "新生格度",
            shopGoodsSel: thisShop,
            S_Sel: false,
            shopGoods: [{
                id: 1,
                imgSrc: "../images/tb20.jpg",
                goTitle: "春季衬衫男长袖修身韩版加绒青年纯色男士休闲牛津纺白衬衣男装潮",
                goColor:"颜色：【无绒】浅海蓝",
                goType: "尺码：L",
                price: 57.00,
                count: 1,
                checkitem: false,
                minus: minus,
                plus: plus
            }, {
                id: 2,
                imgSrc: "../images/tb20.jpg",
                goTitle: "春季衬衫男长袖修身韩版加绒青年纯色男士休闲牛津纺白衬衣男装潮",
                goColor:"颜色：【无绒】浅海蓝",
                goType: "尺码：L",
                price: 57.00,
                count: 1,
                checkitem: false,
                minus: minus,
                plus: plus
            }],
        }, {
            shopName: "新生格度",
            shopGoodsSel: thisShop,
            S_Sel: false,
            shopGoods: [{
                id:1,
                imgSrc: "../images/tb20.jpg",
                goTitle: "春季衬衫男长袖修身韩版加绒青年纯色男士休闲牛津纺白衬衣男装潮",
                goColor:"颜色：【无绒】浅海蓝",
                goType: "尺码：L",
                price: 57.00,
                count: 1,
                checkitem: false,
                minus: minus,
                plus: plus
            },{
                id:2,
                imgSrc: "../images/tb20.jpg",
                goTitle: "春季衬衫男长袖修身韩版加绒青年纯色男士休闲牛津纺白衬衣男装潮",
                goColor:"颜色：【无绒】浅海蓝",
                goType: "尺码：L",
                price: 57.00,
                count: 1,
                checkitem: false,
                minus: minus,
                plus: plus
            },{
                id:3,
                imgSrc: "../images/tb20.jpg",
                goTitle: "春季衬衫男长袖修身韩版加绒青年纯色男士休闲牛津纺白衬衣男装潮",
                goColor:"颜色：【无绒】浅海蓝",
                goType: "尺码：L",
                price: 57.00,
                count: 1,
                checkitem: false,
                minus: minus,
                plus: plus
            }]
        }]
    }])