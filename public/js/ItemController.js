'use strict';

var ItemControllers = angular.module('ItemControllers', []);

ItemControllers.controller('ItemListController',
    function($scope, $location, itemData) {
         $scope.items = itemData.query();
         $scope.sortorder = '-likes';
         $scope.upvoteItem = function(item) {
                item.likes++;
                itemData.update({itemId: item._id}, item);
         };
    }
);

ItemControllers.controller('ItemDetailController', 
    function($scope, $routeParams, itemData, $route) {
          $scope.item = itemData.get({itemId: $routeParams.itemId});
          $scope.sortorder = '-likes';
          $scope.reload = function() {
            $route.reload();
          };
          $scope.upvoteItem = function(item) {
                item.likes++;
                itemData.update({itemId: item._id}, item);
          };
        }
);



