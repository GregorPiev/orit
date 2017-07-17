//export default appl.controller('ctrlUsers', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
//        console.info("Controller: ctrlUsers");
//        DataService.read('Users', function (data) {
//            console.info("Read:" + JSON.stringify(data));
//            $scope.topic = data.data.Topic;
//            $scope.content = data.data.Content;
//            $scope.picture = data.data.picture;
//            $scope.links = data.data.links;
//        });
//    }]);

export class Users{
    constructor($scope,DataService){
        console.info("%cController: ctrlUsers","color: darkorange;");
        this.DataService =DataService;
        this.$scope=$scope;
        this.init();
    }
    init(){
        this.DataService.read('Users', function (data) {
            console.info("%cRead:" + JSON.stringify(data),"color: green;");
            this.$scope.topic = data.data.Topic;
            this.$scope.content = data.data.Content;
            this.$scope.picture = data.data.picture;
            this.$scope.links = data.data.links;
        });
    }
}