moviesApp.controller('moviesEditController', 
    function moviesEditController($scope, moviesAppService, $routeParams){
        $scope.movie = {}
        $scope.movieId = $routeParams.id;
        
        $scope.init = function(){
            $scope.movie = $scope.loadMovie($scope.movieId);
        }

        $scope.loadMovie = function(movieId){
            return moviesAppService.loadMovieToEdit(movieId);
        }

        $scope.modifyMovie = function () {
            moviesAppService.modifyMovieService($scope.movie)
            $scope.movie = {};
        }
    });