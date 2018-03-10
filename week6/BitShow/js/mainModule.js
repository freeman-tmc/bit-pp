var mainModule = (function() {

//setTimeout(UIModule.printAllShows(dataModule.createTVShows()), 2000);

//console.log(dataModule.createTVShows());

// function printshow() {
//     console.log(dataModule.createTVShows());
// }
// setTimeout(printshow, 2000);



 

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


})(dataModule, UIModule);