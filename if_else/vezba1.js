var p1 = 50;
var p2 = 100;
var p3 = 20;
var sum;

if (p1 < p2 && p1 < p3) {
    p1 = 1;
} else if (p2 < p1 && p2 < p3) {
    p2 = 1;
} else {
    p3 = 1;
}

sum = p1 + p2 + p3;
console.log(sum);

// ----------- 

var a = 10;
var b = 5;
var max;
a > b ? max = a : max = b;
console.log(max);