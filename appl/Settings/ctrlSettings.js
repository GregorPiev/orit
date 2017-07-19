'use strict';
export default angular.module('appl.ctrlSettings', []).directive('settings', settingsConfig);

function settingsConfig() {
    return{
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        template: require('./settings.html'),
        controller: settingsController,
        controllerAs: 'ctrlSettings'

    };
}
class settingsController {
    constructor($scope, DataService) {
        console.info("%cController: ctrlSettings", "color: darkorange;");
        this.$scope = $scope;
        this.DataService = DataService;
        this.init();
    }

    init() {
        this.DataService.read('Settings', function (data) {
            console.info("%cRead:" + JSON.stringify(data), "color: green;");
            this.$scope.topic = data.data.Topic;
            this.$scope.content = data.data.Content;
            this.$scope.picture = data.data.picture;
            this.$scope.events = data.data.events;
        });
    }
}