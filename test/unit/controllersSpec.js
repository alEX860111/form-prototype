describe('formController', function() {

    beforeEach(function() {
        module('controllers');
        scope = {};
    });

    it('should provide a function to process the submitted data', inject(function($controller) {
        var ctrl = $controller('formController', {
            $scope: scope
        });
        expect(scope.processForm).toBeDefined();
    }));

});
