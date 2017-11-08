(function(){
	'use strict';
	angular.module("authApp")
		.controller('ParentCtrl', ['$scope', '$rootScope', '$state', 'Auth', 'AUTH_EVENTS', 'USER_ROLES', parentCtrl]);

	function parentCtrl($scope, $rootScope, $state, Auth, AUTH_EVENTS, USER_ROLES){
		var showLoginDialog = function(){
			$state.go('login');
		};

		var setCurrentUser = function(){
			$scope.currentUser = $rootScope.currentUser;
		};

		var showNotAuthorized = function() {
			alert('Not Authorized');
			$state.go('login');
		};

		$scope.currentUser = null;
		$scope.userRoles = USER_ROLES;
		$scope.isAuthorized = Auth.isAuthorized;

		// event Listener
		$rootScope.$on(AUTH_EVENTS.notAuthorized, showNotAuthorized);
		$rootScope.$on(AUTH_EVENTS.notAuthenticated, showLoginDialog);
		$rootScope.$on(AUTH_EVENTS.sessionTimeout, showLoginDialog);
		$rootScope.$on(AUTH_EVENTS.logoutSuccess, showLoginDialog);
		$rootScope.$on(AUTH_EVENTS.loginSuccess, setCurrentUser);

	}
})();