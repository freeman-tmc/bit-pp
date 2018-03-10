var mainModule = (function () {
    // init, handler function for landing page
    function init() {

        //collecting shows object from server
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

        //printing search results
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
        });


        // response for seasons
        function attachListeners() {
            $("li").on('click', function () {
                let showID = $(this).attr("value");
                sessionStorage.setItem('tvShowID', showID);
                open('infopage.html');
            });

        }
    }

    // initSinglePage, handler for info page
    function initSinglePage() {
        let seasons = [];
        let cast = [];
        let image = [];
        $(function () {
            let showID = sessionStorage.getItem('tvShowID');
            let showUrl = `http://api.tvmaze.com/shows/${showID}/seasons`
            let request = $.get(showUrl);
            request.done(function (response) {
                let showInfo = response;
                image.push(showInfo[0].image.original);
                showInfo.forEach(function (el) {
                    seasons.push([el.premiereDate, el.endDate]);
                    //seasons.push(el.endDate);
                });
                console.log(showInfo);
                console.log(seasons);
                console.log(image);
                UIModule.printSeasons(seasons);
            });
        });

        $(function () {
            let showID = sessionStorage.getItem('tvShowID');
            let showUrl = `http://api.tvmaze.com/shows/${showID}/cast`
            let request = $.get(showUrl);
            request.done(function (response) {
                let showInfo = response;
                showInfo.forEach(function (el) {
                    cast.push(el.person.name);
                });
                //console.log(showInfo);
                console.log(cast);
                UIModule.printCast(cast);
            });
        });
        
    }
    //interface for index and infopage
    return {
        init,
        initSinglePage
    }

})(dataModule, UIModule);