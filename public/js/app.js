'use strict';

var itemsApp = angular.module('itemsApp', [
  'ngRoute',
  'ItemControllers',
  'ItemServices',
  'ContactPage',
  'ngValidate',
]);

itemsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
            when('/items', 
            {
                templateUrl: 'templates/ItemList.html',
                controller: 'ItemListController'
            }).
            when('/items/:itemId', {
             
                templateUrl: 'templates/ItemDetail.html',
                controller: 'ItemDetailController'
            }).
            when('/about', {
             
                templateUrl: 'templates/about.html'
            }).
             when('/contact', {
             
                templateUrl: 'templates/contact.html',
                controller: 'ContactController',
                controllerAs: 'vm'
            }).
            otherwise({ 
                redirectTo: '/items' 
       });
  }]);

      
