describe('formController', function() {

    beforeEach(function() {
        module('controllers');
    });

    it('should provide a function to process the submitted data', inject(function($rootScope, $controller) {
        var scope = $rootScope.$new();
        var ctrl = $controller('formController', {
            $scope: scope
        });
        expect(scope.processForm).toBeDefined();
    }));

});
