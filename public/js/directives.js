var app = angular.module('directives', []);

app.directive('interpolForm', function($interpolate) {
  return {
    restrict: 'AC',
    priority: 10000,
    controller: function($scope, $element, $attrs) {
      $attrs.$set('name', $interpolate($attrs.interpolForm || $attrs.name)($scope));
      $element.data('$interpolFormController', null);
    }
  };
});

app.directive('interpolModel', function($interpolate) {
  return {
    priority: 10000,
    restrict: 'AC',
    controller: function($scope, $element, $attrs) {
      $attrs.$set('name', $interpolate($attrs.interpolModel || $attrs.name)($scope));
      $element.data('$interpolModelController', null);
    }
  };
});

app.directive('customTextfield', function() {
  return {
    restrict: 'A',
    templateUrl: 'form-textfield.html',
    scope: {
      form: '=form',
      data: '=data',
      type: '@type',
      name: '@name',
      label: '@label'
    }
  };
});
