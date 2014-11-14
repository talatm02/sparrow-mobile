(function() {
    'use strict';

    angular
        .module('myapp')
        .factory('loginservice', loginservice);

    /* @ngInject */
    function loginservice($http, $q) {

        var service = {
            apiLogin:apiLogin
        };

        return service;

        function apiLogin(postData,completeURL) {
            var diferred = $q.defer();
            
            $http({
                    method: 'POST', 
                    url: completeFactoryURL+"/Login/Login",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data :  "="+JSON.stringify(postData)      
                })
                .success(function(data) 
                {
                    diferred.resolve(data);
                })
                .error(function()
                {
                    diferred.reject();
                });
                return diferred.promise;         
        }       
    }
})();