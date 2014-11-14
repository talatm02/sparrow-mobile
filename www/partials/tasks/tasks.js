(function() {
    'use strict';

    angular
	    .module('myapp')
	    .controller('Tasks', Tasks);

    Tasks.$inject = ['$scope','$location','taskservice'];

    function Tasks($scope, $location,taskservice) {
	    /*jshint validthis: true */
        var vm = this;
        vm.ShowTasksDiv = true;
        taskservice.apiGetTasks().then(function(data){
            vm.Tasks = data.Response;
        })

        vm.selectTask = function(object){
            vm.editTask = object; 
            console.dir(vm.editTask);
            vm.ShowSummaryDiv = true;
            vm.ShowTasksDiv = false;
        }
    }
})();