appl.controller('ctrlCalendar', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
        console.info("Controller: ctrlCalendar");
        DataService.read('Calendar', function (data) {
            console.info("Read:" + JSON.stringify(data));
            $scope.topic = data.data.Topic;
            $scope.content = data.data.Content;
            $scope.picture = data.data.picture;
        });

    }]);