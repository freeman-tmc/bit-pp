
var dataModule = (function () {

    // var allShows;

    // //ajax 
    // const allShowsUrl = 'http://api.tvmaze.com/shows';
    // $(function () {
    //     var request = $.get(allShowsUrl);
    //     request.done(function (response) {
    //         allShows = response;
    //         //console.log(allShowsList);
    //     });

    // });

    function searchForShow() {
        $("#search").on('keyup', function () {


            var searchValue = $("#search").val();
            const showUrl = "http://api.tvmaze.com/search/shows?q=";
            var searchShowUrl = showUrl + searchValue;

            var request = $.get(searchShowUrl);
            request.done(function (response) {
                // console.log(response);
            });
        });
    }



    class TVShows {

        constructor(shows) {
            this.shows = shows;
        }

    }

    function createTVShows(allShows) {
        allShows.length = 12;
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


    //tv shows constructor

    //show constructor


    return {
        createTVShows
    }


})();