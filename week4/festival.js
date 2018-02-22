"use strict";

(function () {
    console.log("Hi");

    function Genre(genre) {
        this.name = genre;
        this.getData = function () {
            var acronym = (this.name[0] + this.name[this.name.length - 1]);
            return acronym.toUpperCase();
        }
    }

    function Movie(title, duration, genre) {
        this.title = title;
        this.genre = new Genre(genre);// {name: comedy, getdata: 'cy'};
        this.duration = duration;
        this.getData = function () {
            var movieInfo = this.title + ',' + this.duration + 'min,' + this.genre.getData();
            return movieInfo;
        }
    }

    var film1 = new Movie('ime1', 130, 'komedija');
    var film2 = new Movie('ime2', 100, 'horor');
    var film3 = new Movie('ime3', 140, 'avantura');
    var film4 = new Movie('ime4', 110, 'akcije');




    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.numberOfMovies = this.listOfMovies.length;
        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
        }
        this.getData = function () {
            var movieInfo = "";
            var programLength = 0;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                movieInfo += '\t' + this.listOfMovies[i].getData() + '\n';
                programLength += this.listOfMovies[i].duration;
            }
            var programInfo = this.date + ", program duration " + programLength + "min\n" + movieInfo;
            return programInfo;
            //console.log(programInfo);
        }
    }


    var prog1 = new Program("2018 04 13");
    var prog2 = new Program("2018 04 14");

    prog1.addMovie(film1);
    prog1.addMovie(film2);
    prog2.addMovie(film3);
    prog2.addMovie(film4);

    /*console.log(prog1.listOfMovies);
    console.log(prog2.listOfMovies);*/

    //prog1.getData();


    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfAllMovies = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                sum += this.listOfPrograms[i].numberOfMovies;
            }
            return sum;
        };
        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
        }
        this.getData = function () {
            var programInfo = "";
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                programInfo += '\t' + this.listOfPrograms[i].getData() + '\n';
            }
            var festivalInfo = this.name + " has " + this.numberOfAllMovies() + "movie titles \n" + programInfo;
            console.log(festivalInfo);
        }
        // this.getData = function () {
        //     var programInfo = "";

        // for (var i = 0; i < this.listOfPrograms.length; i++) {
        //     programInfo += '\t' + this.listOfPrograms[i].getData() + '\n';
        //     }

        //     var festivalInfo = this.name +  ' festival has ' + this.numberOfAllMovies() + ' movie titles\n' + programInfo; 
       
        // }
    }

    var fest = new Festival('Weekend');
    fest.addProgram(prog1);
    fest.addProgram(prog2);
    fest.getData();

})();