var appl = angular.module('appl', ['ngRoute', 'ui.router', 'ngSanitize']);
appl.run(function (tickGenerator) {
    tickGenerator.start();
});



