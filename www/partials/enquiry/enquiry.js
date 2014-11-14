(function() {
    'use strict';

    angular
	    .module('myapp')
	    .controller('Enquiry', Enquiry);

    Enquiry.$inject = ['$scope','$location'];

    function Enquiry($scope, $location) {
	    /*jshint validthis: true */
        var vm = this; 
        //console.dir(selectedTask);
        if (selectedTask.Name == undefined) {
            vm.ShowDateDiv = true;

        }
        else {
            vm.ShowSummaryDiv=true;
            vm.Appointment={};
            vm.Appointment.Client = selectedTask.Name;
            vm.Appointment.Number = selectedTask.Number;
            vm.Appointment.AppointmentDate = selectedTask.Date;
            vm.Appointment.AppointmentTime = selectedTask.Time;
            console.dir(vm.Appointment);
        }

        vm.Next = function(){
            if (vm.ShowDateDiv) {
                vm.ShowDateDiv=false;
                vm.ShowClientDiv=true;
            }
            else if (vm.ShowClientDiv) {
                vm.ShowCommentDiv=true;
                vm.ShowClientDiv=false;
            }
            else if (vm.ShowCommentDiv) {
                vm.ShowSummaryDiv=true;
                vm.ShowCommentDiv=false;
            }
        }

        vm.Back = function(){
            if (vm.ShowClientDiv) {
                vm.ShowDateDiv=true;
                vm.ShowClientDiv=false;
            }
            else if (vm.ShowCommentDiv) {
                vm.ShowCommentDiv=false;
                vm.ShowClientDiv=true;
            }
            else if (vm.ShowSummaryDiv) {
                vm.ShowSummaryDiv=false;
                vm.ShowCommentDiv=true;
            }
        }

        vm.Done = function(){
            $location.path('/tasks')
        }
    }
})();