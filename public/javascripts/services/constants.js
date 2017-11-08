(function() {
    'use strict';
    /* global USER_ROLES:false, AUTH_EVENTS:false */
    //  contant for user login define hear.
    angular.module('authApp')
        .constant('USER_ROLES', {
            all: '*',
            admin: 'admin',
        })
        .constant('AUTH_EVENTS', {
            loginSuccess: 'auth-login-success',
            loginFailed: 'auth-login-failed',
            logoutSuccess: 'auth-logout-success',
            sessionTimeout: 'auth-session-timeout',
            notAuthenticated: 'auth-not-authenticated',
            notAuthorized: 'auth-not-authorized'
        });
})();
