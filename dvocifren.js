var n = 36;

if (typeof n == "number") {
    if (n > 9 && n < 100) {
        var units = n % 10;
        var tenth = (n - units) / 10;
        var number = units*10 + tenth;
        console.log(number);
    } else {
        console.log("Error!");
    }
} else {
    console.log("Error!");
}