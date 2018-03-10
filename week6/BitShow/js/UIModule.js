var UIModule = (function() {

var searchField = $('#search');
var printField = $('#content');

//show allShow list in page

function printAllShows(arr) {
    arr.forEach(function(el) {
        let printDiv = `<div>
        <img src="${el.image.medium}">
        <p>${el.name}</p></div>`;
        printField.append(printDiv);
    });
}

return {
    printAllShows
}








})();