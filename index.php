<?php 
require_once('dist/lib/Mobile_Detect.php');
$detect = new Mobile_Detect;
$deviceType = ($detect->isMobile() ? ($detect->isTablet() ? header('Location: mobile.html') : header('Location: mobile.html')) : 'computer');
?>
<!doctype html>
<html lang="fr" ng-app="Portfolio">
<head>
	<meta charset="UTF-8">
	<title>Antoine Savignac</title>
	<meta name="description" content="Antoine Savignac Portfolio" />
	<meta name="keywords" content="antoine, savignac, antoine savignac, portfolio, web, chef de projet, junior" />
	<link rel="stylesheet" href="dist/css/vendor.css">
	<link rel="stylesheet" href="dist/css/app.css">
	<link rel="icon" type="image/png" href="dist/img/favicon.png" />
</head>
<body ng-controller="Main">
	<div id="home"></div>
	<div id="line">
		<object data="dist/svg/logo.svg" id="logo" type="image/svg+xml"></object>
	</div>
	<div id="mask"></div>
	<div class="scroll cursor"></div>
	<div id="projects">
		<div class="wrapper">
			<div id="project-{{$index}}" ng-class="(project.hover) ? 'project active' : 'project'" ng-repeat='project in projects'>
				<div class="Title">{{project.title}}</div>
				<div class="desc">
					{{project.description}}
				</div>
				<div class="imgProject" ng-if="project.background" style="background: url('dist/img/{{project.background}}')"></div>
				<div class="linkProject cursor" ng-mouseover="project.hover = true;" ng-mouseleave="project.hover = false;" ng-if='project.event.active' ng-click='events("{{project.event.value}}")'></div>
				<a class="linkProject cursor" ng-mouseover="project.hover = true;" ng-mouseleave="project.hover = false;" alt="{{project.title}}" target="_blank" ng-href='{{project.link}}' ng-if='!project.event.active'></a>
			</div>
			<div clear></div>
		</div>
	</div>
	<!-- <div id="love"></div> -->
	<div class="socials">
		<a href="https://www.facebook.com/asavignac1" class="nav-link facebook" target="_blank"></a>
		<a href="https://twitter.com/AntoineSavignac" class="nav-link twitter" target="_blank"></a>
		<a href="https://github.com/Nighthawk14" class="nav-link github" target="_blank"></a>
		<a href="http://fr.linkedin.com/pub/antoine-savignac/3b/884/613/" class="nav-link linkedin" target="_blank"></a>
		<a href="https://coderbits.com/NightHawk" class="nav-link coderbits" target="_blank"></a>
		<a href="https://drive.google.com/file/d/0ByTZqMiGXKIAaFBOLVJRdG5GdTg/view?usp=sharing" class="nav-link cv" target="_blank"></a>
	</div>
	<nav>
		<ul>
			<li><a href="#home" class="nav-link home"></a></li>
			<li><a href="#projects" class="nav-link projects"></a></li>
			<!--  <li><a href="#love" class="nav-link love"></a></li>-->
		</ul>
	</nav>
	<div id="kariboo-modal" class="modal fade" role="dialog" aria-hidden="true">
		<div class="modal-header">
	  		<h1>Kariboo</h1>
	  	</div>
	  	<div class="modal-body">
	  		<p><b class="orange">Kariboo</b> est une application mobile IOS développée en Objective-C. Elle permet d'éffectuer des échanges de données entre son mobile et son ordinateur grâce à un réseau wifi.</p>
			<p>J'ai réalisé ce projet dans le cadre de mon <b class="orange">Master 1 à l'ESTEI</b>.</p>
			<p>Kariboo vous permet entre autre de <b class="orange">lire les musiques / videos de votre téléphone portable sur votre ordinateur</b>, de gérer vos contacts ou encore de faire de simple échanges de fichier.</p>
			<p>Ce projet est en cours de réalisation.</p><br />
			<img src="dist/img/Kariboo-main.png" alt="">
			<img src="dist/img/Kariboo-contact.png" alt="">
			<img src="dist/img/Kariboo-music.png" alt="">
	  	</div>
	</div>
	<div id="feux-modal" class="modal fade" role="dialog" aria-hidden="true">
		<div class="modal-header">
	  		<h1>Les feux verts</h1>
	  	</div>
	  	<div class="modal-body">
	  		<p><b class="orange">Les feux verts</b> est une application réalisée pour la mairie de Quebec, lors d'un concours
	  			nommé <b class="orange">Iron Web</b> récompensant la meilleure application réalisée en moins de 72h.</p>
	  		<p>Nous avons (équipe de 6 personnes) remporté les prix de :
	  			<p class="center"><b class="orange">Meilleure application en moins de 72h</b></p>
	  			<p class="center"><b class="orange">Meilleure application desktop</b></p>
	  			<p class="center"><b class="orange">Meilleure application tablette</b></p> 
	  		</p>
	  		<a href="http://www.lesfeuxverts.com" target="_blank" class="cursor submit">Les feux verts</a>
	  		<a href="http://www.ironweb.org" target="_blank" class="cursor submit">Iron Web</a>
	  	</div>
	</div>
	<div id="mobiles-yummy-modal" class="modal fade" role="dialog" aria-hidden="true">
		<div class="modal-header">
	  		<h1>Sites web mobiles / Yummypets</h1>
	  	</div>
	  	<div class="modal-body">
	  		<a href="http://m.yummypets.com/articles/dist/#!/list/" target="_blank" class="cursor submit">Blog mobile</a>
	  		<a href="http://m.yummypets.com/missing/#/" target="_blank" class="cursor submit">Perdu / trouvés</a>
	  		<a href="http://m.yummypets.com/classified/#/" target="_blank" class="cursor submit">Petites annonces</a>
	  	</div>
	</div>

	
	<script type="text/javascript" src="dist/js/vendor.js"></script>
	<script type="text/javascript" src="dist/js/app.js"></script>
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-42237776-1', 'antoinesavignac.fr');
	  ga('send', 'pageview');
	</script>
</body>
</html>
