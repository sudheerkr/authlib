
(function(){
	'use strict';
angular.module("authApp", ['ui.router'])
	.config(routeConfiguration)
	.factory('authService', authService);

			// app configurations
			function routeConfiguration($stateProvider, $urlRouterProvider){
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
					});
			}

			// authService
			function authService($http, $localStorage){
				var auth = {
					Login: Login,
					Logout: Logout
				};
				//return auth
				return auth;

				function Login(user, password, callback){
				$http.post('/api/auth', {user: user, password: password}).success(function(data){
					if (data.token) {
						$localStorage.currentUser = {username: token.username, token: data.token};
						$http.defaults.headers.common.Authorization = 'Bearer'+ data.token;
						callback(true);
					}
				}).error(function(err){
					console.log(err);
				});
				}

				// logout
				function Logout(){
					delete $localStorage.token;
					$http.defaults.headers.common.Authorization = '';
				}
				}
		
})();