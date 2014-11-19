(function() {
    'use strict';

    angular
	    .module('myapp')
	    .controller('Enquiry', Enquiry);

    Enquiry.$inject = ['$scope','$location'];

    function Enquiry($scope, $location) {
	    /*jshint validthis: true */
        
        var vm = this; 


        vm.Dates = [];
        vm.TimeSlot = [];
        var dateObj = moment().startOf('day');
        vm.Header = "Date & time";
        for(var i=0;i<20;i++)
        {
            if (i==0) 
                vm.Dates.push(dateObj.format('ddd,MMM Do YY'));
            else
                vm.Dates.push(dateObj.add(1,'days').format('ddd,MMM Do YY'));            
        }
        dateObj.add(7,'h');
        for (var j = 0; j < 25; j++) {
            vm.TimeSlot.push(dateObj.add(30,'m').format('hh:mm A'));
        };

        //console.dir(selectedTask);
        if (selectedTask.Name == undefined) {
            vm.ShowDateDiv = true;
            vm.Header = "Date & time";
            
        }
        else {
            vm.ShowSummaryDiv=true;
            vm.Appointment={};
            vm.Appointment.Client = selectedTask.Name;
            vm.Appointment.Number = selectedTask.Number;
            vm.Appointment.AppointmentDate = selectedTask.Date;
            vm.Appointment.AppointmentTime = selectedTask.Time;
            vm.Appointment.AppointmentComment = selectedTask.Comment;
            vm.Header = "Summary";            
        }
        
        

        vm.Next = function(){

            console.dir(selectedTask.Name);
            if (vm.ShowDateDiv == true) {
                //Edit for Existing Task
                vm.Header = "Date & time";

                if (selectedTask.Name != undefined) {
                    vm.ShowSummaryDiv=true;
                    vm.ShowDateDiv=false;
                    vm.Header = "Summary";
                }
                else{
                    vm.ShowDateDiv=false;
                    vm.ShowClientDiv=true;
                     vm.Header = "Client";
                }
            }
            else if (vm.ShowClientDiv == true) {

                    vm.Header = "Client";

                    if (selectedTask.Name != undefined) {
                        vm.ShowSummaryDiv=true;
                        vm.ShowClientDiv=false;
                         vm.Header = "Summary";
                    }
                    else{
                        vm.ShowCommentDiv=true;
                        vm.ShowClientDiv=false;
                         vm.Header = "Comment";
                    }
            }
            else if (vm.ShowCommentDiv) {
                vm.ShowSummaryDiv=true;
                vm.ShowCommentDiv=false;
                vm.Header = "Summary";

            }
        }

        vm.Back = function(){
            if (vm.ShowClientDiv == true) {
                vm.Header = "Client";

                if (selectedTask.Name != undefined) {
                    vm.ShowSummaryDiv=true;
                    vm.ShowClientDiv=false;
                    vm.Header = "Summary";
                }
                else{
                    vm.ShowDateDiv=true;
                    vm.ShowClientDiv=false;
                    vm.Header = "Date & time";
                }
                
            }
            else if (vm.ShowCommentDiv == true) { 
                 vm.Header = "Comment";

                if (selectedTask.Name != undefined) {
                    vm.ShowSummaryDiv=true;
                    vm.ShowCommentDiv=false;
                    vm.Header = "Summary";
                }
                else{
                    vm.ShowClientDiv=true;
                    vm.ShowCommentDiv=false;
                    vm.Header = "Client";
                }
                
            }
            else if (vm.ShowSummaryDiv == true) {

                vm.ShowCommentDiv=true;
                vm.ShowSummaryDiv=false;
                vm.Header = "Comment";
            }
        }

        vm.Done = function(){
            $location.path('/dashboard')
        }
        vm.Cancel = function(){
            $location.path('/dashboard')
        }
        vm.ShowDateFun = function(){
            vm.ShowDateDiv = true;
            vm.ShowSummaryDiv = false;
            vm.Header = "Date & time";
        }
        vm.ShowClientFun = function(){
            vm.ShowClientDiv = true;
            vm.ShowSummaryDiv = false;
            vm.Header = "Client";
        }
        vm.ShowCommentFun = function(){
            vm.ShowCommentDiv=true;
            vm.ShowSummaryDiv = false;
            vm.Header = "Comment";
        }
    }
})();