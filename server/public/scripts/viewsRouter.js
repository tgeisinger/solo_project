var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'HomeController'
    })
    .when('/randomdisplay', {
      templateUrl: '/views/randomdisplay.html',
      controller: 'randomdisplayController'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
