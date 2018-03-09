
var dataModule = (function () {

    //ajax 
    const allShowsUrl = 'http://api.tvmaze.com/shows';
    $(function () {
        var request = $.get(allShowsUrl);
        request.done(function (response) {
            console.log(response);
        });




    });

    $("#search").on('keyup',function(){
        
        
        var searchValue = $("#search").val();
        const showUrl = "http://api.tvmaze.com/search/shows?q=";
        var searchShowUrl = showUrl + searchValue;

        var request = $.get(searchShowUrl);
        request.done(function (response) {
            console.log(response);
        });
    });


    //tv shows constructor

    //show constructor


    //$('#content').value();


})();