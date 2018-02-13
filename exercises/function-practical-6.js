var combine = function (a, b) {
    var i;
    var j;
    var c = [];
    var k = 0;
    for (i = 0; i < a.length; i++) {
        c[k] = a[i];
        k++;
        c[k] = b[i];
        k++;
    }
    return c;
}
console.log(combine(["a", "b", "c"], [1, 2, 3]));

// 3

var rotateElements = function (arr, k) {
    var rotatedArray = [];
    var i;
    var j;
    // prebacujemo od k-tog elementa
    for (i = k, j = 0; i < arr.length; i++ , j++) {
        rotatedArray[j] = arr[i];
    }
    // prebacujemo do k-tog elementa
    for (i = 0; j < arr.length; j++ , i++) {
        rotatedArray[j] = arr[i];
    }
    return rotatedArray;
}

console.log(rotateElements([1, 2, 3, 4, 5, 6], 2));

// 4

var numToDigits = function (n) {
    var arr = [];
    var str = n + '';
    for (i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }

    return arr;
}
console.log(numToDigits(123));

// 5
var multiplication = function (n) {

    for (var i = 1; i <= n; i++) {
        var line = '';
        for (var j = 1; j <= n; j++) {
            line = line + i * j + ' ';
        }
        console.log(line);
    }
}

multiplication(12);
// 6
var celsiusToF = function (t) {
    'use strict';
    var f = (t * 1.8) + 32;
    return f;
}
console.log(celsiusToF(35));
// 9
var median = function (a) {
    var medianIndex = 0;
    if (a.length % 2 == 1) {
        medianIndex = (a.length - 1) / 2;

    }
    return a[medianIndex];
}
console.log(median([1, 2, 3, 4, 5, 6, 7]));

// 11

var firstLast = function (a) {
    "use strict";
    var medianIndex = 0;
    if (a.length % 2 == 1) {
        medianIndex = (a.length - 1) / 2;
        return a[0] + ' ' + a[a.length - 1] + ' ' + a[medianIndex];
    } else {
        return a[0] + ' ' + a[a.length - 1];
    }
}

console.log(firstLast([1, 2, 3, 4, 5, 6]));

// 14
var bmi = function (w, h) {
    "use strict";
    result = w / (h * h);

if (result < 15) {
    console.log("Starvation");
} else if (result < 17.5 && result > 15) {
    console.log("Anorexic");
} else if (result > 17.5 && result < 18.5) {
    console.log("Underweight");
} else if (result > 18.5 && result < 25) {
    console.log("Ideal");
}
else if (result > 25 && result < 30) {
    console.log("Overweight");
}
else if (result > 30 && result < 40) {
    console.log("Obese");
}
else if (result > 40 ) {
    console.log("Morbidly");
}
}

//15

var printRect = function(a) {
    
    var longestElem = a[0].length;
    //find longest element in array
    for (var i = 1; i < a.length; i++) {
        if(a[i].length > longestElem) {
            longestElem = a[i].length;
        }
    }
    //number of columns and rows
    var numOfCols = longestElem + 4;
    var numOfRows = a.length + 2;

    //first and last line
    var firstLine = '';
    for(i = 0; i < numOfCols; i++ ) {
        firstLine += '*';
    }

    var line = '';
 /*   for(var j = 0; j < numOfCols; j++) {
        if(j == 0 || j == numOfCols - 1) {
            line += '*';
        } else if (j == 1 || j == numOfCols - 2) {
            line += ' ';
        } else {

            for(var k = 0, m = 0; m < numOfCols - 4; k++, m++) {
                
                if (k < a[0].length ) {
                    line += a[0][k];
                } else {
                    line += ' ';
                }
            }
        }
        console.log(line);
    } */

    for(var j = 0; j < a.length; j++){    //adding spaces to shorter words
        if(a[j].length < longestElem){
            var space = longestElem - a[j].length;
            for(var k = 0; k < space; k++){
                a[j] += " ";
            }
        }
    }

    for(var m = 0; m < a.length; m++){       // defining lines (with words)
        line += "* " + a[m] + " *" + "\n";
    }

    var result = firstLine + "\n" + line + firstLine;
    console.log(result);
}
printRect(["Hello", "World", "in", "a", "frame"]);


