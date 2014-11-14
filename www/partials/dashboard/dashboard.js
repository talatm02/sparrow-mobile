(function() {
    'use strict';

    angular
	    .module('myapp')
	    .controller('Dashboard', Dashboard);

    Dashboard.$inject = ['$scope','$location'];

    function Dashboard($scope, $location) {
	    /*jshint validthis: true */
        var vm = this;
    }
})();