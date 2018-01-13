angular.module('alurapic',['minhasDiretivas', 'ngAnimate','ngRoute', 'meusServicos'])
.config(function($routeProvider,$locationProvider){
      $locationProvider.html5Mode(true);

      $routeProvider.when('/fts', {
        templateUrl : 'partials/principal.html',
        controller : 'FotosController'
      });

      $routeProvider.when('/fts/new', {
        templateUrl : 'partials/mantem-foto.html',
        controller : 'FotonovaController'
      });

      $routeProvider.when('/fts/edit/:fotoId', {
        templateUrl : 'partials/mantem-foto.html',
        controller : 'FotonovaController'
      });

      $routeProvider.otherwise({ redirectTo : '/fts'})

});
