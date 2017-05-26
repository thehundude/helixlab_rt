var matrixApp = angular.module('matrixApp', []);

matrixApp.controller('matrixAppController', function($scope) {
    $scope.rows = [0,1,2]
    $scope.columns = [0,1,2,3,4,5,6,7]
});