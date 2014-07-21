'use strict';

/**
 * @ngdoc function
 * @name antoinesavignacfrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the antoinesavignacfrApp
 */
angular.module('antoinesavignacfrApp')
  .controller('MainCtrl', ['$scope','$translate',function ($scope,$translate) {
    $scope.lang = 'fr';
    $scope.changeLanguage = function (key) {
      $translate.use(key);
      $scope.lang = key;
    };
  }]);
