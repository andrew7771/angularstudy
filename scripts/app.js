(function (){
	var app = angular.module("toDoList", ["ngRoute"]);

	app.config(function ($routeProvider) {
		$routeProvider.
			when("/lesson1/list", {
				templateUrl:"views/001/list.html",
				controller: "eventHandlerController"
			}).
			when("/lesson1/todolist", {
				templateUrl:"views/001/todolist.html",
				controller: "toDoListController"
			}).
			when("/lesson2/calculator", {
				templateUrl:"views/002/calculator.html",
				controller: "calcController"
			})
			
			.otherwise({ redirectTo: 'lesson1/todolist' });
	});

})();