describe('formController', function() {

  var scope;

  beforeEach(function() {
    module('controllers');
  });

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('formController', {
      $scope: scope
    });
  }));

  it('should provide an empty formData object', function() {
    expect(scope.formData).toEqual({});
  });

  it('should provide a function to process the submitted data', function() {
    expect(scope.processForm).toBeDefined();
  });

  it('processForm should clear the formData', function() {
    scope.formData = {
      name: 'test'
    };
    scope.processForm();
    expect(scope.formData).toEqual({});
  });

  describe('state transition', function() {
    var toState, fromState;

    beforeEach(inject(function($rootScope) {
      toState = {
        step: 2
      };

      fromState = {
        step: 1
      };

      scope.form = {
        $invalid: true,
        name: {
          $pristine: true,
          $dirty: false,
          $setTouched: function() {}
        }
      };
      spyOn(scope.form.name, '$setTouched');
      $rootScope.$broadcast('$stateChangeStart', toState, null, fromState, null);

    }));

    it('should set form input to touched', function() {
      expect(scope.form.name.$setTouched).toHaveBeenCalled();
    });

    it('should set form input pristine to false', function() {
      expect(scope.form.name.$pristine).toBeFalsy();
    });

    it('should set form input dirty to true', function() {
      expect(scope.form.name.$dirty).toBeTruthy();
    });

  });

});
