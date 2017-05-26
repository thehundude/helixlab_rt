var moviesApp = angular.module('moviesApp', []);

moviesApp.controller('moviesController', function moviesController($scope) {
    $scope.movies = [
        {
            title: 'Guardians of the galaxy	vol.2',
            description: 'The team have some struggles as they meet some new people and interact with old adversaries.'
        },
        {
            title: 'Wonder Woman',
            description: 'Before she was Wonder Woman she was Diana, princess of the Amazons, trained warrior. When	a pilot	crashes	and	tells of conflict in the outside world, she	leaves home	to fight a war to end all wars, discovering	her	full powers	and	true destiny.'
        },
        {
            title: 'Star Wars Episode VIII: The Last Jedi',
            description: 'Luke Skywalker decides to be a weirdo and announces that "It is time for the Jedi to end". So everyone is confused now. Also, Rey has breathing problems.'
        },
        {
            title: 'Baywatch',
            description: 'Devoted lifeguard Mitch Buchanan butts heads with a brash new recruit. Together, they uncover a local criminal plot that threatens the future of the Bay.'
        }
    ];
    
    $scope.visible = true;

    $scope.showhide = function showhide() {
        if ($scope.visible == true) {
            $scope.visible = false;
        }
        else {
            $scope.visible = true;
        }
    };

    $scope.addListItem = function addListItem() {
        $scope.movies.push({title: "new title", description: "new description"});
    };
});
