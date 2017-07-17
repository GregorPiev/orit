angular.module('appl.config',[]).config(function ($stateProvider, $urlRouterProvider) {
    /* Error 404 */
    $urlRouterProvider.otherwise("/");
    console.info("Config");
    /* Routers */
    $stateProvider
            .state('Home', {
                url: '/',
                views: {
                    menu: {
                        controller: 'ctrlMenu',
                        templateUrl: 'appl/Menu/menu.html'
                    },
                    'content': {
                        controller: 'ctrlHome',
                        templateUrl: 'appl/Home/home.html'
                    }

                }
            }).state('Workflow', {
        url: '/Workflow',
        views: {
            menu: {
                controller: 'ctrlMenu',
                templateUrl: 'appl/Menu/menu.html'
            },
            'content': {
                controller: 'ctrlWorkflow',
                templateUrl: 'appl/Workflow/workflow.html'
            }

        }
    }).state('Statistics', {
        url: '/Statistics',
        views: {
            menu: {
                controller: 'ctrlMenu',
                templateUrl: 'appl/Menu/menu.html'
            },
            'content': {
                controller: 'ctrlStatistics',
                templateUrl: 'appl/Statistics/statistics.html'
            }

        }
    }).state('Calendar', {
        url: '/Calendar',
        views: {
            menu: {
                controller: 'ctrlMenu',
                templateUrl: 'appl/Menu/menu.html'
            },
            'content': {
                controller: 'ctrlCalendar',
                templateUrl: 'appl/Calendar/calendar.html'
            }

        }
    }).state('Users', {
        url: '/Users',
        views: {
            menu: {
                controller: 'ctrlMenu',
                templateUrl: 'appl/Menu/menu.html'
            },
            'content': {
                controller: 'ctrlUsers',
                templateUrl: 'appl/Users/users.html'
            }
        }
    }).state('Settings', {
        url: '/Settings',
        views: {
            menu: {
                controller: 'ctrlMenu',
                templateUrl: 'appl/Menu/menu.html'
            },
            'content': {
                controller: 'ctrlSettings',
                templateUrl: 'appl/Settings/settings.html'
            }
        }
    });
});