(function() {
    'use strict';

    angular
	    .module('myapp')
	    .controller('Dashboard', Dashboard);

    Dashboard.$inject = ['$scope','$location','taskservice'];

    function Dashboard($scope, $location,taskservice) {
	    /*jshint validthis: true */
        var vm = this;
        selectedTask = {};
        vm.enquiryStyle = {
        	'border-left':'5px solid #4d7496'
        };

        vm.logout = function(){
            $location.path('/login')
        }

        vm.visitStyle = {
        	'border-left':'5px solid #e36112'
        };
        taskservice.apiGetTasks().then(function(data){
            vm.Tasks = data.Response;
        })
        
        
        vm.Detail = function(object){
        	selectedTask = {};
        	selectedTask = object;
        	/*selectedTask.Date = object.Date;
        	selectedTask.Time = object.Time;
        	selectedTask.Name = object.Name;
        	selectedTask.Number = object.Number;
        	selectedTask.Comment = object.Comment;*/
            
        	$location.path('/'+ object.VisitType);
        }
        
    }
})();


