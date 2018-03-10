var UIModule = (function () {

    var searchField = $('#search');
    var printField = $('#content');
    var searchResultList = $('#search-result');
    var selectedElement = $();
    let seasonList = $("#season-list");

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
        let seasonList = empty();
        arr.forEach(function (el){
            let seasonDiv = `<li>${el.premierDate}-${el.endDate}</li>`;
            seasonList.append(seasonDiv);
        })
    }





    return {
        printAllShows,
        printSearchResults
    }








})();