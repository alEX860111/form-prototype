describe('formController', function() {

  beforeEach(function() {
    module('controllers');
  });

  it('should provide an empty formData object', inject(function($rootScope, $controller) {
    var scope = $rootScope.$new();
    var ctrl = $controller('formController', {
      $scope: scope
    });
    expect(scope.formData).toEqual({});
  }));

  it('should provide a function to process the submitted data', inject(function($rootScope, $controller) {
    var scope = $rootScope.$new();
    var ctrl = $controller('formController', {
      $scope: scope
    });
    expect(scope.processForm).toBeDefined();
  }));

  it('processForm should clear the formData', inject(function($rootScope, $controller) {
    var scope = $rootScope.$new();
    var ctrl = $controller('formController', {
      $scope: scope
    });

    scope.formData = {
      name: 'test'
    };
    scope.processForm();
    expect(scope.formData).toEqual({});
  }));

});
