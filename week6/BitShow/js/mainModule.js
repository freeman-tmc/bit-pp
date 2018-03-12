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
        let name = [];

        const showID = sessionStorage.getItem('tvShowID');
        const nameImgInfoUrl = `http://api.tvmaze.com/shows/${showID}`;
        const seasonsUrl = `http://api.tvmaze.com/shows/${showID}/seasons`;
        const castUrl = `http://api.tvmaze.com/shows/${showID}/cast`;

        //ajax function
        function getShowData(url) {
            let request = $.get(url);
            return request;
        }

        //seasons data
        $(function () {
            let showInfo = getShowData(seasonsUrl);
            showInfo.done(function (response) {
                response.forEach(function (el) {
                    seasons.push([el.premiereDate, el.endDate]);
                });
            });
        });

        //image, name  data
        $(function () {
            let showInfo = getShowData(nameImgInfoUrl);
            showInfo.done(function (response) {
                image.push(response.image.original);
                name.push(response.name);
            });
        });

        //info data
        $(function () {
            let showInfo = getShowData(nameImgInfoUrl);
            showInfo.done(function (response) {
                info.push(response.summary);
            });
        });

        //cast data
        $(function () {
            let showInfo = getShowData(castUrl);
            showInfo.done(function (response) {
                response.forEach(function (el) {
                    cast.push(el.person.name);
                });
            });
        });

        //creating single show object
        //printing data
        $(document).ajaxStop(function () {
            var singleShow = dataModule.createShow(name, image, showID, seasons, cast, info);
            UIModule.printSeasons(singleShow.seasons);
            UIModule.printInfoPageImg(singleShow.image);
            UIModule.printShowInfo(singleShow.info);
            UIModule.printCast(singleShow.cast);
        });

    }

    //interface for index and infopage
    return {
        init,
        initSinglePage
    }

})(dataModule, UIModule);