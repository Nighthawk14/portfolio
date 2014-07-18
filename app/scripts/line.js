'use strict';
var angle;
function anim(){
  $('#mask').animate({
    'left': $(window).width()*3,
    'top': -$(window).height()*3+100
  }, {
    duration: 3000,
    specialEasing: {
      'left': 'easeInOutCubic',
      'top': 'easeInOutCubic'
    },
    complete: function() {
      $(this).css('display','none');
    }
  });
}
function setAngle(div)
{
  div.css('-webkit-transform', 'scale(1) rotate(' + (-1) * angle + 'deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg)');
  div.css('-moz-transform', 'scale(1) rotate(' + (-1) * angle + 'deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg)');
  div.css('-o-transform', 'scale(1) rotate(' + (-1) * angle + 'deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg)');
  div.css('-ms-transform', 'scale(1) rotate(' + (-1) * angle + 'deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg)');
  div.css('transform', 'scale(1) rotate(' + (-1) * angle + 'deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg)');
}

function calcDiagonal(){

  var scrW = $(window).width();
  var scrH = $(window).height();
  angle = (Math.atan(scrH / scrW)) * (180/Math.PI);
  var line = $('#line,#mask');
  var length = Math.sqrt(( scrW * scrW) + (scrH * scrH ))+10;
  line.css('left', ( -1 ) * ((length - scrW) / 2) );
  line.css('width', length);
  line.css('top', (scrH / 2)-$('#line').height()/2);
  setAngle(line);
  $('#mask').css('top',(scrH / 2)-$('#mask').height()/2);
}
$(document).ready(function(){
  calcDiagonal();
  anim();
});

$(window).on('resize', function(){
  calcDiagonal();
});