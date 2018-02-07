//prvi zadatak

function isString(input) {

    var result;

    if (typeof input == "number") {
        result = true;
    } else {
        result = false;
    }
    console.log(result);
}

isString("My random string");

isString(2);

//drugi zadatak

function blankOrNot(input) {

    var result;

    if (input == " ") {
        result = true;
    } else {
        result = false;
    }
    console.log(result);
}

blankOrNot("Hello");

// treci zadatak

function concatenateString(text, n) {

    if (typeof text == "string") {
        var concatString = "";

        for (var i = 0; i < n; i++) {
            concatString = concatString + text;
        }

        console.log(concatString);

    } else {
        console.log("Input is not a string");
    }

}

concatenateString("Ha", 4);

//cetvrti zadatak

function countNumberOfLetter(text, letter) {

    if (typeof text == "string") {
        var n = 0;
        for (var i = 0; i < text.length; i++) {

            if (text[i] == letter) {
                n++;
            }

        }

        console.log(n);


    } else {
        console.log("Input is not a string");
    }

}

countNumberOfLetter("hello", "l");

//peti zadatak

function positionOfLetter(text, letter) {

    if (typeof text == "string") {

        for (var i = 0; i <= text.length; i++) {

            if (text[i] == letter) {
                console.log(i);
                break;
            } else if (i == text.length) {
                console.log(-1);
            }

        }

    } else {
        console.log("Input is not a string");
    }

}

positionOfLetter("lasddk", "j");


//sesti zadatak

function lastPositionOfLetter(text, letter) {

    if (typeof text == "string") {

        for (var i = text.length - 1; i >= -1; i--) {

            if (text[i] == letter) {
                console.log(i);
                break;
            } else if (i == -1) {
                console.log(-1);
            }

        }

    } else {
        console.log("Input is not a string");
    }

}

lastPositionOfLetter("lasddkj", "j");

//sedmi zadatak

function convertStringArray(text) {

    if (typeof text == "string") {
        var array = [];
        for (i = 0; i < text.length; i++) {

            if (text[i] == " ") {
                array[i] = "null";


            } else {

                array[i] = text [i];
            }

        } 
        console.log(array);
    }
}
convertStringArray("My random string");

