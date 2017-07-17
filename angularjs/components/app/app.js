var moviesApp = angular.module('moviesApp', ['ngRoute']);

moviesApp.config (function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        })
        .when("/movies", {
            templateUrl: "modules/movies/movies.html"
        })
        .when("/create", {
            templateUrl: "modules/movies/movies-create.html"
        })
});