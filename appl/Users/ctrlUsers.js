appl.controller('ctrlUsers', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
        console.info("Controller: ctrlUsers");
        DataService.read('Users', function (data) {
            console.info("Read:" + JSON.stringify(data));
            $scope.topic = data.data.Topic;
            $scope.content = data.data.Content;
            $scope.picture = data.data.picture;
            $scope.links = data.data.links;
        });
    }]);