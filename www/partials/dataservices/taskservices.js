(function() {
    'use strict';

    angular
        .module('myapp')
        .factory('taskservice', taskservice);

    taskservice.$inject = ['$http', '$q'];
    function taskservice($http, $q) {

        var service = {
            apiCreatTask:apiCreatTask,
            apiGetTasks:apiGetTasks,
        };

        return service;

        function apiCreatTask(postData,completeURL) {
            var diferred = $q.defer();
            
            console.dir(postData);
            diferred.resolve(data);
            return diferred.promise;
                 
        }

        function apiGetTasks(postData,completeURL) {
            var diferred = $q.defer();
            
            var data = JSON.parse('{"Success":true,"Message":null,"Response":[{"UserRole":"FrontOffice","Date":"22-11-2012","Time":"11:00","Comment":"general visit","VisitedBy":"Ajay D","Name":"Anil","Number":"9930243098","ID":"1","VisitType":"ClientVisit","LastComments":"Not well"},{"UserRole":"FrontOffice","Date":"22-11-2012","Time":"11:00","Comment":"general visit","VisitedBy":"Ajay D","Name":"Anil","Number":"9930243098","ID":"1","VisitType":"ClientVisit","LastComments":"Not well"}]}');
            diferred.resolve(data);
            return diferred.promise;
                 
        }
    }
})();