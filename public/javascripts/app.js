angular.module("authApp", ['ui.router'])
	.config(routeConfiguration);

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