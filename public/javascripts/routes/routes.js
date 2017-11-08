(function() {
    'use strict';
    angular.module('authApp')
        .config(routeConfiguration);

    // app configurations
    function routeConfiguration($stateProvider, $urlRouterProvider, $locationProvider, USER_ROLES) {
        $stateProvider
            .state('404', {
                url : '/404',
                templateUrl : '404.html' 
            })
            .state('in', {
                abstract : true,
                templateUrl : 'partials/in.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about.html',
                controller: 'AboutCtrl',
                data: {
                    authorizedRoles: [USER_ROLES.admin]
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'partials/login.html',
                controller: 'LoginCtrl',
                data: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'partials/signup.html',
                controller: 'SignupCtrl',
                data: {
                    authorizedRoles: [USER_ROLES.all]
                }
            });

            $locationProvider.html5Mode({enabled: true, requireBase:false})
    };
})();
