'use strict';

/**
 * @ngdoc directive
 * @name antoinesavignacfrApp.directive:line
 * @description
 * # line
 */
angular.module('antoinesavignacfrApp')
  .directive('line', ['$document',function ($document) {
    return {
      templateUrl: 'partials/line.html',
      restrict: 'EA',
      link: function postLink() {
        $('.scroll').on('click', function(){
          var someElement = angular.element(document.getElementById('timeline'));
          $document.scrollToElement(someElement, 30, 800);
        });
      }
    };
  }]);
