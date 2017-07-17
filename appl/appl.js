console.info("%cAppl 1","color:darkorange;font-size:18px;");
import 'angular';
//import 'angular-route';
import 'angular-ui-router';
import 'sanitize';

import { DataService } from './appl/service';
import {Calendar} from './appl/Calendar/ctrlCalendar';
import {Home} from './appl/Home/ctrlHome';
import {Menu} from './appl/Menu/ctrlMenu';
import {Settings} from './appl/Settings/ctrlSettings';
import { Statistics } from './appl/Statistics/ctrlStatistics';
import { Users } from './appl/Users/ctrlUsers';
import { Workflow } from './appl/Workflow/ctrlWorkflow';

var appl = angular.module('appl', ['ui.router', 'ngSanitize']);

import './appl/factory';
import './appl/config';

appl.controller('ctrlCalendar','Calendar');
appl.controller('ctrlHome','Home');
appl.controller('ctrlMenu','Menu');
appl.controller('ctrlSettings','Settings');
appl.controller('ctrlStatistics','Statistics');
appl.controller('ctrlUsers','Users');
appl.controller('ctrlWorkflow','Workflow');
appl.service('DataService','DataService');

appl.run(function (tickGenerator) {
    tickGenerator.start();
});
