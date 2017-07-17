//export default appl.controller('ctrlStatistics', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
//        console.info("Controller: ctrlStatistics");
//        DataService.read('Statistics', function (data) {
//            console.info("Read:" + JSON.stringify(data));
//            $scope.topic = data.data.Topic;
//            $scope.content = data.data.Content;
//            $scope.picture = data.data.picture;
//            $scope.picts = data.data.picts;
//        });
//    }]);

export class Statistics{
    constuctor($scope, DataService){
        console.info("Controller: ctrlStatistics");
        this.$scope = $scope;
        this.DataService=DataService;
        this.init();
    }
    
    init(){
        this.DataService.read('Statistics', function (data) {
            console.info("Read:" + JSON.stringify(data));
            this.$scope.topic = data.data.Topic;
            this.$scope.content = data.data.Content;
            this.$scope.picture = data.data.picture;
            this.$scope.picts = data.data.picts;
        });       
    }
}