var mainModule = (function () {
    // init
    // initSinglePage
    //ajax 
    const allShowsUrl = 'http://api.tvmaze.com/shows';
    $(function () {
        var request = $.get(allShowsUrl);
        request.done(function (response) {
            let allShows = response;
            console.log(allShows);
            let show = dataModule.createTVShows(allShows);
            UIModule.printAllShows(show.shows);
        });

    });

    //function searchForShow() {
    $("#search").on('keyup', function () {

        var searchValue = $("#search").val();
        let showUrl = `http://api.tvmaze.com/search/shows?q=${searchValue}`;

        var request = $.get(showUrl);
        request.done(function (response) {
            response.length = 10;
            UIModule.printSearchResults(response);
            attachListeners();
            //console.log(response);
        });
        // dataModule.createShow(response[0].show.name, response[0].show.image.original, 
        //     response[0].show.id, response[0].show.summary)
    });


    // response for seasons
function attachListeners() {
    $("li").on('click', function () {
        $(this).attr("value");
        var searchValue = $(this).attr("value");
        let showUrl = `http://api.tvmaze.com/shows/${searchValue}/seasons`;

        var request = $.get(showUrl);
        request.done(function (response) {
            // response[0].premierDate;
            // response[0].endDate;
            //UIModule.printSearchResults(response);
            console.log(response);
        });
        // dataModule.createShow(response[0].show.name, response[0].show.image.original, 
        //     response[0].show.id, response[0].show.summary)
    });
}
    

    // var responseForSeason = [response[0].premierDate, response[0].endDate];
    // console.log(responseForSeason);
    //}

    // return {
    //     init,
    //     initSinglePage
    // }
})(dataModule, UIModule);