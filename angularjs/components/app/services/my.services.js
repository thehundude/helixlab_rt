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

    var getItemFromLocalstorage = function() {
        // allMovies = JSON.parse(localStorage.getItem("movies")) == null ? [] : JSON.parse(localStorage.getItem("movies"));

        // allMovies = JSON.parse(localStorage.getItem("movies")) || [];

        if (JSON.parse(localStorage.getItem("movies")) == null) {
            allMovies = [];
        }
        else {
            allMovies = JSON.parse(localStorage.getItem("movies"));
        }
    }

    getItemFromLocalstorage();
    var sequence = allMovies.length;

    service.getAllMovies = function () {
        getItemFromLocalstorage();
        return allMovies;
    }

    service.createMovie = function (movie) {
        getItemFromLocalstorage();
        sequence++;
        movie.id = sequence;
        allMovies.push(movie);
        localStorage.setItem("movies", JSON.stringify(allMovies));
    }

    service.deleteMovieService = function (movieId) {
        getItemFromLocalstorage();
        var movieIndex = 0;
        for (var i = 0; i < allMovies.length; i++) {
            if (allMovies[i].id == movieId) {
                movieIndex = i;
                break;
            }
        }
        allMovies.splice(movieIndex, 1);
        localStorage.setItem("movies", JSON.stringify(allMovies));
    }

    service.modifyMovieService = function (movie) {
        getItemFromLocalstorage();
        for (var i = 0; i < allMovies.length; i++) {
            if (allMovies[i].id == movie.id) {
                allMovies[i] = movie;
            }
        }
        localStorage.setItem("movies", JSON.stringify(allMovies));
    }

    service.loadMovieToEdit = function (movieId) {
        getItemFromLocalstorage();
        for (var i = 0; i < allMovies.length; i++) {
            if (allMovies[i].id == movieId) {
                return allMovies[i];
            }
        }
    }

    return service;
});