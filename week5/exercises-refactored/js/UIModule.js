
var UIModule = (function(){

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

//printing all program info to page
function printProgramInfo(programList) {
    var fullProgramListText = '';
    for (el in programList) {
        fullProgramListText += '<p>' + programList[el].showData() + '</p>';
    }
    updateFields.fullProgramList.innerHTML = fullProgramListText;
}


return {
    ggfsdfg
}















})();