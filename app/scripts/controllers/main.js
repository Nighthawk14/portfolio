'use strict';

/**
 * @ngdoc function
 * @name antoinesavignacfrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the antoinesavignacfrApp
 */
angular.module('antoinesavignacfrApp')
  .controller('MainCtrl', ['$scope',function ($scope) {
    $scope.bob = 'bobby';
    $scope.lang = 'fr';
    $scope.$watch('lang', function(){
      
    });
    $scope.events = function(e){
      switch(e){
        case 'kariboo':
          $('#kariboo-modal').modal('toggle');
        break;

        case 'feux-verts':
          $('#feux-modal').modal('toggle');
        break;

        case 'mobilesYummy':
          $('#mobiles-yummy-modal').modal('toggle');
        break;

        default:
        break;
      }
    };
  }]);
