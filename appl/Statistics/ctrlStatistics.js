appl.controller('ctrlStatistics', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
        console.info("Controller: ctrlStatistics");
        DataService.read('Statistics', function (data) {
            console.info("Read:" + JSON.stringify(data));
            $scope.topic = data.data.Topic;
            $scope.content = data.data.Content;
            $scope.picture = data.data.picture;
            $scope.picts = data.data.picts;
        });
    }]);