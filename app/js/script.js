$.scrollTo(0,1);

$(document).ready(function(){
	$.scrollTo(0,1);
	calcDiagonal();
	anim();

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
	calcDiagonal();
	$('.socials').css('top',$(window).height()/2 - $('.socials').height()/2);
	$('nav').css('top',$(window).height()/2 - $('nav').height()/2);
});

$('.scroll').on('click', function(){
	var top = parseInt($('#projects').offset().top+30);
		$.scrollTo(top,800,{axis:'y'});
});

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
	      	is_intro = false;
	    }
	});
}

function calcDiagonal(){

	scrW = $(window).width();
	scrH = $(window).height();
	angle = (Math.atan(scrH / scrW)) * (180/Math.PI);
	var line = $('#line,#mask');
	var length = Math.sqrt(( scrW * scrW) + (scrH * scrH ))+10;
	line.css('left', ( -1 ) * ((length - scrW) / 2) );
	line.css('width', length);
	line.css('top', (scrH / 2)-$('#line').height()/2);
	setAngle(line);
	$('#mask').css('top',(scrH / 2)-$('#mask').height()/2);
}

function setAngle(div)
{
	div.css("-webkit-transform", "scale(1) rotate(" + (-1) * angle + "deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg)");
	div.css("-moz-transform", "scale(1) rotate(" + (-1) * angle + "deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg)");
	div.css("-o-transform", "scale(1) rotate(" + (-1) * angle + "deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg)");
	div.css("-ms-transform", "scale(1) rotate(" + (-1) * angle + "deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg)");
	div.css("transform", "scale(1) rotate(" + (-1) * angle + "deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg)");
}