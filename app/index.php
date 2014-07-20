<?php
// require_once('../vendor/mobiledetect/mobiledetectlib/Mobile_Detect.php');
// $detect = new Mobile_Detect;
// //$deviceType = ($detect->isMobile() ? ($detect->isTablet() ? header('Location: mobile.html') : header('Location: mobile.html')) : 'desktop');
?>
<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <title>Antoine Savignac</title>
    <meta name="description" content="Antoine Savignac Portfolio" />
    <meta name="keywords" content="antoine, savignac, antoine savignac, portfolio, web, chef de projet, junior" />
    <meta name="viewport" content="width=device-width">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <!-- build:css(.) styles/vendor.css -->
    <link rel="stylesheet" href="styles/reset.css">
    <!-- bower:css -->
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" href="bower_components/ionicons/css/ionicons.css" />
    <!-- endbower -->
    
    <!-- endbuild -->
    <!-- build:css(.tmp) styles/main.css -->
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/common.css">
    <!-- endbuild -->
    <link rel="icon" type="image/png" href="images/favicon.png" />
  </head>
  <body ng-app="antoinesavignacfrApp">
    <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <!-- Add your site or application content here -->
    <div class="viewContainer">
      <div ng-include="'views/main.html'" ng-controller="MainCtrl as main"></div>
    </div>


    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID -->
     <script>
       (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
       (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
       m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
       })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

       ga('create', 'UA-42237776-1', 'antoinesavignac.fr');
       ga('send', 'pageview');
    </script>

    <!--[if lt IE 9]>
    <script src="bower_components/es5-shim/es5-shim.js"></script>
    <script src="bower_components/json3/lib/json3.min.js"></script>
    <![endif]-->

    <!-- build:js(.) scripts/vendor.js -->
    
    <!-- bower:js -->
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <script src="bower_components/angular-scroll/angular-scroll.min.js"></script>
    <script src="bower_components/multiline/browser.js"></script>
    <!-- endbower -->
    <script type="text/javascript" src="bower_components/jquery.ui/ui/core.js"></script>
    <script type="text/javascript" src="bower_components/jquery.ui/ui/effect.js"></script>
    <!-- endbuild -->

    <!-- build:js({.tmp,app}) scripts/main.js -->
    <script src="scripts/app.js"></script>
    <script src="scripts/controllers/main.js"></script>
    <script src="scripts/controllers/tech.js"></script>
    <script src="scripts/controllers/project.js"></script>
    <script src="scripts/directives/tech.js"></script>
    <script src="scripts/directives/line.js"></script>
    <script src="scripts/directives/nav.js"></script>
    <script src="scripts/directives/timeline.js"></script>
    <!-- endbuild -->
</body>
</html>
