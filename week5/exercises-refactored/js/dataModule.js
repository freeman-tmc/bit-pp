


//// logika aplikacije

var dataModule = (function() {
// objekat koji moze da predstavlja film

class Movie {

    constructor(title, length, genre) {
        this.movieTitle = title;
        this.movieLength = parseInt(length);
        this.genre = genre;
    }

    showData() {
        return `${this.movieTitle}, ${this.movieLength}min, ${this.genreAcronym()}`;
    }

    genreAcronym() {
        let fullGenre = this.genre.toUpperCase();
        return `${fullGenre[0]} ${fullGenre[fullGenre.length - 1]}`;
    }
}



//list of all movies
var allMovies = [];

//objekat koji prdstavlja program

class Program {

    constructor(date) {
        this.date = date;
        this.movieLIst = [];
    }

    showData() {
        return `${this.date}, ${this.movieLIst.length} movies, ${this.duration()} min`;
    };

    addMovie(movie) {
        this.movieLIst.push(movie);
    };

    duration() {
        var duration = 0;
        for (el in this.movieLIst) {
            duration += this.movieLIst[el].movieLength;
        }
        return duration;
    };
}
//list of all programs
var allPrograms = [];


//error object
const ERROR = {
    OK: 'OK',
    INSERT_TITLE: 'Please insert title!',
    MOVIE_LENGTH: 'Please check the movie length!',
    SELECT_GENRE: 'Please select the movie genre!'
};



//id movie funkcionalnost


function createMovie() {

    let movieInputData = movieInputColector();

    let errorMessage = validation(movieInputData, ERROR);

    if (errorMessage != 'OK') {
        //display error
        updateFields.showError.innerHTML = errorMessage;
    } else {
        //3) create object that represets movie
        updateFields.showError.innerHTML = '';
        var movie = new Movie(movieInputData.movieTitle, movieInputData.movieLength, movieInputData.movieGenre);

        //4) dodajemo film u listu filmova (na nivou aplikacije)
        allMovies.push(movie);
        // azuriramo interfejs - prikazujemo novi film
        var p = document.createElement('p');
        p.innerHTML = movie.showData();
        updateFields.listOfMovies.appendChild(p);

        // azuriramo interfejs - azuriramo duzinu
        var totalLength = 0;
        for (var i = 0; i < allMovies.length; i++) {
            totalLength += allMovies[i].movieLength;
        }
        updateFields.pLength.innerHTML = `All movies length:  ${totalLength}`;

        populateMovieSelect(movie);

    }
}


// creating program
function createProgram() {
    var programName = inputFields.programInput.value;
    var program = new Program(programName);
    allPrograms.push(program);
    populateProgramSelect(program);
    inputFields.programInput.value = '';

}

return {
    allMovies: asjdif,
    allPrograms: sdkfh


}


})();
