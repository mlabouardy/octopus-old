angular.module('app', ['ngRoute', 'app.controllers', 'app.services'])
       .config(function($routeProvider){
         $routeProvider
          .when('/',{
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
          })
          .when('/configuration',{
            templateUrl: 'views/configuration.html',
            controller: 'ConfigurationCtrl'
          })
          .when('/download',{
            templateUrl: 'views/download.html',
            controller: 'DownloadCtrl'
          })
          .otherwise({redirectTo: '/'});
       });
