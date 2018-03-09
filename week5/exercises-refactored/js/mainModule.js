
var mainModule = (function(){
    
    
    //creating program
actionButtons.createProgramButton.addEventListener('click', createProgram);
//creating movie
actionButtons.createMovieButton.addEventListener('click', createMovie);
// adding movie to program
actionButtons.addMovieButton.addEventListener('click', addMovieToProgram);



//main module
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


})(dataModule, UIModule);
