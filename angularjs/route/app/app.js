var routeApp = angular.module('routeApp', ['ngRoute']);

angular.module('routeApp')
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/", {
                templateUrl : "main.html"
            })
            .when("/red", {
                templateUrl : "red.html"
            })
            .when ("/green", {
                templateUrl : "green.html"
            })
            .when ("/blue", {
                templateUrl : "blue.html"
            })
    });

routeApp.controller('blueController', function($scope, $location){
    $location.url('/blue')
});