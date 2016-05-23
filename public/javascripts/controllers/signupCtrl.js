(function(){
	'use strict';
	angular.module('authApp')
		.controller('SignupCtrl', ['$scope', signupCtrl]);

	function signupCtrl($scope) {
		$scope.signup = 'SignupCtrl';
	};
})();