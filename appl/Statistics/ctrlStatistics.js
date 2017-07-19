'use strict';
export default angular.module('appl.ctrlStatistics', []).directive('statistics', statisticsConfig);

function statisticsConfig() {
    return{
        restict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        template: require('./statistics'),
        controller: statisticController,
        controllerAs: 'ctrlStatistics'
    };
}


class statisticController {
    constuctor($scope, DataService) {
        console.info("Controller: ctrlStatistics");
        this.$scope = $scope;
        this.DataService = DataService;
        this.init();
    }

    init() {
        this.DataService.read('Statistics', function (data) {
            console.info("Read:" + JSON.stringify(data));
            this.$scope.topic = data.data.Topic;
            this.$scope.content = data.data.Content;
            this.$scope.picture = data.data.picture;
            this.$scope.picts = data.data.picts;
        });
    }
}