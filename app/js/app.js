'use strict';

var app = angular.module('Portfolio', ['Portfolio.controllers']);

angular.module('Portfolio.controllers',[])
.controller('Main', ['$scope', function($scope){
	$scope.events = function(e){
		switch(e){
			case 'kariboo':
				$('#kariboo-modal').modal('toggle');
			break;

			case 'feux-verts':
				$('#feux-modal').modal('toggle');
			break;

			case 'mobilesYummy':
				$('#mobiles-yummy-modal').modal('toggle');
			break;

			default:
			break;
		}
	};
	$scope.projects = [
		{
			title: "Sites mobiles",
			description: "AngularJs - Grunt - RequireJs",
			event: {active:true, value:'mobilesYummy'},
			background:{'background':'url("dist/img/mobile-yummy.png")'}
		},
		{
			title: "City Dashboard",
			description: "NodeJs - AngularJs",
			link: "http://www.city-dashboard.com",
			background:{'background':'url("dist/img/city-bg.png")'}
		},
		{
			title: "Kariboo",
			description: "Objective C - AngularJs",
			link: "#",
			event: {active:true,value:'kariboo'},
			background:{'background':'url("dist/img/kariboo-bg.png")'}
		},
		{
			title: "Les Feux verts",
			description: "IronWeb - FrontEnd - JSON",
			link: "http://www.lesfeuxverts.com",
			event: {active:true,value:'feux-verts'},
			background:{'background':'url("dist/img/feux-bg.png")'}
		},
		{
			title: "Palm",
			description:"Php - Google API - D3JS",
			link: "http://www.palm-analytics.com",
			background:{'background':'url("dist/img/palm-bg.png")'}
		},
		{
			title: "Benoit Dartigues",
			description: "PHP - MySQL",
			link: "http://www.benoitdartigues.fr/",
			background:{'background':'url("dist/img/benoit-bg.png")'}
		},
		{
			title: "Semaine-digitale",
			description: "ChartJs - RaphaelJs - CSS",
			link: "http://villedebordeaux.fr/dataviz",
			background:{'background':'url("dist/img/semaine-bg.png")'}
		},
		{
			title: "Daubert-Panasyuk",
			description: "Wordpress - AngularJs",
			link: "http://daubert-panasyuk.com/",
			background:{'background':'url("dist/img/daubert-bg.png")'}
		},
		{
			title: "Ipass Emploi",
			description: "CodeIgniter - Réseau social",
			link: "http://ipassemploi.com/",
			background:{'background':'url("dist/img/ipassemploi-bg.png")'}
		},
	];
}]);