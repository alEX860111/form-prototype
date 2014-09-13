var app = angular.module('directives', ['ui.bootstrap']);

app.directive('interpolModel', function($interpolate) {
  return {
    priority: 10000,
    restrict: 'AC',
    controller: function($scope, $element, $attrs) {
      var interpolFctn = $interpolate($attrs.interpolModel || $attrs.name);
      $attrs.$set('name', interpolFctn($scope));
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

app.directive('customRadiochoice', function() {
  return {
    restrict: 'A',
    templateUrl: 'form-radiochoice.html',
    scope: {
      form: '=form',
      data: '=data',
      name: '@name',
      label: '@label',
      value1: '@value1',
      value2: '@value2',
      label1: '@label1',
      label2: '@label2'
    }
  };
});

app.directive('customCheckbox', function() {
  return {
    restrict: 'A',
    templateUrl: 'form-checkbox.html',
    scope: {
      form: '=form',
      data: '=data',
      name: '@name',
      label: '@label'
    }
  };
});

app.directive('customDatefield', function() {
  return {
    restrict: 'A',
    templateUrl: 'form-datefield.html',
    scope: {
      form: '=form',
      data: '=data',
      name: '@name',
      label: '@label'
    },
    controller: function($scope) {
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
    }
  };
});

app.directive('customInputpreview', function() {
  return {
    restrict: 'A',
    templateUrl: 'form-inputpreview.html',
    scope: {
      form: '=form',
      name: '@name'
    },
  };
});
