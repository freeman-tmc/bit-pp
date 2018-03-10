var UIModule = (function () {

    var searchField = $('#search');
    var printField = $('#content');
    var searchResultList = $('#search-result');
    var selectedElement = $();
    var seasonList = $("#season-list");
    var castList = $('#cast-list');

    //show allShow list in page

    function printAllShows(arr) {
        arr.forEach(function (el) {
            let printDiv = `<div>
        <img src="${el.image.medium}">
        <p>${el.name}</p></div>`;
            printField.append(printDiv);
        });
    }

    function printSearchResults(arr) {
        searchResultList.empty();
        arr.forEach(function (el) {
            let printDiv = `<li value="${el.show.id}">${el.show.name}</li>`;
            searchResultList.append(printDiv);
        });
    }

    function printSeasons(arr) {
        seasonList.empty();
        arr.forEach(function (el){
            let seasonDiv = `<li>${el[0]}-${el[1]}</li>`;
            seasonList.append(seasonDiv);
        })
    }

    function printCast(arr) {
        castList.empty();
        arr.forEach(function (el){
            let seasonDiv = `<li>${el}</li>`;
            castList.append(seasonDiv);
        })
    }

    // function printData(selector, data, type of data) {




    return {
        printAllShows,
        printSearchResults,
        printSeasons,
        printCast
    }








})();