angular.module('app', ['ngRoute', 'app.controllers', 'app.services'])
       .config(function($routeProvider){
         $routeProvider
          .when('/',{
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
          })
          .otherwise({redirectTo: '/'})
       })
