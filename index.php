<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Antoine Savignac</title>
	<style>
	body{
		overflow: hidden;
	}
	#line{
		position:absolute;
		top:0;
		height:10px;
		width:2000px;
		background:#E95A2D;
		left:0;
		-moz-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
		-webkit-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
		-o-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
		-ms-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
		transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
	}
</style>
</head>
<body>
	<object data="assets/svg/logo.svg" type="image/svg+xml"></object>
	<div id="line"></div>
	<script type="text/javascript" src="assets/js/jquery-2.0.2.min.js"></script>
	<script>
		$(document).ready(function(e){
			calcDiagonal();
		});
		$(window).resize(function(){
			calcDiagonal();
		});
		function calcDiagonal(){
			scrW = $(window).width();
			scrH = $(window).height();
			angle = (Math.atan(scrH / scrW)) * (180/3.14);
			var line = $('#line');
			var length = Math.sqrt(( scrW * scrW) + (scrH * scrH ))+10;
			line.css('left', ( -1 ) * ((length - scrW) / 2) );
			line.css('width', length);
			line.css('top', (scrH / 2)-line.height()/2);
			line.css("-webkit-transform", "scale(1) rotate(" + (-1) * angle + "deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg)");
		}
	</script>
</body>
</html>