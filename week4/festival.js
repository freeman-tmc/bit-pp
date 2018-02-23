"use strict";

(function () {
    console.log("Hi!");

        // Genre constructor function
    function Genre(genre) {
        this.name = genre;
        this.getData = function () {
            var acronym = (this.name[0] + this.name[this.name.length - 1]);
            return acronym.toUpperCase();
        }
    }

    // Movie constructor function
    function Movie(title, duration, genre) {
        this.title = title;
        this.genre = new Genre(genre);
        this.duration = duration;
        this.getData = function () {
            var movieInfo = this.title + ', ' + this.duration + 'min, ' + this.genre.getData();
            return movieInfo;
        }
    }

    // function for creatin Movie objects
    function createMovie(name, duration, genre) {
        var newMovie = new Movie(name, duration, genre);
        return newMovie;
    }

    // creating movie objects
    var movie1 = createMovie('Revenant', 130, 'adventure');
    var movie2 = createMovie('Batman, Dark Knight', 100, 'action');
    var movie3 = createMovie('Warcraft', 140, 'fantasy');
    var movie4 = createMovie('Star Wars, The Last Jedi', 110, 'space opera');

    // Program constructor function
    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.numberOfMovies = function() {
            return this.listOfMovies.length;
        }
        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
        }
        this.getData = function () {
            var movieInfo = "";
            var programLength = 0;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                movieInfo += '\t\t' + this.listOfMovies[i].getData() + '\n';
                programLength += this.listOfMovies[i].duration;
            }
            var programInfo = this.date + ", program duration " + programLength + "min\n" + movieInfo;
            return programInfo;
        }
    }

    // createProgram function
    function createProgram(day) {
        var newProgram = new Program(day);
        return newProgram;
    }

    // creating program objects
    var prog1 = createProgram("2018 04 13");
    var prog2 = createProgram("2018 04 14");

    // adding movies to programs
    prog1.addMovie(movie1);
    prog1.addMovie(movie2);
    prog2.addMovie(movie3);
    prog2.addMovie(movie4);
    
    // Festival constructor function
    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfAllMovies = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                sum += this.listOfPrograms[i].numberOfMovies();
            }
            return sum;
        };
        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
        }
        this.getData = function () {
            var programInfo = "";
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                programInfo += '\t' + this.listOfPrograms[i].getData();
            }
            var festivalInfo = this.name + " has " + this.numberOfAllMovies() + " movie titles \n" + programInfo;
            console.log(festivalInfo);
        }
    }

    // creating Festival object
    var fest = new Festival('Weekend Festival');

    // adding programs to Festival objects
    fest.addProgram(prog1);
    fest.addProgram(prog2);

    // displaying Festival content
    fest.getData();

})();