// f-ja koja kvadrira vrednost zadatog broja

function square(n) {
    return n * n;
}

function arrayElementsSquare(arr, func) {
    var c = [];
    for(var i = 0; i < arr.length; i++) {
        c[i] = func(arr[i]);
    }
    console.log(c);
}

arrayElementsSquare([2, 3, 4], square);

// zadatak 2

function small() {
    return 8;
}

function large() {
    return 590;
}

function huge() {
    return 234567;
}

function generateNumber(f) {
    
    if(typeof f == 'function') {
        console.log(f());
    } else {
        console.log('Input is not a function');
    }
}

generateNumber(small, 2);

//.............

function sum(a,b){
    return a+b;
}
function sumArrays (a,b,f){
    var c = [];
    var i;
    for(i=0;i<a.length;i++){
        c[i] = f(a[i],b[i]);
    }
    return c;
}
var arr = [1,4,6];
var brr = [4, 7, 9];
console.log(sumArrays(arr,brr,sum));

//.......

function input(a,b){
    
    return function() {
         return a + '.' + b + '@gmail.com';
    }
}

var email = input('ime', 'prezime');
console.log(email());