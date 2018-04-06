(function (){
	var app = angular.module('toDoList');

	var eventHandlerController = function($scope) {
		$scope.msg = "hello";


		$scope.events = [
		{Title: "Title1", edate: new Date(), content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
		{Title: "Title2", edate: new Date(), content: "Lorem ipsum dolor sghetjgydtughjkghk,fhlfukkxrhkt amet, consectetur adipisicing elit, sed do eiusmod, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
		]
	};

	app.controller('eventHandlerController', eventHandlerController);
	
})();

