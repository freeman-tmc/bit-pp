// 5.

var stringToArray = function (a) {
    return a.split(" ");;    
}

console.log(stringToArray('esi mi dobar'));



// 8

var capitalizeFirst = function (a) {
    var b = a.split('');
    b[0] = b[0].toUpperCase();
    var c = b.join('');
    return c;
}

console.log(capitalizeFirst('dobar'));

// 6

var abbrWord = function (a) {
    var b = a.split('');
    var abbr = b[0] + b[b.length - 1];
    return abbr;
}

console.log(abbrWord('world'));



