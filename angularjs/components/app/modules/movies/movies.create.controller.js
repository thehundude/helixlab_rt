moviesApp.controller('moviesCreateController',
    function moviesCreateController($scope, moviesAppService) {
        $scope.addMovie = function () {
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
        }

        $scope.deleteMovie = function(movie) {
            moviesAppService.deleteMovieService(movie.id);
        }
    });