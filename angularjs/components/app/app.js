var moviesApp = angular.module('moviesApp', []);

moviesApp.controller('moviesController',
    function moviesController($scope, moviesAppService) {
        $scope.movies = [];
        
        $scope.getMoviesOnClick = function () {
            $scope.movies = moviesAppService.getAllMovies();
        }

        $scope.movie = {
        };

        $scope.addMovie = function () {
            moviesAppService.createMovie($scope.movie);
            $scope.movie = {};
        }

        $scope.deleteMovie = function(movie) {
            moviesAppService.deleteMovieService(movie.id);
        }
});