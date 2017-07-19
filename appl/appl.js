console.info("%cAppl 1", "color:darkorange;font-size:18px;");
import 'angular';
//import 'angular-route';
import 'angular-ui-router';
//import 'angular-sanitize';

console.info("%cAppl 2", "color:darkorange;font-size:18px;");

import { DataService } from './service';
import ctrlCalendar from './Calendar/ctrlCalendar';
import ctrlHome from './Home/ctrlHome';
import ctrlMenu from './Menu/ctrlMenu';
import ctrlSettings from './Settings/ctrlSettings';
import ctrlStatistics from './Statistics/ctrlStatistics';
import ctrlUsers from './Users/ctrlUsers';
import ctrlWorkflow from './Workflow/ctrlWorkflow';
import {tickGenerator} from './appl.tickgenerator';

console.info("%cAppl 3", "color:darkorange;font-size:18px;");

var appl = angular.module('appl', ['ui.router', ctrlMenu.name, ctrlHome.name, ctrlCalendar.name, ctrlSettings.name, ctrlStatistics.name, ctrlUsers.name, ctrlWorkflow.name]);
import './appl.config';

console.info("%cAppl 4", "color:darkorange;font-size:18px;");
appl.service('DataService', 'DataService');

console.info("%cAppl 5", "color:darkorange;font-size:18px;");
//appl.run(function (tickGenerator) {
//tickGenerator.start();
console.info(tickGenerator);
//});
console.info("%cAppl 6", "color:darkorange;font-size:18px;");
