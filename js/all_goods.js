/**
 * Created by Administrator on 2017/3/20.
 */
angular.module("AGoods",[])
    .controller("AGoods_Ctrl",["$scope", function ($scope) {
        $scope.list=[{
            shopName:"新生格度",
            imgSrc:"../images/tb20.jpg",
            goTitle:"春季衬衫男长袖修身韩版加绒青年纯色男士休闲牛津纺白衬衣男装潮",
            goType:"颜色：【无绒】浅海蓝,尺码：L",
            price:57.00,
            count:1,
            minus: function () {
                if(this.count==0){
                    return;
                }else{
                    this.count--;
                }
            },
            plus: function () {
                if(this.count>20){
                    return;
                }
                else{
                    this.count++;
                }
            }
        }]
    }])