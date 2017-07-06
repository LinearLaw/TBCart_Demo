/**
 * Created by Administrator on 2017/3/23.
 */
angular.module("nav", [])
    .controller("nav_Ctrl", ["$scope", "$http", function ($scope, $http) {
        $scope.username = "tb9999_20xx";
        $scope.service = null;
        $scope.navinfo = null;
        $scope.copys = null;
        /**
         * @desc 模拟ajax获取服务商的json信息
         */
        $http({
            url: "../data/service.json"
        }).then(function (res) {
            $scope.service = res.data;
        })
        /**
         * @desc 模拟ajax获取关于淘宝的信息
         */
        $http({
            url: "../data/navinfo.json"
        }).then(function (res) {
            $scope.navinfo = res.data;
        })
        /**
         * @desc 获取淘宝的许可证信息
         */
        $http({
            url: "../data/copys.json"
        }).then(function (res) {
            $scope.copys = res.data;
        })
    }])