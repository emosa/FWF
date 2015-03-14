angular.module("empList", []).controller("EmployeeDirectory", function ($scope, dataService){

	$scope.employeeArray = dataService.getEmployees();

	$scope.addEmployee = function(){
		
		dataService.addEmployee($scope.employee);

		$scope.employee = {
			name:"",
			street:"",
			city:"",
			state:"",
			zip: ""
		};

		
		$scope.employee.name = "";
		$scope.employee.street = "";
		$scope.employee.city = "";
		$scope.employee.state = "";
		$scope.employee.zip = "";
	}

	$scope.deleteEmployee = function(deletedEmployee){
		
		dataService.removeEmployee(deletedEmployee);
	};

});