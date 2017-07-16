export default appl.controller('ctrlSettings', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
        console.info("Controller: ctrlSettings");
        DataService.read('Settings', function (data) {
            console.info("Read:" + JSON.stringify(data));
            $scope.topic = data.data.Topic;
            $scope.content = data.data.Content;
            $scope.picture = data.data.picture;
            $scope.events = data.data.events;
        });
    }]);