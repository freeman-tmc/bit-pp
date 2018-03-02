//// logika aplikacije
// objekat koji moze da predstavlja film

function Movie(title, length, genre) {
    this.movieTitle = title;
    this.movieLength = parseInt(length);
    this.genre = genre;
}

Movie.prototype.showData = function () {
    return this.movieTitle + ', ' + this.movieLength + 'min' + ', ' + this.genreAcronym();
}

Movie.prototype.genreAcronym = function () {
    var fullGenre = this.genre.toUpperCase();
    return fullGenre[0] + fullGenre[fullGenre.length - 1];
}

//list of all movies
var allMovies = [];

//objekat koji prdstavlja program
function Program(date) {
    this.date = date;
    this.movieLIst = [];
}

Program.prototype.showData = function () {
    return this.date + ', ' + this.movieLIst.length + ' movies, ' + this.duration() + 'min';
};

Program.prototype.addMovie = function (movie) {
    this.movieLIst.push(movie);
};

Program.prototype.duration = function () {
    var duration = 0;
    for(el in this.movieLIst) {
        duration += this.movieLIst[el].movieLength;
    }
    console.log(typeof(duration));
    return duration;
};

//list of all programs
var allPrograms = [];

//error object
var ERROR = {
    OK: 'OK',
    INSERT_TITLE: 'Please insert title!',
    MOVIE_LENGTH: 'Please check the movie length!',
    SELECT_GENRE: 'Please select the movie genre!'
};




// putting movies in list
function populateMovieSelect(movie) {
    var movieSelect = '';
    movieSelect = '<option value="' + movie.movieTitle + '">' + movie.movieTitle + '</option>\n';
    var movieSelector = document.querySelector('#movie-selector');
    movieSelector.innerHTML += movieSelect;
}

// putting program in list
function populateProgramSelect(program) {
    var programSelect = '';
    programSelect = '<option value="' + program.date + '">' + program.date + '</option>\n';
    var programSelector = document.querySelector('#program-selector');
    programSelector.innerHTML += programSelect;
}

// funkcionalnosti interfejsa

//id movie funkcionalnost
document.querySelector('.create-movie').addEventListener('click', function (event) {

    //1) procitati unete podatke
    var movieTitle = document.querySelector('#movie-title').value;
    var movieLength = document.querySelector('#movie-length').value;
    // var movieGenre = document.querySelector('movie-genre').value;
    var movieGenreSelect = document.querySelector('#genre-selector');
    var movieGenreIndex = movieGenreSelect.selectedIndex;
    var movieGenre = movieGenreSelect.options[movieGenreIndex].value;


    //2) Validacija
   
    //treba da varaca string
    function validation(movieTitle, movieLength, movieGenre) {

        if (movieTitle == '') {
            return ERROR.MOVIE_LENGTH;
        } else {
            if (isNaN(movieLength) || movieLength <= 0) {
                return ERROR.MOVIE_LENGTH;
            } else {
                if (movieGenre == '-') {
                    return ERROR.SELECT_GENRE;
                } else {
                    return ERROR.OK;
                }
            }
        }
    }

    var showError = document.querySelector('#error');
    var errorMessage = validation(movieTitle, movieLength, movieGenre);
    if (errorMessage != 'OK') {
        //display error
        showError.innerHTML = errorMessage;
    } else {
        //3) napravimo objekat koji predstavlja film
        showError.innerHTML = '';
        var movie = new Movie(movieTitle, movieLength, movieGenre);


        //4) dodajemo film u listu filmova (na nivou aplikacije)
        allMovies.push(movie);
        // azuriramo interfejs - prikazujemo novi film
        var p = document.createElement('p');
        p.innerHTML = movie.showData();
        var listOfMovies = document.querySelector('#movie-list').appendChild(p);
        document.querySelector('#movie-title').value = '';
        document.querySelector('#movie-length').value = '';
        movieGenreSelect.selectedIndex = 0;
        // azuriramo interfejs - azuriramo duzinu
        var totalLength = 0;
        for (var i = 0; i < allMovies.length; i++) {
            totalLength += allMovies[i].movieLength;
        }
        var pLength = document.querySelector('#total-length');
        pLength.innerHTML = 'All movies length: ' + totalLength;


        populateMovieSelect(movie);

    }
});

///////////////////////////




// selektovanje dugmeta create program i dodavanje event listenera koji poziva f-ju create program
var createProgramButton = document.querySelector('#create-program');
createProgramButton.addEventListener('click', createProgram);


function createProgram() {
    var programInput = document.querySelector('#program-input');
    var programName = programInput.value;
    var program = new Program(programName);
    allPrograms.push(program);
    populateProgramSelect(program);
    programInput.value = '';

}


var selectedProgram = document.querySelector('#program-selector');
var selectedMovie = document.querySelector('#movie-selector');

function addMovieToProgram() {

    var currentMovie;
    for (var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].movieTitle == selectedMovie.value) {
            currentMovie = allMovies[i];
            break;
        }
    }

    for (i = 0; i < allPrograms.length; i++) {
        if (allPrograms[i].date == selectedProgram.value) {
            allPrograms[i].movieLIst.push(currentMovie);
            break;
        }
    }

    printProgramInfo(allPrograms[i]);
    var fullProgramList = document.querySelector('#full-program-list');
    var fullProgramListText = '';

    fullProgramListText = allPrograms[i].showData();


    var k = document.createElement('p');
    k.innerHTML = fullProgramListText;
    fullProgramList.appendChild(k);


}

// adding movie to program

var addMovieButton = document.querySelector('#add-movie');
addMovieButton.addEventListener('click', addMovieToProgram);


//printing all program info to page

    var p = document.createElement('p');
    p.innerHTML = program.showData();
    var listOfPrograms = document.querySelector('#program-list');
    listOfPrograms.appendChild(p);




