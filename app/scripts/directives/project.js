'use strict';

/**
 * @ngdoc directive
 * @name antoinesavignacfrApp.directive:Project
 * @description
 * # Project
 */
angular.module('antoinesavignacfrApp')
  .directive('project', function () {
    return {
      templateUrl: 'partials/project.html',
      restrict: 'EA'
    };
  });
