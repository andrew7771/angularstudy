(function () {

		var toDoListHandler = function() {
			var toDoList = [];

			toDoList.push(new item("Learn Angular", "Deeper", new Date(2018, 3, 8), true));

			function item(name, desc, date, completed) {		
				return {
					name : name,
					desc : desc,
					date : date,
					completed : completed
				}
			};

			function addItem(item) {
				toDoList.push(item);
				
				item = null;
				return toDoList;
			};

			return { 
				addItem: addItem,
				item : item,
				toDoList : toDoList
			}; 
		};		

		var app = angular.module("toDoList");
		app.factory('toDoListHandler', toDoListHandler);
})();