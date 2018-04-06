(function() {
	var app = angular.module('toDoList');


	var calcController = function($scope) {

		$scope.val1 = 0;
		$scope.val2 = 0;


		$scope.add = function() {
			
			$scope.result = +$scope.val1 + +$scope.val2;
		};

		$scope.sub = function() {
			$scope.result = +$scope.val1 - +$scope.val2;
		};

		$scope.mul = function() {
			$scope.result = +$scope.val1 * +$scope.val2;
		};

		$scope.div = function() {
			$scope.result = +$scope.val1 / +$scope.val2;
		};
	};


	app.controller('calcController', calcController);
})()