'use strict';
$.scrollTo(0,1);

$(document).ready(function(){
  $.scrollTo(0,1);
  $('#home').css({
    height:$(window).height(),
    width:$(window).width()
  });

  $('div[id^=EachProject]').each(function(){
    var ul = $(this).find('ul');
    ul.css('left',$(this).width()/2 - ul.width()/2);
  });

  $('.socials').css('top',$(window).height()/2 - $('.socials').height()/2);
  $('nav').css('top',$(window).height()/2 - $('nav').height()/2);

  $('nav a').on('click', function(e){
    e.preventDefault();
    var top;
    switch($(this).attr('href'))
    {
      case '#projects':
        top = parseInt($('#projects').offset().top+30);
      break;

      default:
        top = $($(this).attr('href')).offset().top;
      break;
    }
    $.scrollTo(top,800,{axis:'y'});
  });
});
$(window).resize(function(){
  $('.socials').css('top',$(window).height()/2 - $('.socials').height()/2);
  $('nav').css('top',$(window).height()/2 - $('nav').height()/2);
});



