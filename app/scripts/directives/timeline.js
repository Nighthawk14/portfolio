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
  })
  .directive('description', function(){
    return {
      template:'<p></p>',
      restrict:'EA',
      scope:true,
      replace:true,
      link: function(scope,elem){
        scope.$parent.$parent.$parent.$watch('lang', function(newValue){
          if(scope.project.description){
            $(elem).html(scope.project.description[newValue]);
          }
        });
      }
    };
  });
