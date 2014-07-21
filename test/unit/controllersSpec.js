describe('formcontroller', function() {

    beforeEach(function() {
        module('myapp');
        scope = {};
    });

    it('should do something', inject(function($controller) {
        var ctrl = $controller('formcontroller', {
            $scope: scope
        });
        expect(ctrl.submitForm).toBeDefined();
    }));

});
