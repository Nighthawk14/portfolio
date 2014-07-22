'use strict';

/**
 * @ngdoc overview
 * @name antoinesavignacfrApp
 * @description
 * # antoinesavignacfrApp
 *
 * Main module of the application.
 */
var app = angular.module('antoinesavignacfrApp', ['duScroll','pascalprecht.translate']);

app.config(function ($translateProvider) {
  $translateProvider.translations('fr', {
    JS: 'Javascript',
    DEV: 'Développement',
    DATA: 'Données',
    INTE: 'Integration',
    HOME:'Accueil',
    PROJECTS:'Projets',
    TECHS:'Technologies'
  });
  $translateProvider.translations('en', {
    JS: 'Javascript',
    DEV: 'Development',
    DATA: 'Data',
    INTE: 'Integration',
    HOME:'Home',
    PROJECTS:'Projects',
    TECHS:'Technologies'
  });
  $translateProvider.preferredLanguage('en');
});