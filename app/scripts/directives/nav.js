'use strict';

/**
 * @ngdoc directive
 * @name antoinesavignacfrApp.directive:nav
 * @description
 * # nav
 */
angular.module('antoinesavignacfrApp')
  .directive('nav',['$document',function ($document) {
    return {
      templateUrl: 'partials/nav.html',
      restrict: 'A',
      replace:true,
      link: function postLink(scope,element) {
        $(element).css('top',$(window).height()/2 - $(element).height()/2);
        $('nav a').on('click', function(e){
          e.preventDefault();
          var top;
          switch($(this).attr('href'))
          {
            case '#projects':
              top = parseInt($('#projects').offset().top+70);
            break;

            default:
              top = $($(this).attr('href')).offset().top;
            break;
          }
          $document.scrollTop(top, 800);
        });
      }
    };
  }]);
