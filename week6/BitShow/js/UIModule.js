var UIModule = (function () {

    //print containers
    var searchField = $('#search');
    var printField = $('#content');
    var searchResultList = $('#search-result');
    var seasonList = $("#season-list");
    var castList = $('#cast-list');
    var infoPageImgBox = $('#show-image');
    var showInfoBox = $('#show-info');

    function printAllShows(arr) {
        arr.forEach(function (el) {
            let printDiv = `<div class="show" value="${el.id}">
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

    function printInfoPageImg(urlArr) {
        urlArr.forEach(function (el) {
            let printDiv = `<img src="${el}">`;
            infoPageImgBox.append(printDiv);
        });
    }

    function printShowInfo(arr) {
        arr.forEach(function (el) {
            let printDiv = `<p>${el}</p>`;
            showInfoBox.append(printDiv);
        });
    }

    return {
        printAllShows,
        printSearchResults,
        printSeasons,
        printCast,
        printInfoPageImg,
        printShowInfo,
    }

})();