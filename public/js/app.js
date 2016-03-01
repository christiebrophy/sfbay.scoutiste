'use strict';

var itemsApp = angular.module('itemsApp', [
  'ngRoute',
  'ItemControllers',
  'ItemServices'
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
            otherwise({ 
                redirectTo: '/items' 
       });
  }]);

      
