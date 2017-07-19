'use strict';
export default angular.module('appl.tickGenerator',[]).factory('tickGenerator',function($rootScope, $timeout){
      var _tickTimeout;
      _start=function() {
        _tick();
    };
   var _tick=function() {
        $rootScope.$broadcast("TICK", new Date());
         _tickTimeout = $timeout( _tick, 1000);
    };
     var _stop=function() {
        $timeout.cancel( _tickTimeout);
    };
     var _listenToStop=function() {
        $rootScope.$on("STOP_TICK", function (event, data) {
             _stop();
        });
    };
    var init=function(){
    _listenToStop();
    };
   
        return{
            start:  _start,
            stop:  _stop
        };
});
//export class tickGenerator{    
//    constructor($rootScope, $timeout){
//        $rootScope = $rootScope;
//        $timeout=$timeout;
//        _tickTimeout;
//        //init();
//    }
//    _start() {
//        _tick();
//    }
//    _tick() {
//        $rootScope.$broadcast("TICK", new Date());
//         _tickTimeout = $timeout( _tick, 1000);
//    }
//    _stop() {
//        $timeout.cancel( _tickTimeout);
//    }
//    _listenToStop() {
//        $rootScope.$on("STOP_TICK", function (event, data) {
//             _stop();
//        });
//    };
//    init(){
//    _listenToStop();
//    }
//    
//    tickGeneratorStart(){
//        return{
//            start:  _start,
//            stop:  _stop
//        };
//    }
//}