appl.controller('ctrlHome', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
        console.info("Controller: ctrlHome");
        DataService.read('Home', function (data) {
            //console.info("Read:" + JSON.stringify(data));
            $scope.topic = data.data.Topic;
            $scope.above_left = data.data.above_left;
            $scope.above_right = data.data.above_right;
            $scope.botom_left = data.data.botom_left;
            $scope.botom_middle = data.data.botom_middle;
            $scope.botom_right = data.data.botom_right;
        });
    }]);