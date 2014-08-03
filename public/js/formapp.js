var app = angular.module('formApp', ['controllers', 'directives', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('form', {
      url: '/form',
      templateUrl: 'form.html',
      controller: 'formController'
    })

    .state('form.pdata', {
      url: '/pdata',
      templateUrl: 'form-pdata.html',
      step: 1
    })

    .state('form.advanced', {
      url: '/advanced',
      templateUrl: 'form-advanced.html',
      step: 2
    })

    .state('form.confirm', {
      url: '/confirm',
      templateUrl: 'form-confirm.html',
      step: 3
    });

    $urlRouterProvider.otherwise('/form/pdata');
});
