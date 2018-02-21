var shuffle = function (arr) {
    // new array
    var newArr = [];
    // used indexes
    var usedIndexes = [];

    while (usedIndexes.length < arr.length) {
        // generate random index
        var randIndex = Math.floor(arr.length * Math.random());
        // check if we already use it
        if (usedIndexes.indexOf(randIndex) == -1) {
            newArr.push(arr[randIndex]);
            usedIndexes.push(randIndex);
        }

    }
    return newArr;

}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));





// function shuffle(a) {
//     var j, x, i;
//     for (i = a.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         x = a[i];
//         a[i] = a[j];
//         a[j] = x;}