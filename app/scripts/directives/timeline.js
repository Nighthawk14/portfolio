'use strict';

/**
 * @ngdoc directive
 * @name antoinesavignacfrApp.directive:timeline
 * @description
 * # timeline
 */
angular.module('antoinesavignacfrApp')
  .directive('timeline', function () {
    return {
      templateUrl: 'partials/timeline.html',
      restrict: 'EA'
    };
  });
