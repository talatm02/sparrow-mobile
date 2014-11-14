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

        vm.ShowClientDiv = true;
        vm.Dates = [];
        vm.TimeSlot = [];
        var dateObj = moment().startOf('day');      
        
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
        
        vm.Next = function()
        {               
            if(vm.ShowClientDiv == true)
            {
                vm.ShowClientDiv = false;
                vm.ShowDateDiv = true;       
            }
            else if(vm.ShowDateDiv == true)
            {
                vm.ShowDateDiv = false;
                vm.ShowSummaryDiv = true;           
            }             

            else if(vm.ShowSummaryDiv == true)
            {
                Appointment.apiNewAppointment();    
            }       
        }

        vm.Back = function()
        {
            if(vm.ShowDateDiv == true)
            {
                vm.ShowDateDiv = false;
                vm.ShowClientDiv = true;
            }
            else if(vm.ShowSummaryDiv == true)
            {
                vm.ShowSummaryDiv = false;
                vm.ShowDateDiv = true;       
            }
        }

        vm.Done = function()
        {
            var time = moment().set(vm.Appointment.Time).format('hh:mm');
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

        vm.selectClient = function(object)
        {
            vm.Appointment.ID = object.ID;
            vm.Appointment.Number = object.Number;
        }

    }
})();