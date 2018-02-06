

//slobodan

for (var i = 0; i < 16; i++) {
    if (i%2) {
        console.log(i, "odd");
    } else {
        console.log(i, "even");
    }
}



//stevan
var sum=0;
for (var i =1; i<=1000; i++ ){

    if( i%3==0 && i%5 ==0 ){
       sum = sum + i;
    }
  
}

console.log(sum);


//slobodan

var arr = [1, 2, 3, 4];
var summOfArray = 0;
var productOfArray = 1;

for (var i = 0; i < arr.length; i++ ) {
    summOfArray = summOfArray + arr[i]; 
    productOfArray = productOfArray * arr[i];
}

console.log("Summ of array " + summOfArray);
console.log("Product of array " + productOfArray);

//stevan

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var result= '';
var i=0;
for(i in x){
    result += x[i];
}
console.log(typeof result);



//stampanje zvezdica
var n = 5;
var s="*";
var space = " ";


for (r=0; r <= n - 1; r++){
    if (r == 0 || r == n-1) {
        var line = "";
        for (var i = 0; i < n; i++) {
            line = line + s;
        }
        console.log(line);
    } else {
        var line = ""
        line = line + s;
        for ( var i = 0; i < n-2; i++) {
            line = line + space;
        }
        line = line + s;
        console.log(line);
    }
   
}
