(function() {
    'use strict';
    angular.module("authApp", ['ui.router'])
        .config(routeConfiguration)
        .config(interceptor)
        .run(onStateChange);

    // .factory('authService', authService);

    // app configurations
    function routeConfiguration($stateProvider, $urlRouterProvider) {
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

    // interceptor
    function interceptor($httpProvider) {
    	$httpProvider.interceptors.push(['$injector', function($injector){
    		return $injector.get('AuthInterceptor');
    	}]);
    };

    // onStateChange
    function onStateChange($rootScope, $state, Auth, AUTH_EVENTS) {
    	//  before each state change, check if user logged in 
    	// and authorized to move onto the next state.
    	$rootScope.$on('$stateChangeStart', function(event, next) {
    		var authorizedRoles = next.data.authorizedRoles;
    		if (!Auth.autho(authorizedRoles)) {
    			event.preventDefault();
    			if (Auth.authe()) {
    				// user is not allowed.
    				$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
    			} else {
    				// user is not logged in.
    				$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated)
    			}
    		}
    	});

    	//  to show current active state.
    	$rootScope.getClass = function(path) {
    		if ($state.current.name == path) {
    			return 'active';
    		}else{
    			return "";
    		}
    	};

    	// logout 
    	$rootScope.logout = function() {
    		Auth.logout();
    	};
    };

    // // authService
    // function authService($http, $localStorage) {
    //     var auth = {
    //         Login: Login,
    //         Logout: Logout
    //     };
    //     //return auth
    //     return auth;

    //     function Login(user, password, callback) {
    //         $http.post('/api/auth', {
    //             user: user,
    //             password: password
    //         }).success(function(data) {
    //             if (data.token) {
    //                 $localStorage.currentUser = {
    //                     username: token.username,
    //                     token: data.token
    //                 };
    //                 $http.defaults.headers.common.Authorization = 'Bearer' + data.token;
    //                 callback(true);
    //             }
    //         }).error(function(err) {
    //             console.log(err);
    //         });
    //     }

    //     // logout
    //     function Logout() {
    //         delete $localStorage.token;
    //         $http.defaults.headers.common.Authorization = '';
    //     }
    // }

})();
