(function() {
	var app = angular.module('toDoList');

	var toDoListController = function($scope, toDoListHandler) {
		$scope.toDoList = [
		{name :"Learn Angular",desc : "Deeper",date : new Date(2018, 3, 8), completed :true  

		}];

		$scope.isShownDetail = false;
		$scope.getDescription = function() {
			debugger;
			$scope.isShownDetail = true;
			$scope.description = this.item.desc;
		}
		
		$scope.addItem = function(toDoItem) {
			$scope.toDoList.push( {name: toDoItem.name, desc: toDoItem.desc, date : toDoItem.date, completed: toDoItem.completed});	
		};

		$scope.setStyle = function(completed){
			return completed ? "color:green" : "color:red";
		};

		$scope.showText = function(completed) {
			return completed ? "Yes" : "No";
		};


	};


	app.controller('toDoListController', toDoListController);
})();