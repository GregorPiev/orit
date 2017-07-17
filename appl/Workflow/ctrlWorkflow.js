//export default appl.controller('ctrlWorkflow', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
//        console.info("Controller: ctrlWorkflow");
//        DataService.read('Workflow', function (data) {
//            console.info("Read:" + JSON.stringify(data));
//            $scope.topic = data.data.Topic;
//            $scope.content = data.data.Content;
//            $scope.picture = data.data.picture;
//        });
//
//    }]);
export class Workflow{
    constructor($scope,DataService){
        console.info("%cController: ctrlWorkflow","color:darkorange");
        this.DataService=DataService;
        this.$scope=$scope;
        this.init();
    }
    init(){
         this.DataService.read('Workflow', function (data) {
            console.info("%cRead:" + JSON.stringify(data),"color:green");
            this.$scope.topic = data.data.Topic;
            this.$scope.content = data.data.Content;
            this.$scope.picture = data.data.picture;
        });
    }
}