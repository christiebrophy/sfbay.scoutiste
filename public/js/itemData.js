'use strict';

var ItemServices = angular.module('ItemServices', ['ngResource']);




ItemServices.factory('itemData', ['$resource', function($resource){
          return $resource('/items/:itemId', {itemId: '@id'}, {
            'update': { method:'PUT' }
          });
      }]);

