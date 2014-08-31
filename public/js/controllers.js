var app = angular.module('controllers', []);

app.factory('Util', function($location) {
    var util = {};
    util.isDevEnabled = function() {
        return $location.search()['dev'] === 'true';
    };
    return util;
});

app.controller('formController', function($scope, Util) {
  $scope.formData = {};

  $scope.processForm = function() {
    alert('You just submitted: \n\n' + JSON.stringify($scope.formData));
    $scope.formData = {};
  };

  $scope.devIsEnabled = Util.isDevEnabled();

  $scope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    console.dir($scope);
    if (toState.step > fromState.step && $scope.form.$invalid) {
      for (input in $scope.form) {
        if (input.charAt(0) != '$' && $scope.form[input].$pristine) {
          $scope.form[input].$setTouched();
          $scope.form[input].$dirty = true;
          $scope.form[input].$pristine = false;
        }
      }
      event.preventDefault();
    }
  });

});
