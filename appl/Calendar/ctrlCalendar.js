export default angular.module('appl.calendar',[]).controller('ctrlCalendar',ctrlCalendar);
  function ctrlCalendar($scope, DataService){
      console.info("%cController: ctrlCalendar","color:darkorange");
      this.DataService.read('Calendar', function (data) {
            console.info("%cRead:" + JSON.stringify(data),"color:green;");
            $scope.topic = data.data.Topic;
            $scope.content = data.data.Content;
            $scope.picture = data.data.picture;            
        });
  }
//export class Calendar{
//    constructor($scope, $http, DataService){
//        console.info("%cController: ctrlCalendar","color:darkorange");
//        this.DataService = DataService;
//        this.$http = $http;
//        this.$scope = $scope;
//        this.init();
//    }
// 
//    
//    init(){
//        this.DataService.read('Calendar', function (data) {
//            console.info("%cRead:" + JSON.stringify(data),"color:green;");
//            this.$scope.topic = data.data.Topic;
//            this.$scope.content = data.data.Content;
//            this.$scope.picture = data.data.picture;            
//        });
//    }
// }   
    
    
//    appl.controller('ctrlCalendar', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
//        console.info("Controller: ctrlCalendar");
//        DataService.read('Calendar', function (data) {
//            console.info("Read:" + JSON.stringify(data));
//            $scope.topic = data.data.Topic;
//            $scope.content = data.data.Content;
//            $scope.picture = data.data.picture;
//        });
//
//    }]);