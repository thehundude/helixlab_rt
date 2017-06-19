moviesApp.factory('moviesAppService', function () {
    var service = {};
    var allMovies = [
        /*{
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
            }*/
    ];

    var sequence = allMovies.length;

    service.getAllMovies = function() {
        return allMovies;
    }

    service.createMovie = function(movie) {
        sequence++;
        movie.id = sequence;
        allMovies.push(movie);
    }

    service.deleteMovieService = function(movieId) {
        var movieIndex = 0;
        for (var i = 0; i < allMovies.length; i++) {
            if (allMovies[i].id == movieId) {
                movieIndex = i;
                break;
            }
        }
        allMovies.splice(movieIndex, 1);
    }

    return service;
});