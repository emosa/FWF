var app = angular.module('appList',[]);
	
	app.controller('GroceryList', ['$scope', function($scope){
	
	$scope.items = [
		
			{'name':'Sofrito','done':false},
			{'name':'Sazon','done':false},
			{'name':'Chicken','done':false},
			{'name':'Bread','done':false},
			{'name':'Tomatoes','done':false}
];
	
	$scope.addItem = function(){
		$scope.items.push({name: $scope.item, done:false});
		$scope.item = "";
	};
	
	$scope.deleteItem = function(index){
    	$scope.items.splice(index, 1);
  	}	
	
}]);