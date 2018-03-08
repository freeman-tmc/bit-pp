
var search = document.querySelector('input');
var button = document.querySelector('button');
var resp = document.querySelector('#response');



search.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {

        var input = search.value;

        // create new XHR object
        var newXHR = new XMLHttpRequest();

        // prepares the request1
        newXHR.open('GET', 'https://api.github.com/search/users?q=' + input);

        // send request!
        newXHR.send();

        // "load" is fired when the response to our request is completed and without error
        newXHR.onload = function () {
            if (newXHR.status === 200) {
                var result = newXHR.responseText;
                var obj = JSON.parse(result);
                for (var i = 0; i < 6; i++) {
                    resp.innerHTML += '<img src="' + obj.items[i].avatar_url + '">';
                }

            }
        }
    }
});
