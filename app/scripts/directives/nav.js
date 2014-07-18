'use strict';

/**
 * @ngdoc directive
 * @name antoinesavignacfrApp.directive:nav
 * @description
 * # nav
 */
angular.module('antoinesavignacfrApp')
  .directive('nav',['$document','$location',function ($document,$location) {
    return {
      templateUrl: 'partials/nav.html',
      restrict: 'A',
      replace:true,
      link: function postLink(scope,element) {
        $(element).css('top',$(window).height()/2 - $(element).height()/2);
        $('nav a').on('click', function(e){
          e.preventDefault();
          var offset,elem;
          var tag = $(this).attr('data-element');
          switch(tag)
          {
            case 'techs':
              elem = $('#technos');
              offset = -30;
            break;

            case 'projects':
              elem = $('#timeline');
              offset = 30;
            break;

            default:
              elem = $('#home');
              offset=0;
            break;
          }
          $document.scrollTo(elem, offset,800).then(function(){
            $location.hash(tag);
            //scope.$apply();
          });
        });
      }
    };
  }]);
