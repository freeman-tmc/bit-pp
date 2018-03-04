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
    for (el in this.movieLIst) {
        duration += this.movieLIst[el].movieLength;
    }
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

//input fields object
var inputFields = {
    movieTitle: document.querySelector('#movie-title'),
    movieLength: document.querySelector('#movie-length'),
    movieGenreSelect: document.querySelector('#genre-selector'),
    programInput: document.querySelector('#program-input'),
    movieSelector: document.querySelector('#movie-selector'),
    programSelector: document.querySelector('#program-selector') 
};

//buttons object
var actionButtons = {
    createMovieButton: document.querySelector('.create-movie'),
    createProgramButton: document.querySelector('#create-program'),
    addMovieButton: document.querySelector('#add-movie')
};

//interface update fields
var updateFields = {
    pLength: document.querySelector('#total-length'),
    listOfMovies: document.querySelector('#movie-list'),
    fullProgramList: document.querySelector('#program-list'),
    showError: document.querySelector('#error')
};


// putting movies in list
function populateMovieSelect(movie) {
    var movieSelect = '';
    movieSelect = '<option value="' + movie.movieTitle + '">' + movie.movieTitle + '</option>\n';
    inputFields.movieSelector.innerHTML += movieSelect;
}

// putting program in list
function populateProgramSelect(program) {
    var programSelect = '';
    programSelect = '<option value="' + program.date + '">' + program.date + '</option>\n';
    inputFields.programSelector.innerHTML += programSelect;
}

// funkcionalnosti interfejsa

//colects data from movie input fields and returns data as object
function movieInputColector() {

    var movieTitle = inputFields.movieTitle.value;
    var movieLength = inputFields.movieLength.value;
    // var movieGenre = document.querySelector('movie-genre').value;
    
    var movieGenreIndex = inputFields.movieGenreSelect.selectedIndex;
    var movieGenre = inputFields.movieGenreSelect.options[movieGenreIndex].value;
    //reset input fields
    inputFields.movieTitle.value = '';
    inputFields.movieLength.value = '';
    inputFields.movieGenreSelect.selectedIndex = 0;

    return {
        movieTitle: movieTitle,
        movieLength: movieLength,
        movieGenre: movieGenre
    }
}

//2) Validacija
function validation(movieInputData, ERROR) {

    if (movieInputData.movieTitle == '') {
        return ERROR.MOVIE_LENGTH;
    } else {
        if (isNaN(movieInputData.movieLength) || movieInputData.movieLength <= 0) {
            return ERROR.MOVIE_LENGTH;
        } else {
            if (movieInputData.movieGenre == '-') {
                return ERROR.SELECT_GENRE;
            } else {
                return ERROR.OK;
            }
        }
    }
}

//id movie funkcionalnost


function createMovie() {

    var movieInputData = movieInputColector();

    var errorMessage = validation(movieInputData, ERROR);

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
        updateFields.pLength.innerHTML = 'All movies length: ' + totalLength;

        populateMovieSelect(movie);

    }
}

///////////////////////////

//printing all program info to page
function printProgramInfo(programList) {
    var fullProgramListText = '';
    for (el in programList) {
        fullProgramListText += '<p>' + programList[el].showData() + '</p>';
    }
    updateFields.fullProgramList.innerHTML = fullProgramListText;
}


// creating program
function createProgram() {
    var programName = inputFields.programInput.value;
    var program = new Program(programName);
    allPrograms.push(program);
    populateProgramSelect(program);
    inputFields.programInput.value = '';

}

//adding movie to the program
function addMovieToProgram() {

    var currentMovie;
    for (var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].movieTitle == inputFields.movieSelector.value) {
            currentMovie = allMovies[i];
            break;
        }
    }

    for (i = 0; i < allPrograms.length; i++) {
        if (allPrograms[i].date == inputFields.programSelector.value) {
            allPrograms[i].movieLIst.push(currentMovie);
            break;
        }
    }

    printProgramInfo(allPrograms);

}

//creating program
actionButtons.createProgramButton.addEventListener('click', createProgram);
//creating movie
actionButtons.createMovieButton.addEventListener('click', createMovie);
// adding movie to program
actionButtons.addMovieButton.addEventListener('click', addMovieToProgram);








