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
                attachImageListeners();
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

        // listeners for search list items
        function attachListeners() {
            $("li").on('click', function () {
                let showID = $(this).attr('value');
                sessionStorage.setItem('tvShowID', showID);
                open('infopage.html');
            });

        }
        // listeners for show images
        function attachImageListeners() {
            $(".show").on('click', function () {
                let showID = $(this).attr('value');
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
        let info = [];

        $(function () {
            let showID = sessionStorage.getItem('tvShowID');
            let showUrl = `http://api.tvmaze.com/shows/${showID}/seasons`
            let request = $.get(showUrl);
            request.done(function (response) {
                let showInfo = response;
                image.push(showInfo[0].image.original);
                showInfo.forEach(function (el) {
                    seasons.push([el.premiereDate, el.endDate]);
                });
                console.log(showInfo);
                console.log(seasons);
                console.log(image);
                UIModule.printSeasons(seasons);
                UIModule.printInfoPageImg(image);
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

        $(function () {
            let showID = sessionStorage.getItem('tvShowID');
            let showUrl = `http://api.tvmaze.com/shows/${showID}`
            let request = $.get(showUrl);
            request.done(function (response) {
                let showInfo = response;
                console.log(showInfo);
                info.push(showInfo.summary);
                // showInfo.forEach(function (el) {
                //     info.push(el.person.name);
                // });
                UIModule.printShowInfo(info);
            });
            
        });

        console.log(location.href.slice(location.href.indexOf('?') + 1));
    }
    //interface for index and infopage
    return {
        init,
        initSinglePage
    }

})(dataModule, UIModule);