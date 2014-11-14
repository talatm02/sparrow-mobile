(function() {
    'use strict';

    angular
	    .module('myapp')
	    .controller('Enquiry', Enquiry);

    Enquiry.$inject = ['$scope','$location'];

    function Enquiry($scope, $location) {
	    /*jshint validthis: true */
        var vm = this; 
        vm.ShowDateDiv = true;

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