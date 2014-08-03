var app = angular.module('directives', []);

app.directive('textfield', function() {
  return {
    restrict: 'A',
    scope: {
      label: '@',
      datafield: '@',
      ngModel: '='
    },
    templateUrl: 'form-textfield.html'
  };
});
