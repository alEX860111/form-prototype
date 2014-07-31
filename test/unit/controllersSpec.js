describe('formController', function() {

  var scope;
  var root;

  beforeEach(function() {
    module('controllers');
  });

  beforeEach(inject(function($rootScope, $controller) {
    root = $rootScope;
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

  it('', function(done) {
    var toState = {
      step: 2
    };
    var fromState = {
      step: 1
    };
    scope.form = {
      $invalid: true,
      name: {
        $pristine: true,
        $setTouched: function() {
          console.log("touched");
          done();
        }
      }
    };
    root.$broadcast('$stateChangeStart', toState, null, fromState, null);
    spyOn(scope.form.name, '$setTouched');
    //expect(scope.form.name.$setTouched).toHaveBeenCalled();
  });

});
