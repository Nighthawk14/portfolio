'use strict';

/**
 * @ngdoc directive
 * @name antoinesavignacfrApp.directive:nav
 * @description
 * # nav
 */
angular.module('antoinesavignacfrApp')
  .directive('nav',['$document','$location','$translate',function ($document,$location,$translate) {
    return {
      templateUrl: 'partials/nav.html',
      restrict: 'A',
      scope:true,
      replace:true,
      link: function postLink(scope,element) {
        var setTranslation = function(){
          $(element).find('.nav-link').each(function(k,value){
            var key = $(value).attr('data-key');
            $translate(key).then(function (translation) {
              $(value).attr({
                'data-original-title':translation,
                'title':translation
              });
            });
          });
        };
        scope.$parent.$parent.$watch('lang', function(){
          setTranslation();
        });
        $(element).find('.nav-link').tooltip();
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
          });
        });
      }
    };
  }]);
