angular.module("empList").service("dataService", function(){


var employeesArray = [
		{
			name:"Elimarie Morales",
			street:"927 Bruckner Blvd",
			city:"Bronx",
			state:"NY",
			zip:"10459"
		},
		
		{
			name:"Joel Arroyo",
			street:"430 E Tremont Ave",
			city:"Bronx",
			state:"NY",
			zip:"10457"
		},
		
		{
			name:"Mirelys Cruz",
			street:"1839 Victor St",
			city:"Bronx",
			state:"NY",
			zip:"10462"
		}
	];

	
	this.getEmployees = function(){
		var str = localStorage.getItem("employeeLS");
		
		employeesArray = JSON.parse(str) || employeesArray;
		
		return employeesArray;
	};

	this.addEmployee = function(employee){
		
		employeesArray.push(employee);
		
		var str = JSON.stringify(employeesArray);
		
		localStorage.setItem("employeeLS", str);
	};

	this.removeEmployee = function(employee){
		
		employeesArray.splice(employeesArray.indexOf(employee), 1);
		
		var str = JSON.stringify(employeesArray);
		
		localStorage.setItem("employeeLS", str);
	}
});