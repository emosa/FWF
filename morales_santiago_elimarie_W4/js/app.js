// JavaScript Document
function ListController($scope) {

    $scope.items = [{
        name: 'Potatoes Bag',
        price: 2.50,
        active: true
    }, {
        name: 'Tomatoes',
        price: 1.75,
        active: false
    }, {
        name: 'Bread',
        price: 1.00,
        active: false
    }, {
        name: 'Orange Juice',
        price: 2.50,
        active: false
    }];

    $scope.toggleActive = function(s) {
        s.active = !s.active;
    };

    $scope.total = function() {

        var total = 0;

        angular.forEach($scope.items, function(s) {
            if (s.active) {
                total += s.price;
            }
        });

        return total;
    };
}