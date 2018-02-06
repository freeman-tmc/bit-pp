
var min;
var mid;
var max;


function sortNumbers () {
    var a = document.getElementsByName("num-one")[0].value;
    var b = document.getElementsByName("num-two")[0].value;
    var c = document.getElementsByName("num-three")[0].value;

    if (a < b && a < c) {
        min = a;
        if (b > c){
            mid = c;
            max = b;
        } else {
            mid = b;
            max = c;
        }

    } else if ( a > b && a > c) {
        max = a;
        if (b < c) {
            min = b;
            mid = c;        
        } else {
            min = c;
            mid = b;  
        }
        
    } else if (b < c) {
        max = c;
        mid = a;
        min = b;
    } else {
        max = b;
        mid = a;
        min = c;
    }

    var result = document.getElementById("result");
    result.innerHTML = min + "," + mid + "," + max;
}


//console.log(min, mid, max); 
