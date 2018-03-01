// logika aplikacije
// objekat koji moze da predstavlja film

function Movie(title, length, genre) {
    this.movieTitle = title;
    this.movieLength = length;
    this.genre = genre;
}

Movie.prototype.showData = function () {
    return this.movieTitle + ', ' + this.movieLength + 'min' + ', ' + this.genreAcronym();
}

Movie.prototype.genreAcronym = function () {
    var fullGenre = this.genre.toUpperCase();
    return fullGenre[0] + fullGenre[fullGenre.length - 1];
}

//lista filmove

var allMovies = [];
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

    //console.log(movieTitle,movie Length,movieGenre);



    //2) Validacija
    var ERROR = {
        OK: 'OK',
        INSERT_TITLE: 'Please insert title!',
        MOVIE_LENGTH: 'Please check the movie length!',
        SELECT_GENRE: 'Please select the movie genre!'
    };
    //treba da varaca string
    function validation(movieTitle, movieLength, movieGenre) {
        movieLength = parseInt(movieLength);
        
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
        var list = document.querySelector('#list').appendChild(p);
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

//objekat koji prdstavlja program


//funkcionalnost interfejsa create program movie
//funkcionalnost interfejsa add movie to program

function Program(date) {
    this.date = date;
    this.movieLIst = [];
    this.duration = 0;
}

Program.prototype.getData = function () {
    return this.date + this.movieLIst.length + this.duration;
}

Program.prototype.addMovie = function (movie) {
    this.movieLIst.push(movie);
}

// selektovanje dugmeta create program i dodavanje event listenera koji poziva f-ju create program
document.querySelector('#create-program').addEventListener('click', createProgram);

function createProgram() {
    var programInput = document.querySelector('#program-input');
    var programName = programInput.value;
    var program = new Program(programName);
    populateProgramSelect(program);
}
