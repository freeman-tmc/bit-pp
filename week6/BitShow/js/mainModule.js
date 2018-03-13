
import { createTVShows, createShow } from './dataModule.js';
import { printAllShows, printSearchResults, printSeasons, printCast, printInfoPageImg, printShowInfo, searchField } from './UIModule.js';

// init, handler function for landing page
export function init() {

    //collecting shows object from server
    const allShowsUrl = 'http://api.tvmaze.com/shows';
    $(function () {
        fetch(allShowsUrl)
            .then(response => {
                return response.json();
            })
            .then(allShows => {
                let show = createTVShows(allShows);
                printAllShows(show.shows);
                attachImageListeners();
            });
    });

    //printing search results
    $("#search").on('keyup', function () {
        var searchValue = searchField.val();
        let showUrl = `http://api.tvmaze.com/search/shows?q=${searchValue}`;
        fetch(showUrl)
            .then(response => {
                let showSeach = response.json();
                showSeach.length = 10;
                return showSeach;
            })
            .then(search => {
                printSearchResults(search);
                attachListeners();
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
export function initSinglePage() {

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
        var singleShow = createShow(name, image, showID, seasons, cast, info);
        printSeasons(singleShow.seasons);
        printInfoPageImg(singleShow.image);
        printShowInfo(singleShow.info);
        printCast(singleShow.cast);
    });


}






