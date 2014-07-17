'use strict';

/**
 * @ngdoc function
 * @name antoinesavignacfrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the antoinesavignacfrApp
 */
angular.module('antoinesavignacfrApp')
  .controller('MainCtrl', ['$scope',function ($scope) {
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
        title: 'Sites mobiles',
        description: 'AngularJs - Grunt - RequireJs',
        event: {active:true, value:'mobilesYummy'},
        _class: 'mobile-yummy'
      },
      {
        title: 'City Dashboard',
        description: 'NodeJs - AngularJs',
        link: 'http://www.city-dashboard.com',
        _class:'city-dashboard'
      },
      {
        title: 'Kariboo',
        description: 'Objective C - AngularJs',
        link: '#',
        event: {active:true,value:'kariboo'},
        _class:'kariboo'
      },
      {
        title: 'Les Feux verts',
        description: 'IronWeb - FrontEnd - JSON',
        link: 'http://www.lesfeuxverts.com',
        event: {active:true,value:'feux-verts'},
        _class:'feux-vert'
      },
      {
        title: 'Palm',
        description:'Php - Google API - D3JS',
        link: 'http://www.palm-analytics.com',
        _class:'palm'
      },
      /*{
        title: 'Benoit Dartigues',
        description: 'PHP - MySQL',
        link: 'http://www.benoitdartigues.fr/',
        _class:'benoit-bg.png'
      },*/
      {
        title: 'Semaine-digitale',
        description: 'ChartJs - RaphaelJs - CSS',
        link: 'http://villedebordeaux.fr/dataviz',
        _class:'semaine-digitale'
      },
      {
        title: 'Daubert-Panasyuk',
        description: 'Wordpress - AngularJs',
        link: 'http://daubert-panasyuk.com/',
        _class:'daubert'
      },
      {
        title: 'Ipass Emploi',
        description: 'CodeIgniter - Réseau social',
        link: 'http://ipassemploi.com/',
        _class:'ipassemploi'
      },
    ];
  }]);
