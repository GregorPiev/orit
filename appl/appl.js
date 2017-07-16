console.info("%cAppl 1","color:darkorange;font-size:18px;");
var appl = angular.module('appl', ['ngRoute', 'ui.router', 'ngSanitize']);
appl.run(function (tickGenerator) {
    tickGenerator.start();
});
export default appl;