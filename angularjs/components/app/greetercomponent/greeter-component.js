moviesApp.component('greeterComponent', {
    template: 'Hello, {{user}}!',
    controller: function GreetUserController($scope) {
        $scope.user = 'world';
    }
});