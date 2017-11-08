(function() {
    'use strict';
    angular.module('authApp')
        .service('Session', ['$rootScope', 'USER_ROLES', sessionService]);

    // sessionService
    function sessionService($rootScope, USER_ROLES) {
        this.user = 'defoult';
        this.userRole = '*';
        // create User
        this.create = function(user) {
            this.user = user;
            this.userRole = userRole;
        };

        // destroy User
        this.destroy = function() {
            this.user = null;
            this.userRole = null;
        };

        // return this service
        return this;
    };
})();
