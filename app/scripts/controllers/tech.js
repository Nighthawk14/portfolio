'use strict';

/**
 * @ngdoc function
 * @name antoinesavignacfrApp.controller:TechCtrl
 * @description
 * # TechCtrl
 * Controller of the antoinesavignacfrApp
 */
angular.module('antoinesavignacfrApp')
  .controller('TechCtrl', function ($scope) {
    $scope.technos = [
      {
        title: 'AngularJs',
        description: 'Javascript',
        tag:['js','inte'],
        _class: 'angular'
      },
      {
        title: 'Node.Js',
        description: 'Javascript',
        tag:['js'],
        _class: 'node'
      },
      {
        title: 'Grunt',
        description: 'Javascript',
        tag:['js'],
        _class: 'grunt'
      },
      {
        title: 'Express',
        description: 'Javascript',
        tag:['js'],
        _class: 'express'
      },
      {
        title: 'Sails.js',
        description: 'Javascript',
        tag:['js'],
        _class: 'sails'
      },
      {
        title: 'Loopback',
        description: 'Javascript',
        tag:['js'],
        _class: 'loopback'
      },
      {
        title: 'Total.js',
        description: 'Javascript',
        tag:['js'],
        _class: 'totaljs'
      },
      {
        title: 'Backbone',
        description: 'Javascript',
        tag:['js','inte'],
        _class: 'backbone'
      },
      {
        title: 'Cordova',
        description: 'Mobile',
        tag:['mobile','dev'],
        _class: 'cordova'
      },
      {
        title: 'HTML5',
        description: '',
        tag:['inte'],
        _class: 'html5'
      },
      {
        title: 'Karma',
        description: 'Javascript',
        tag:['js'],
        _class: 'karma'
      },
      {
        title: 'KrakenJs',
        description: 'Javascript',
        tag:['js'],
        _class: 'kraken'
      },
      {
        title: 'Socket.io',
        description: 'Javascript',
        tag:['js'],
        _class: 'socket-io'
      },
      {
        title: 'jQuery',
        description: 'Javascript',
        tag:['js','inte'],
        _class: 'jquery'
      },
      {
        title: 'RequireJS',
        description: 'Javascript',
        tag:['js','inte'],
        _class: 'require'
      },
      {
        title: 'Yeoman',
        description: 'TOOLS',
        tag:['dev','inte'],
        _class: 'yeoman'
      },
      {
        title: 'Ionic',
        description: 'Mobile',
        tag:['mobile','dev'],
        _class: 'ionic'
      },
      {
        title: 'Lodash',
        description: 'Javascript',
        tag:['js','inte'],
        _class: 'lodash'
      },
      {
        title: 'CSS3',
        description: '',
        tag:['inte'],
        _class: 'css3'
      },
      {
        title: 'D3.js',
        description: 'Javascript',
        tag:['js','inte'],
        _class: 'd3'
      },
      {
        title: 'Bower',
        description: 'TOOLS',
        tag:['inte','dev'],
        _class: 'bower'
      },
      {
        title: 'MongoDB',
        description: 'DATA',
        tag:['data'],
        _class: 'mongo'
      },
      {
        title: 'Docker',
        description: 'DevOps',
        tag:['dev'],
        _class: 'docker'
      },
      {
        title: 'AWS',
        description: 'DevOps',
        tag:['dev'],
        _class: 'aws'
      },
      {
        title: 'Nginx',
        description: 'DevOps',
        tag:['dev'],
        _class: 'nginx'
      },
      {
        title: 'Chef',
        description: 'DevOps',
        tag:['dev'],
        _class: 'chef'
      },
      {
        title: 'MariaDB',
        description: 'DATA',
        tag:['data'],
        _class: 'mariadb'
      },
      {
        title: 'MySQL',
        description: 'DATA',
        tag:['data'],
        _class: 'mysql'
      },
      {
        title: 'Redis',
        description: 'DATA',
        tag:['data'],
        _class: 'redis'
      },
      {
        title: 'Lucene Solr',
        description: 'DATA',
        tag:['data'],
        _class: 'solr'
      },
      {
        title: 'New Relic',
        description: 'Monitoring',
        tag:['dev'],
        _class: 'new-relic'
      },
      {
        title: 'Prosody',
        description: 'XMPP - lua',
        tag:['dev'],
        _class: 'prosody'
      },
      {
        title: 'XMPP',
        description: 'Protocole',
        tag:['dev'],
        _class: 'xmpp',
      },
      {
        title: 'PHP',
        description: '',
        tag:['dev'],
        _class: 'php'
      },
      // {
      //   title: 'CodeIgniter',
      //   description: 'PHP',
      //   tag:['dev'],
      //   _class: 'codeigniter'
      // },
      // {
      //   title: 'Symfony',
      //   description: 'PHP',
      //   tag:['dev'],
      //   _class: 'symfony'
      // },
      // {
      //   title: 'Zend',
      //   description: 'PHP',
      //   tag:['dev'],
      //   _class: 'zend'
      // },
      {
        title: 'Ruby',
        description: '',
        tag:['dev'],
        _class: 'ruby'
      },
      {
        title: 'Heroku',
        description: 'DevOps',
        tag:['dev'],
        _class: 'heroku'
      },
    ];

    $scope.techFilter = function(ev){
      var filter = ($(ev.currentTarget).attr('class').split(' '))[0];
      if($scope.filter === filter){
        angular.forEach($scope.technos, function(value){
          value.disabled = false;
        });
        $scope.filter = null;
        return;
      }
      $scope.filter = filter;
      var tags = [];

      switch(filter){
        case 'js':
          tags = ['js'];
        break;
        case 'dev':
          tags = ['dev'];
        break;
        case 'data':
          tags = ['data'];
        break;
        case 'inte':
          tags = ['inte','mobile'];
        break;
      }
      angular.forEach($scope.technos, function(value){
        var isTagged = false;
        for(var i in tags){
          if(value.tag.indexOf(tags[i]) === -1){
            isTagged = true;
            break;
          }else
          {
            break;
          }
        }
        value.disabled = isTagged;
      });
    };
  });
