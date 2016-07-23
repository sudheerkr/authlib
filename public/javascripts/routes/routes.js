(function() {
    'use strict';
    angular.module('authApp')
        .config(routeConfiguration);

    // app configurations
    function routeConfiguration($stateProvider, $urlRouterProvider, USER_ROLES) {
        $stateProvider
            .state('404', {
                url : '404',
                templateUrl : '404.html' 
            })
            .state('in', {
                abstract : true,
                templateUrl : 'in.html'
            })
            .state('index', {
                url: '/index',
                templateUrl: 'main.html',
                controller: 'MainCtrl',
                data: {
                    authorizedRoles: [USER_ROLES.admin]
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about.html',
                controller: 'AboutCtrl'
                data: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'partials/login.html',
                controller: 'LoginCtrl'
                data: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'partials/signup.html',
                controller: 'SignupCtrl'
                data: {
                    authorizedRoles: [USER_ROLES.all]
                }
            });
    };
})();
