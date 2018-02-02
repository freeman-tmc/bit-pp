var a = 1;
var b = 7;
var c =5;

var najmanji;
var srednji;
var najveci;

if (a < b && a < c) {
    najmanji = a;
    if (b > c){
        srednji = c;
        najveci = b;
    } else {
        srednji = b;
        najveci = c;
    }

} else if ( a > b && a > c) {
    najveci= a;
    if (b < c) {
        najmanji = b;
        srednji = c;        
    } else {
        najmanji = c;
        srednji = b;  
    }
    
} else if (b < c) {
    najveci = c;
    srednji= a;
    najmanji = b;
} else {
    najveci = b;
    srednji= a;
    najmanji = c;
}

console.log(najmanji, srednji, najveci); 
