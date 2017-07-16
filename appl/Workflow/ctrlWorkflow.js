export default appl.controller('ctrlWorkflow', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
        console.info("Controller: ctrlWorkflow");
        DataService.read('Workflow', function (data) {
            console.info("Read:" + JSON.stringify(data));
            $scope.topic = data.data.Topic;
            $scope.content = data.data.Content;
            $scope.picture = data.data.picture;
        });

    }]);