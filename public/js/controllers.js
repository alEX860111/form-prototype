var app = angular.module('controllers', ['ui.bootstrap']);

app.controller('formController', function($scope) {
  $scope.formData = {};

  $scope.processForm = function() {
    alert('You just submitted: \n\n' + JSON.stringify($scope.formData));
    $scope.formData = {};
  };

  $scope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    console.dir($scope);
    event.preventDefault();
    // if (toState.step > fromState.step && $scope.form.$invalid) {
    //   for (input in $scope.form) {
    //     if (input.charAt(0) != '$' && $scope.form[input].$pristine) {
    //       $scope.form[input].$setTouched();
    //       $scope.form[input].$dirty = true;
    //       $scope.form[input].$pristine = false;
    //     }
    //   }
    //   event.preventDefault();
    // }
  });

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
