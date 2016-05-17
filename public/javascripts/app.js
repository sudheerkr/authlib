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
function authService($http){
	$http.get('/api/auth').success(function(data){
		console.log(data);
	}).error(function(err){
		console.log(err);
	});
}
})();