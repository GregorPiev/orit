'use strict';
export default angular.module('appl.ctrlMenu', []).directive('menu', menuConfig);

function menuConfig() {
    return{
        restrict: "E",
        replace: true,
        scope: {
            data: '='
        },
        template: require('./menu.html'),
        controller: menuController,
        controllerAs: 'ctrlMenu'
    };

}


class menuController {
    constructor($scope) {
        this.$scope = $scope;
        this.init();
    }

    init() {
        this.listenToTick();
    }

    listenToTick() {
        var _this = this;
        this.$scope.$on("TICK", function (event, tick) {
            _this.$scope.tick = tick;
        });
    }
}
;