<!doctype html>
<html lang="fr" ng-app="Portfolio">
<head>
	<meta charset="UTF-8">
	<title>Antoine Savignac</title>
	<link rel="stylesheet" href="assets/css/reset.css">
	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/styles.css">
	<script type="text/javascript" src="components/angularjs/angular.min.js"></script>
	<script type="text/javascript" src="assets/js/app.js"></script>
</head>
<body ng-controller="Main">
	<div id="line">
		<object data="assets/svg/logo.svg" id="logo" type="image/svg+xml"></object>
	</div>
	<div id="mask"></div>
	<div class="scroll cursor"></div>
	<div id="projects">
		<div class="wrapper">
			<div id="EachProject" ng-repeat='project in projects'>
				<div class="Title">{{project.title}}</div>
				<div class="desc">
					{{project.description}}
				</div>
				<div class="imgProject" ng-style="project.background"></div>
				<div class="linkProject cursor" ng-show='{{project.event.active}}' ng-click='events("{{project.event.value}}")'></div>
				<a class="linkProject cursor" target="_blank" ng-href='{{project.link}}' ng-hide='{{project.event.active}}'></a>
			</div>
			<div class="clear"></div>
		</div>
	</div>
	<div class="socials">
		<a href="https://www.facebook.com/asavignac1" class="facebook" target="_blank"></a>
		<a href="https://twitter.com/AntoineSavignac" class="twitter" target="_blank"></a>
		<a href="https://github.com/Nighthawk14" class="github" target="_blank"></a>
		<a href="http://fr.linkedin.com/pub/antoine-savignac/3b/884/613/" class="linkedin" target="_blank"></a>
	</div>
	<div id="modalContact" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
		  	<div class="modal-header">
		  		<object data="assets/svg/logo.svg" type="image/svg+xml"></object>
		  		<h1>Contact us</h1>
		  	</div>
		  	<div class="modal-body">
		  		<form name="form-contact" id="form-contact">
			  		<input type="mailing" name="mailing" placeholder="Email Address">
			  		<textarea name="message" placeholder="Your message"></textarea>
					<div class="clear"></div>
					<div onclick="subscribe()" class="cursor submit">SUBMIT</div>
				</form>
		  	</div>
		</div>	
	<div id="kariboo-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-header">
	  		<h1>Kariboo</h1>
	  	</div>
	  	<div class="modal-body">
	  		<p><b class="orange">Kariboo</b> est une application mobile IOS développée en Objective-C. Elle permet d'éffectuer des échanges de données entre son mobile et son ordinateur grâce à un réseau wifi.</p>
			<p>J'ai réalisé ce projet dans le cadre de mon <b class="orange">Master 1 à l'ESTEI</b>.</p>
			<p>Kariboo vous permet entre autre de <b class="orange">lire les musiques / videos de votre téléphone portable sur votre ordinateur</b>, de gérer vos contacts ou encore de faire de simple échanges de fichier.</p>
			<p>Ce projet est en cours de réalisation.</p><br />
			<p>Screenshots à venir..</p>
	  	</div>
	</div>
	<div id="feux-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-header">
	  		<h1>Les feux verts</h1>
	  	</div>
	  	<div class="modal-body">
	  		<a href="http://www.lesfeuxverts.com" target="_blank" class="cursor submit">Les feux verts</a>
	  		<a href="http://www.ironweb.org" target="_blank" class="cursor submit">Iron Web</a>
	  	</div>
	</div>
	<script type="text/javascript" src="components/jquery/jquery.min.js"></script>
	<script type="text/javascript" src="components/jquery-ui/ui/minified/jquery.ui.effect.min.js"></script>
	<script type="text/javascript" src="components/jquery.scrollTo/jquery.scrollTo.min.js"></script>
	<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="assets/js/script.js"></script>
</body>
</html>