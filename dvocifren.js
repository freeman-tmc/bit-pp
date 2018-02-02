var n = 36;

if (typeof n == "number") {
    if (n > 9 && n < 100) {
        var jedinice = n % 10;
        var desetice = (n - jedinice) / 10;
        var broj = jedinice*10 + desetice;
        console.log(broj);
    } else {
        console.log("greska");
    }
} else {
    console.log("greska");
}