var app = angular.module('formApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        .state('form.pdata', {
            url: '/pdata',
            templateUrl: 'form-pdata.html'
        })
        
        .state('form.advanced', {
            url: '/advanced',
            templateUrl: 'form-advanced.html'
        })
        
        .state('form.confirm', {
            url: '/confirm',
            templateUrl: 'form-confirm.html'
        });

    $urlRouterProvider.otherwise('/form/pdata');
});

app.controller('formController', function($scope) {
    $scope.formData = {};

    $scope.processForm = function() {
        alert('You just submitted: \n\n' + JSON.stringify($scope.formData));
        $scope.formData = {};
    };
    
});
