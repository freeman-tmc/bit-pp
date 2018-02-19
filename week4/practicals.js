// 1

var duplicate = function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(duplicate([2, 4, 7, 11, -2, 1]));

// ------------------------------------------2

var removeDupl = function (arr) {
    var newArr = [];
    arr.sort(function (a, b) { return a - b });

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDupl([8, 8, 8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

//-------------------------------------------------------------3

var checkIfOdd = function (arr) {
    if (arr.length % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

// console.log(checkIfOdd([1, 2, 9, 2, 1]));

var lessThan = function(arr, func) {

    var check = func(arr);
    if(check) {
        var midIndex = arr[(arr.length - 1) / 2];
        var newArr = arr.sort(function (a, b) { return a - b });
        var result = newArr.indexOf(midIndex);
        return result;
    } else {
        return "Error!";
    }
}

console.log(lessThan([-1, 8.1, 3, 6, 2.3, 44, 2.11], checkIfOdd));


//--------------------------------------------------------- 4


var smallestEl = function(arr) {
    var min = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    var position = arr.lastIndexOf(min);
    return {
        value: min,
        index: position
    }
}

var obj = smallestEl([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);
console.log(obj);


// -----------------------------------------------------------5a

var lessElements = function(arr, el){
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < el) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/*console.log(lessElements([1, 2, 3, 5, 1], 3));

// 5b

var subArr = function(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i].substr(0, 3) === "pro"){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(subArr(["proactive", "hello", "productive", "world"]));

5c
*/

var filter = function(arr, func, el) {
    return func(arr, el);
}
 console.log(filter([1, 2, 3, 5, 1], lessElements, 2));

//---------------------------------------------------------6


function Product(name, price) {
    this.name = name;
    this.price = price;
}

var product1 = new Product('milk', 101 );
var product2 = new Product('sugar', 150);
var product3 = new Product('apples', 50);

var products = [product1, product2, product3];

// b
var totalPrice = function(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        total += arr[i].price;
    }
    return total;
}
console.log(totalPrice(products));

// c
var averagePrice = function(arr, func) {
    var result = func(arr) / arr.length;
    return result.toPrecision(6);
}
console.log(averagePrice(products, totalPrice));

// d
var mostExpensive = function(arr) {
    var max = arr[0].price;
    var product = '';
    for(var i = 1; i < arr.length; i++) {
        if(arr[i].price > max) {
            max = arr[i].price;
            product = arr[i].name;
        }
    }
    return product.toUpperCase();
}

console.log(mostExpensive(products));

// -------------------------------------7

var capString = function(str){
    if(str === str.toUpperCase()){
        return true;
    } else {
        return false;
    }
}

console.log(capString("HELLO WORLD"));

// b
