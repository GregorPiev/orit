appl.controller('ctrlMenu', ['$scope', function ($scope) {
        var listenToTick = function () {
            $scope.$on("TICK", function (event, tick) {
                $scope.tick = tick;
            });

        };
        listenToTick();
    }]);