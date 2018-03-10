
var dataModule = (function () {


    class TVShows {

        constructor(shows) {
            this.shows = shows;
        }

    }

    function createTVShows(allShows) {
        allShows.length = 50;
        //console.log(typeof allShows);
        let tvshows = new TVShows(allShows);
        return tvshows;
    }


    class Show {

        constructor(name, image, id, seasons,casts,details) {
            this.name = name;
            this.image = image;
            this.id = id;
            this.season = season;
            this.casts = casts;
            this.details = details;
        }
    }

    function createShow() {
        let singleShow = new Show(name, image, id, seasons,casts,details);
    }




    return {
        createTVShows,
        createShow,
    }


})();