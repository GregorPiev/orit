//export default appl.controller('ctrlHome', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
//        console.info("Controller: ctrlHome");
//        DataService.read('Home', function (data) {
//            //console.info("Read:" + JSON.stringify(data));
//            $scope.topic = data.data.Topic;
//            $scope.above_left = data.data.above_left;
//            $scope.above_right = data.data.above_right;
//            $scope.botom_left = data.data.botom_left;
//            $scope.botom_middle = data.data.botom_middle;
//            $scope.botom_right = data.data.botom_right;
//        });
//    }]);

export class Home{
    constructor($scope, DataService){
        console.info("%cController: ctrlHome","color: darkorange;");
        this.$scope = $scope;
        this.DataService=DataService;
        this.init();
    }
    
    init(){
        this.DataService.read('Home', function (data) {
            console.info("%cRead:" + JSON.stringify(data),"color:green;");
            this.$scope.topic = data.data.Topic;
            this.$scope.above_left = data.data.above_left;
            this.$scope.above_right = data.data.above_right;
            this.$scope.botom_left = data.data.botom_left;
            this.$scope.botom_middle = data.data.botom_middle;
            this.$scope.botom_right = data.data.botom_right;
        });
    }
}