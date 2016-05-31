(function() {
    'use strict';
    angular.module('authApp')
        .config(routeConfiguration);

    // app configurations
    function routeConfiguration($stateProvider, $urlRouterProvider, USER_ROLES) {
        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'main.html',
                controller: 'MainCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about.html',
                controller: 'AboutCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'partials/login.html',
                controller: 'LoginCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'partials/signup.html',
                controller: 'SignupCtrl'
            });
    };
})();
