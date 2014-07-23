var app = angular.module('controllers', []);

app.controller('formController', function($scope) {
    $scope.formData = {};

    $scope.processForm = function() {
        alert('You just submitted: \n\n' + JSON.stringify($scope.formData));
        $scope.formData = {};
    };
    
});

app.controller('dateController', function ($scope) {
  $scope.dateOptions = {
  	'datepicker-mode': 'month',
  	'show-weeks': false,
  	'year-range': 20
  };
  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };
});
