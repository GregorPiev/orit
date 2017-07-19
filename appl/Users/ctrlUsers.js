'use strict';
export default angular.module('appl.ctrlUsers', []).directive('users', usersConfig);
function   usersConfig() {
    return{
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        tempate: require('./users.html'),
        controller: usersController,
        controllerAs: 'ctrlUsers'
    };
}


class usersController {
    constructor($scope, DataService) {
        console.info("%cController: ctrlUsers", "color: darkorange;");
        this.DataService = DataService;
        this.$scope = $scope;
        this.init();
    }
    init() {
        this.DataService.read('Users', function (data) {
            console.info("%cRead:" + JSON.stringify(data), "color: green;");
            this.$scope.topic = data.data.Topic;
            this.$scope.content = data.data.Content;
            this.$scope.picture = data.data.picture;
            this.$scope.links = data.data.links;
        });
    }
}