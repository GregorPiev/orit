//export default appl.controller('ctrlMenu', ['$scope', function ($scope) {
//        var listenToTick = function () {
//            $scope.$on("TICK", function (event, tick) {
//                $scope.tick = tick;
//            });
//
//        };
//        listenToTick();
//    }]);
'use strict';
export class Menu{
    constructor($scope){
        this.$scope=$scope;
        this.init();
    }
    
    init(){
        this.listenToTick();
    }
    
    listenToTick(){
        var _this=this;
        this.$scope.$on("TICK", function (event, tick) {
                _this.$scope.tick = tick;
            });
    }
};