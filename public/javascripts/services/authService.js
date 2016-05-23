(function() {
    'use strict';
    angular.module('authApp')
        .factory('Auth', ['$http', '$rootScope', '$window', 'Session', 'AUTH_EVENTS', authService]);

    // authService
    function authService($http, $rootScope, $window, Session, AUTH_EVENTS) {
        var service = {
            login: loginService,
            authe: isAuthenticatedService,
            autho: isAuthorizedService,
            logOut: logoutService
        };

        return service;

        // loginService
        function loginService(user, success, error) {
            $http.post('/api/auth').success(function(data) {
                var users = data.users;
                if (users[user.username]) {
                    var loginData = users[user.username];
                    // insert there custom login function
                    if (user.username == loginData.username && user.password == loginData.password) {
                        // set the browser session, to avoid relogin on refresh.
                        $window.sessionStorage["userInfo"] = JSON.stringify(loginData);
                        // delete login password, for not showing client side
                        delete loginData.password;
                        //update current user in session and $rootScope
                        Session.create(loginData);
                        // or 
                        $rootScope.currentUser = loginData;
                        // fire event on successfull login
                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                        // success 
                        success(loginData);
                    }
                } else {
                    // login failed
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    // error
                    error();
                }
            }).error(function(err) {

            });
        };

        // isAuthenticateService
        function isAuthenticatedService() {
            return !!Session.user;
        };

        // isAuthorizedService: check if the use is authorize to access the next route
        function isAuthorizedService(authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return (isAuthenticatedService() && authorizedRoles.indexOf(Session.userRole) !== -1);
        };

        // logoutService
        function logoutService() {
            Session.destroy();
            $window.sessionStorage.removeItem('userInfo');
            $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
        };
    };
})();