moviesApp.controller('moviesController',
    function moviesController($scope, moviesAppService) {
        $scope.movies = [];
        $scope.editMode = false;

        $scope.getMoviesOnClick = function () {
            // $scope.movies = angular.copy(moviesAppService.getAllMovies());
            moviesAppService.getAllMovies()
            .then(function(response) {
                $scope.movies = response.data;
            })
        }

        $scope.movie = {
        };

        /* $scope.addMovie = function () {
            moviesAppService.createMovie($scope.movie);
            $scope.movie = {};
        }

        $scope.editMovie = function (movie) {
            $scope.movie = angular.copy(movie);
            $scope.editMode = true;
        }

        $scope.modifyMovie = function () {
            moviesAppService.modifyMovieService($scope.movie)
            $scope.movie = {};
            $scope.editMode = false;
        } */

        $scope.deleteMovie = function(movie) {
            moviesAppService.deleteMovieService(movie.id);
            $scope.getMoviesOnClick();
        }
});