var calculatorApp = angular.module('calculatorApp', []);

calculatorApp.controller('calculatorController',
    function calculatorController($scope){
        $scope.displayValue = "";
        
        $scope.addCharacter = function(a) {
            $scope.displayValue += a;
        }      

        $scope.clear = function() {
            $scope.displayValue = "";
        }

        $scope.compute = function() {
            var value = $scope.displayValue;
            if (value.indexOf("+") > 0) {
                var number = value.split("+");
                $scope.displayValue = Number(number[0]) + Number(number[1]);
            }
            else if (value.indexOf("-") > 0) {
                var number = value.split("-");
                $scope.displayValue = Number(number[0]) - Number(number[1]);
            }
            else if (value.indexOf("*") > 0) {
                var number = value.split("*");
                $scope.displayValue = Number(number[0]) * Number(number[1]);
            }
            else if (value.indexOf("/") > 0) {
                var number = value.split("/");
                $scope.displayValue = Number(number[0]) / Number(number[1]);
            }
        }
    }
);