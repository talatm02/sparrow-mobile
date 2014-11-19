(function() {
    'use strict';

    angular
	    .module('myapp')
	    .controller('Visit', Visit);

    Visit.$inject = ['$scope','$location', 'clientservice'];

    function Visit($scope, $location, clientservice) {
	    /*jshint validthis: true */
        var vm = this; 
        

        var URL = "http://localhost/sparrows/api" + "/Sparrow/getClient";
        var postData = {
                "UserRole":"FrontOffice"
                }
        clientservice.apiGetClients(postData,URL).then(function(data){
            vm.Clients = data.clientList;            
        });

        vm.Dates = [];
        vm.TimeSlot = [];
        var dateObj = moment().startOf('day');      
        vm.ShowClientDiv = true;
        vm.Header = "Client";
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

        if (selectedTask.Name == undefined) {

        }
        else {
            vm.ShowSummaryDiv=true;
            vm.ShowClientDiv = false;
            vm.Header = "Summary";
            vm.Appointment={};
            vm.Appointment.Client = selectedTask.Name;
            vm.Appointment.Number = selectedTask.Number;
            vm.Appointment.AppointmentDate = selectedTask.Date;
            vm.Appointment.AppointmentTime = selectedTask.Time;
            console.dir(vm.Appointment);
            
        }

        vm.Next = function()
        {               
            if(vm.ShowClientDiv == true)
            {
                 vm.Header = "Client";

                if (selectedTask.Name != undefined) {
                    vm.ShowSummaryDiv=true;
                    vm.ShowClientDiv=false;
                    vm.Header = "Summary";
                }
                else{
                    vm.ShowClientDiv = false;
                    vm.ShowDateDiv = true;
                    vm.Header = "Date & time";
                }         
            }
            else if(vm.ShowDateDiv == true)
            {
                vm.ShowDateDiv = false;
                vm.ShowSummaryDiv = true;
                vm.Header = "Summary";  
            }             
            else if(vm.ShowSummaryDiv == true)
            {
                Appointment.apiNewAppointment();
                vm.Header = "Summary";    
            } 

        }

        vm.Back = function()
        {
            if(vm.ShowDateDiv == true)
            {
                if (selectedTask.Name != undefined) {
                    vm.ShowSummaryDiv=true;
                    vm.ShowDateDiv=false;
                    vm.Header = "Summary";
                }
                else{
                    vm.ShowDateDiv = false;
                    vm.ShowClientDiv = true;
                    vm.Header = "Client";
                }
                
            }
            else if(vm.ShowSummaryDiv == true)
            {
                vm.ShowSummaryDiv = false;
                vm.ShowDateDiv = true;
                vm.Header = "Date & time";
            }
        }

        vm.Done = function()
        {
            $location.path('/dashboard');
            /*var time = moment().set(vm.Appointment.Time).format('hh:mm');
            var postData = {
                UserRole: "FrontOffice",
                Date: moment(vm.Appointment.Date,'ddd,MMM Do YY').format('YYYY-MM-DD'),
                Time: vm.Appointment.Time,
                Name: vm.Appointment.Client,
                Number: vm.Appointment.Number,
                ID: vm.Appointment.ID,
                VisitType: "ClientVisit"
            }
            console.dir(postData);
            $location.path('/tasks');
            /*taskservice.apiCreatTask(postData,URL).then(function(data){
                vm.Clients = data.clientList;            
            });*/
        }
        vm.Cancel = function()
        {
            $location.path('/dashboard');
        }
        vm.selectClient = function(object)
        {
            vm.Appointment.ID = object.ID;
            vm.Appointment.Number = object.Number;
             vm.Header = "Client";
        }

        vm.ShowClientFun = function(){
            vm.ShowClientDiv = true;
            vm.ShowSummaryDiv = false;
             vm.Header = "Client";
        }
        vm.ShowDateFun = function(){
            vm.ShowDateDiv = true;
            vm.ShowSummaryDiv = false;
            vm.Header = "Date & time";
        }
    }
})();