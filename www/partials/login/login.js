(function() {
    'use strict';

    angular
	    .module('myapp')
	    .controller('Login', Login);

    Login.$inject = ['$scope','$location'];

    function Login($scope, $location, loginservice) {
	    /*jshint validthis: true */
        var vm = this;
        vm.login = function(){
        	var postData = {
        		UserName:vm.UserName,
        		Password:vm.Password
        	}
        	$location.path('/dashboard')
		   	/*loginservice.service.apiLogin(postData,completeURL).then(function(){

		   	})*/
        }
    }
})();