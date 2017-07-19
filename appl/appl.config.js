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
                        template: '<menu></menu>'
                    },
                    'content': {
                        controller: 'ctrlHome',
                        template: '<home></home>'
                    }

                }
            })
        .state('Workflow', {
        url: '/Workflow',
        views: {
            menu: {
                controller: 'ctrlMenu',
                 template: '<menu></menu>'
            },
            'content': {
                controller: 'ctrlWorkflow',
                template: '<workflow></workflow>'
            }

        }
    }).state('Statistics', {
        url: '/Statistics',
        views: {
            menu: {
                controller: 'ctrlMenu',
                template: '<menu></menu>'
            },
            'content': {
                controller: 'ctrlStatistics',
                template: '<statistics></statistics>'
            }

        }
    }).state('Calendar', {
        url: '/Calendar',
        views: {
            menu: {
                controller: 'ctrlMenu',
                 template: '<menu></menu>'
            },
            'content': {
                controller: 'ctrlCalendar',
                template: '<calendar></calendar>'
            }

        }
    }).state('Users', {
        url: '/Users',
        views: {
            menu: {
                controller: 'ctrlMenu',
                template: '<menu></menu>'
            },
            'content': {
                controller: 'ctrlUsers',
                template: '<users></users>'
            }
        }
    }).state('Settings', {
        url: '/Settings',
        views: {
            menu: {
                controller: 'ctrlMenu',
                template: '<menu></menu>'
            },
            'content': {
                controller: 'ctrlSettings',
                template: '<settings></settings>'
            }
        }
    });
});