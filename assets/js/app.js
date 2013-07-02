'use strict';

var app = angular.module('Portfolio', []);

function Main($scope)
{
	$scope.events = function(e){
		switch(e){
			case 'kariboo':
				$('#kariboo-modal').modal('toggle');
			break;

			case 'feux-verts':
				$('#feux-modal').modal('toggle');
			break;

			default:
			break;
		}
	};
	$scope.projects = {
		0: {
			title: "Palm",
			description:"Php - Google API - D3JS",
			link: "http://www.palm-analytics.com",
			background:{'background':'url("assets/img/palm-bg.png")'}
		},
		1: {
			title: "City Dashboard",
			description: "NodeJs - AngularJs",
			link: "http://www.city-dashboard.com",
			background:{'background':'url("assets/img/city-bg.png")'}
		},
		2: {
			title: "Kariboo",
			description: "Objective C - AngularJs",
			link: "#",
			event: {active:true,value:'kariboo'},
			background:{'background':'url("assets/img/kariboo-bg.png")'}
		},
		4: {
			title: "Benoit Dartigues",
			description: "PHP - MySQL",
			link: "http://www.benoitdartigues.fr/",
			background:{'background':'url("assets/img/benoit-bg.png")'}
		},
		3: {
			title: "Les Feux verts",
			description: "IronWeb - FrontEnd - JSON",
			link: "http://www.lesfeuxverts.com",
			event: {active:true,value:'feux-verts'},
			background:{'background':'url("assets/img/feux-bg.png")'}
		},
		6: {
			title: "Semaine-digitale",
			description: "ChartJs - RaphaelJs - CSS",
			link: "http://villedebordeaux.fr/dataviz",
			background:{'background':'url("assets/img/semaine-bg.png")'}
		},
		5: {
			title: "Daubert-Panasyuk",
			description: "Wordpress - AngularJs",
			link: "http://daubert-panasyuk.com/",
			background:{'background':'url("assets/img/daubert-bg.png")'}
		},
		7: {
			title: "Ipass Emploi",
			description: "CodeIgniter - Réseau social",
			link: "http://ipassemploi.com/",
			background:{'background':'url("assets/img/ipassemploi-bg.png")'}
		},
	};
}