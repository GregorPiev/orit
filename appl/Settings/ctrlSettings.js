//export default appl.controller('ctrlSettings', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
//        console.info("Controller: ctrlSettings");
//        DataService.read('Settings', function (data) {
//            console.info("Read:" + JSON.stringify(data));
//            $scope.topic = data.data.Topic;
//            $scope.content = data.data.Content;
//            $scope.picture = data.data.picture;
//            $scope.events = data.data.events;
//        });
//    }]);

export class Settings{
    constructor($scope, DataService){
        console.info("%cController: ctrlSettings","color: darkorange;");
        this.$scope=$scope;
        this.DataService=DataService;
        this.init();
    }
    
    init(){
        this.DataService.read('Settings', function (data) {
            console.info("%cRead:" + JSON.stringify(data),"color: green;");
            this.$scope.topic = data.data.Topic;
            this.$scope.content = data.data.Content;
            this.$scope.picture = data.data.picture;
            this.$scope.events = data.data.events;
        });
    }
}