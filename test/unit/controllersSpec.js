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

});
