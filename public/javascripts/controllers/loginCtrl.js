(function(){
	'use strict';
	angular.module('authApp')
		.controller('LoginCtrl', ['$scope', loginCtrl]);

	function loginCtrl($scope) {
		$scope.login = 'LoginCtrl';
	};
})();