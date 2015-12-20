'use strict';

/**
 * @ngdoc directive
 * @name antoinesavignacfrApp.directive:tech
 * @description
 * # tech
 */
angular.module('antoinesavignacfrApp')
  .directive('tech',[function () {
    var base = 6;
    var _index = 0;
    var _row = 0;

    var getOffset = function(){return -27*_row;};
    return {
      templateUrl: 'partials/tech.html',
      restrict: 'EA',
      link: function($scope, iElm) {
        var i = $scope.$index;
        
        if(_index % base === 0 && _index !== 0)
        {
          base = (base === 6) ? 5 : 6;
          _index = 0;
          $(iElm).before('<div class="clear"></div>');
          _row++;
        }
        var _class = (base === 6) ? 'even' : 'odd';
        $(iElm).addClass(_class);

        if(i >= 6){
          $(iElm).css('top',getOffset());
        }
        _index++;

        
        if($scope.$last){
          var $w = $('#technos').find('.wrapper');
          $w.height($w.height()+(getOffset()));
          $('#technos').height(($(iElm).offset().top+$(iElm).height())-($('#technos').offset().top));
        }
        
      }
    };
  }])
  .directive('techMobile',[function () {
    return {
      templateUrl: 'partials/tech-mobile.html',
      restrict: 'EA'
    };
  }]);
