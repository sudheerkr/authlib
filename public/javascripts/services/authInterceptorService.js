(function() {
    'use strict';
    angular.module('authApp')
        .factory('AuthInterceptor', ['$rootScope', '$q', 'Session', 'AUTH_EVENTS', authInterceptor]);

    // AuthInterceptor
    function authInterceptor($rootScope, $q, Session, AUTH_EVENTS) {

        // retrun response
        return {
            responseError: function(response) {
                $rootScope.$broadcast({
                    401: AUTH_EVENTS.notAuthenticated,
                    403: AUTH_EVENTS.notAuthorized,
                    419: AUTH_EVENTS.sessionTimeout,
                    440: AUTH_EVENTS.sessionTimeout
                }[response.status], response);
                return $q.reject(response);
            }
        };
    };
})();
