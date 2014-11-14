(function() {
    'use strict';

    angular
        .module('myapp')
        .factory('clientservice', clientservice);

    clientservice.$inject = ['$http', '$q'];
    function clientservice($http, $q) {

        var service = {
            apiGetClients:apiGetClients
        };

        return service;

        function apiGetClients(postData,completeURL) {
            var diferred = $q.defer();
            
            var data = JSON.parse('{"Success":true,"Message":null,"clientList":[{"ID":1,"Name":"Kabir","Number":"9876678999","Address":"mumbai vashi"},{"ID":2,"Name":"Meeta","Number":"9897656787","Address":null},{"ID":3,"Name":"Naresh","Number":"9893378233","Address":"Mumbai"},{"ID":4,"Name":"Pranab","Number":"9898787675","Address":"Thane"},{"ID":5,"Name":"prashant","Number":"987084221","Address":"Thane"},{"ID":6,"Name":"Paresh","Number":"9821406359","Address":"mumbai"},{"ID":7,"Name":"Testing","Number":"8097864786","Address":"Mumbai"},{"ID":8,"Name":"Viraj","Number":"9876798767","Address":"Mumbai area"},{"ID":20,"Name":"sushant","Number":"8988888888","Address":"mumbai"}]}');
            diferred.resolve(data);
            return diferred.promise;
            /*$http({
                    method: 'POST', 
                    url: completeURL,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded','Authorization':'Basic c3Bmcm9udDoxMjM0NQ=='},
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
                return diferred.promise;*/         
        }
    }
})();