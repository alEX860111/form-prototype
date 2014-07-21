angular.module('formApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/pdata)
        .state('form.pdata', {
            url: '/pdata',
            templateUrl: 'form-pdata.html'
        })
        
        // url will be /form/advanced
        .state('form.advanced', {
            url: '/advanced',
            templateUrl: 'form-advanced.html'
        })
        
        // url will be /form/confirm
        .state('form.confirm', {
            url: '/confirm',
            templateUrl: 'form-confirm.html'
        });
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/pdata');
})

.controller('formController', function($scope) {
    $scope.formData = {};

    $scope.processForm = function() {
        alert('awesome!');  
    };
    
});

