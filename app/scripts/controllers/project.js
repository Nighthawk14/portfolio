'use strict';

/**
 * @ngdoc function
 * @name antoinesavignacfrApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the antoinesavignacfrApp
 */

angular.module('antoinesavignacfrApp')
  .controller('ProjectCtrl', function ($scope) {
    $scope.lang = $scope.$parent.$parent.lang;

    $scope.projects = [
      {
        image:'chat-yummypets.jpg',
        title:{
          fr:'Yummypets - TChat',
          en:'Yummypets - Chat'
        },
        description:{
          fr:multiline(function(){
            /*@preserve
            J'ai été chargé de la réalisation du <span class="orange">Tchat en temps réel</span> de la plateforme Yummypets possédant un nombre d'utilisateur supérieur à <span class="orange">150 000</span>.
            J'ai réalisé la partie FrontEnd avec <span class="orange">AngularJS, RequireJS et Strophe</span> ainsi que la partie BackEnd qui se compose de <span class="orange">deux Web Services en Node.Js</span>.
            J'ai aussi mis en place et configurer le <span class="orange">serveur XMPP (Prosody)</span>.
            Les données du Tchat sont stockées dans une <span class="orange">base de donnée MySQL</span>.
             */
          console.log();}),
          en:multiline(function(){
            /*@preserve
            Responsible of creating an <span class="orange">instant messaging service</span> for Yummypets platform with a number of users <span class="orange">exceeding 150 000</span>.
            I made the FrontEnd part with <span class="orange">AngularJS, RequireJS and Strophe</span> and the BackEnd part which is composed of <span class="orange">two Web Services in Node.Js</span>.
            I also set up and configured the <span class="orange">XMPP server (Prosody)</span>. The chat's data are stored in a <span class="orange">MySQL database</span>.
            */
          console.log();})
        },
        url:{
          main:{
            url:'http://www.yummypets.com',
            fr:'Yummypets',
            en:'Yummypets'
          }
        }
      },
      {
        image:'yummypets.jpg',
        title:{
          fr:'Yummypets - Coeur',
          en:'Yummypets - Core'
        },
        description:{
          fr:multiline(function(){
            /*@preserve
            Yummypets est la premiére <span class="orange">plateforme communautaire</span> pour propriétaire d'animaux de compagnie du monde.
            Je participe à la <span class="orange">maintenance</span> et <span class="orange">les mises a jour</span> réguliére du site autant <span class="orange">BackEnd (PHP / Zend) que FrontEnd</span>, ainsi qu'a l'ajout de nouveaux modules.
            */
          console.log();}),
          en:multiline(function(){
            /*@preserve
            Yummypets is the <span class="orange">first community platform for pet owners</span>.
            I participated in the <span class="orange">maintenance and updates</span> of the website <span class="orange">as Backend (PHP / Zend), FrontEnd</span>, and the creating of new modules.
            */
          console.log();})
        },
        url:{
          main:{
            url:'http://www.yummypets.com',
            fr:'Yummypets',
            en:'Yummypets'
          }
        },
        inverted:true
      },
      {
        image:'riohero.jpg',
        title:{
          fr:'Rio Hero',
          en:'Rio Hero'
        },
        description:{
          fr:multiline(function(){
            /*@preserve
            Rio Hero est une application mobile <span class="orange">Android / IOS</span> réalisé pour la coupe du monde de football 2014.
            Elle permet aux utilisateurs de <span class="orange">noter les joueurs</span> aprés chaque rencontre et de voir ensuite les <span class="orange">différents classements</span> proposés.
            Elle à été réalisée avec <span class="orange">AngularJS</span> et compilée avec <span class="orange">Cordova</span>.
            */
          console.log();}),
          en:multiline(function(){
            /*@preserve
            Rio Hero is an <span class="orange">Android / IOS</span> mobile application created for the 2014 Football World Cup.
            It allows users to <span class="orange">mark players</span> after each match and check out the <span class="orange">numerous rankings</span> proposed.
            It was made with <span class="orange">AngularJS</span> and built with <span class="orange">Cordova</span>.
            */
          console.log();})
        },
        url:{
          main:{
            url:'http://www.rioheroapp.com',
            fr:'Site web',
            en:'Website'
          }
        }
      },
      {
        image:'missing-yummypets.jpg',
        title:{
          fr:'Yummypets - Mobile',
          en:'Yummypets - Mobile'
        },
        description:{
          fr:multiline(function(){
            /*@preserve
            Les sites mobiles de Yummypets sont les versions <span class="orange">optimisées pour mobile</span> des différents sites de la plateforme Yummypets (Blog, annonces, perdu/trouvé).
            J'ai réalisé ces sites avec <span class="orange">AngularJS</span>.
            Aucun BackEnd n'est présent car les données viennent directement des <span class="orange">Web Services de Yummypets</span>.
            */
          console.log();}),
          en:multiline(function(){
            /*@preserve
            Yummypets mobile websites are <span class="orange">mobile optimized versions</span> of the differents websites of the Yummypets platform (Blog, classified ads, missing Pets).
            These mobile websites are executed <span class="orange">AngularJS</span> and need no BackEnd since data comes directly from <span class="orange">Yummypets Web Services</span>.
            */
          console.log();})
        },
        url:{
          blog:{
            url:'http://m.yummypets.com/articles/dist/#!/list/',
            fr:'Articles',
            en:'Articles'
          },
          ads:{
            url:'http://m.yummypets.com/classified/#/',
            fr:'Annonces',
            en:'Ads'
          },
          missing:{
            url:'http://m.yummypets.com/missing/#/',
            fr:'Perdu / Trouvé',
            en:'Missing'
          }
        },
        inverted:true
      },
      {
        image:'petsfriendly.jpg',
        title:{
          fr:'Pets Friendly',
          en:'Pets Friendly'
        },
        description:{
          fr:multiline(function(){
            /*@preserve
            La plateforme Pets Friendly est une application web permettant la recherche de <span class="orange">lieux acceptant les animaux de compagnie</span> autour de vous.
            J'ai réalisé l'UX avec <span class="orange">AngularJS</span>, ainsi que <span class="orange">l'API Google maps</span>.
            Le BackEnd à été fait en PHP (Cake) et les données étaient stockées dans <span class="orange">mongoDB</span> avec une réplication dans <span class="orange">Solr</span>.
            */
          console.log();}),
          en:multiline(function(){
            /*@preserve
            Pets Friendly is a web application allowing to geolocated <span class="orange">"pet Friendly" places</span> around you.
            The UX was made with <span class="orange">AngularJS</span>, and <span class="orange">Google maps API</span>.
            BackEnd was made in PHP (Cake), and data was stored in <span class="orange">mongoDB</span> with a replication in <span class="orange">Solr</span>.
            */
          console.log();})
        },
        url:{
          main:{
            url:'http://www.yummypets.com',
            fr:'Yummypets',
            en:'Yummypets'
          }
        },
      },
      {
        image:'contests-yummypets.jpg',
        title:{
          fr:'Yummypets - Jeux concours',
          en:'Yummypets - Contests'
        },
        description:{
          fr:multiline(function(){
            /*@preserve
            Les jeux concours de yummypets sont des <span class="orange">sites évenementiels</span> pour les utilisateurs de la plateforme.
            Ils sont réalisé en <span class="orange">PHP (Zend)</span>.
            */
          console.log();}),
          en:multiline(function(){
            /*@preserve
            Yummypets contests are <span class="orange">event websites</span> for users. They are created in <span class="orange">PHP (Zend)</span>.
            */
          console.log();})
        },
        url:{
          main:{
            url:'http://ymp.io/u/Game',
            fr:'Jeux concours',
            en:'Contests'
          }
        },
        inverted:true
      },
      {
        image:'klesia.jpg',
        title:{
          fr:'Klesia - Video Chat',
          en:'Klesia - Video Chat'
        },
        description:{
          fr:multiline(function(){
            /*@preserve
            Ce projet est composé d'un <span class="orange">tchat texte et vidéo</span> permettant aux utilisateurs de suivre un flux vidéo et de pouvoir écrire dans un espace texte partagé.
            Le flux vidéo était géré par ustream.tv, j'ai réalisé le tchat en <span class="orange">Javascript (Node.Js) avec socket.io</span>.
            */
          console.log();}),
          en:multiline(function(){
            /*@preserve
            This project combines and <span class="orange">instant messaging</span> and <span class="orange">a video chat</span> allowing users to watch a video stream and to write some questions.
            The video stream was manage by ustream.tv and I have executed the chat in <span class="orange">Javascript (Node.Js) with socket.io</span>.
            */
          console.log();})
        }
      },
      {
        image:'ws-yummypets.jpg',
        title:{
          fr:'Web services',
          en:'Web services'
        },
        description:{
          fr:multiline(function(){
            /*@preserve
            Les <span class="orange">web services de yummypets</span> permettent la répartition des données entre les sites internet et les applications mobiles.
            J'ai effectuer des modifications mineures sur ces services. Ils sont réalisés avec <span class="orange">Sinatra (Ruby)</span>.
            */
          console.log();}),
          en:multiline(function(){
            /*@preserve
            <span class="orange">Yummypets web services</span> allows data distribution between websites and mobile applications.
            I have made some minor modifications on these services. The core is in <span class="orange">Sinatra (Ruby)</span>.
            */
          console.log();})
        },
        inverted:true
      },
      {
        image:'city-dashboard.jpg',
        title:{
          fr:'City Dashboard',
          en:'City Dashboard'
        },
        description:{
          fr:multiline(function(){
            /*@preserve
            Le city dashboard est une application web, représentant les <span class="orange">données d'une ville en particulier (transports, méteo, informations)</span>.
            J'ai réalisé l'api permettant la récolte des données (open data, web scrapping, api) avec <span class="orange">Node.Js</span>, et la partie FrontEnd avec <span class="orange">AngularJS</span>.
            */
          console.log();}),
          en:multiline(function(){
            /*@preserve
            City Dashboard is a web application, which brings together <span class="orange">all the data (transports, weather, news) of one's city</span>.
            I have executed the data collection api (open data, web scrapping, api) with <span class="orange">Node.Js</span>, and the FrontEnd with <span class="orange">AngularJS</span>.
            */
          console.log();})
        },
        url:{
          main:{
            url:'http://www.city-dashboard.com/',
            fr:'Site web',
            en:'Website'
          }
        }
      },
      {
        image:'feux-verts.jpg',
        title:{
          fr:'Les feux verts',
          en:'Les feux verts'
        },
        description:{
          fr:multiline(function(){
            /*@preserve
            En février 2013, j'ai participé à <span class="orange">l'Iron Web, un concours international de la meilleure application en 72h à Quebec</span>.
            Nous avons remporté les prix de <span class="orange">meilleure application (tablet, desktop, globale)</span> en équipe.
            Les feux verts est une application permettant la <span class="orange">remontée de données urbaines par les citoyens</span> à la ville via un protocole ouvert (Open 311).
            */
          console.log();}),
          en:multiline(function(){
            /*@preserve
            In february 2013, I participated to the <span class="orange">Iron Web competition in Quebec</span>.
            We have won awards for <span class="orange">best team application (tablet, desktop, global)</span>.
            Les feux verts is an application that allows citizens to send <span class="orange">urban data feedback</span> directly to the authorities through an open protocol (Open 311).
            */
          console.log();})
        },
        url:{
          main:{
            url:'http://www.lesfeuxverts.com/',
            fr:'Les feux verts',
            en:'Les feux verts'
          },
          iron:{
            url:'http://ironweb.org/',
            fr:'Iron Web',
            en:'Iron Web'
          }
        },
        inverted:true
      },
      {
        image:'kariboo.jpg',
        title:{
          fr:'Kariboo',
          en:'Kariboo'
        },
        description:{
          fr:multiline(function(){
            /*@preserve
            <span class="orange">Kariboo</span> est une application mobile IOS développée en Objective-C. Elle permet d'éffectuer des échanges de données entre son mobile et son ordinateur grâce à un réseau wifi.
            Kariboo vous permet entre autre de <span class="orange">lire les musiques / videos de votre téléphone portable sur votre ordinateur</span>, de gérer vos contacts ou encore de faire de simple échanges de fichier.
            J'ai réalisé ce projet dans le cadre de mon <span class="orange">Master 1 à l'ESTEI</span>.
            <img src="images/projets/Kariboo-music.png">
            */console.log();}),
           en:multiline(function(){
            /*@preserve
            <span class="orange">Kariboo</span> is an IOS application developed in Objective-C. It allows data exchange between your smartphone and your computer through a wifi network.
            Kariboo also allows you <span class="orange">to play music or videos from your smartphone on your computer</span>, to manage your contacts or even to make file exchanges.
            I have executed this project under my <span class="orange">Master degree at ESTEI</span>.
            <img src="images/projets/Kariboo-music.png">
            */console.log();})
        }
      },
      {
        image:'palm.jpg',
        title:{
          fr:'Palm',
          en:'Palm'
        },
        description:{
          fr:multiline(function(){
          /*@preserve
          <span class="orange">Palm</span> est une application web basée sur Google analytics, vous permettant d'éffectuer une représentation <span class="orange">graphique de vos données analytics</span>.
          J'ai réalisé la partie FrontEnd avec <span class="orange">D3.JS</span>, une librairie faite pour traiter visuellement des données, et la partie BackEnd (connexion à l'API analytics et récolte / traitement des données) en <span class="orange">PHP</span>.
          */console.log();}),
         en:multiline(function(){
          /*@preserve
          <span class="orange">Palm</span> is a web application based on Google analytics. It allows you to make a <span class="orange">graphical représentation of your analytics datas</span>.
          I have executed the FrontEnd part with <span class="orange">D3.JS</span>, a library made ​​for visually processing data, and the BackEnd part (analytics api connection and data collection / treatment) with <span class="orange">PHP</span>.
          */console.log();})
        },
        url:{
          main:{
            url:'http://www.palm-analytics.com/',
            fr:'Site web',
            en:'Website'
          }
        },
        inverted:true
      }
    ];

    $scope.pr = this;
  });
