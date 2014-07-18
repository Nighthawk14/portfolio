'use strict';

$(document).ready(function(){
  $('#home').css({
    height:$(window).height(),
    width:$(window).width()
  });

  $('div[id^=EachProject]').each(function(){
    var ul = $(this).find('ul');
    ul.css('left',$(this).width()/2 - ul.width()/2);
  });

  $('.socials').css('top',$(window).height()/2 - $('.socials').height()/2);
});
$(window).resize(function(){
  $('.socials').css('top',$(window).height()/2 - $('.socials').height()/2);
  $('nav').css('top',$(window).height()/2 - $('nav').height()/2);
});



