export default appl.factory('tickGenerator', function ($rootScope, $timeout) {
    var _tickTimeout;
    var _start = function () {
        _tick();
    };
    var _tick = function () {
        $rootScope.$broadcast("TICK", new Date());
        _tickTimeout = $timeout(_tick, 1000);
    };
    var _stop = function () {
        $timeout.cancel(_tickTimeout);
    };
    var _listenToStop = function () {
        $rootScope.$on("STOP_TICK", function (event, data) {
            _stop();
        });
    };
    _listenToStop();
    return{
        start: _start,
        stop: _stop
    };
});