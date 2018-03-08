// Write a function that capitalizes the first letter of each string argument it receives.  
// 	Function arguments: ‘hello’, ‘there’, ‘ES’, 6
// 	Output: ‘Hello’, ‘There’, ‘ES’


function capitalise(string) {

    console.log(string.charAt(0).toUpperCase() + string.slice(1));
}

function capitaliseArg(...args) {
    for (let i = 0; i < capitaliseArg.arguments.length; i++) {
        capitalise(capitaliseArg.arguments[i]);
    }
}

capitaliseArg('hello', 'there', 'ES');




// Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: 120
// 	Output: 24


function pdv(price) {
    const tax = 0.2;
    return price * tax;
}
console.log(pdv(120));




// Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]


function increaseElement(arr, num = 1) {
    var arr1 = arr.map(element => element + num);
    console.log(arr1);

}

increaseElement([4, 6, 11, -9, 2.1], 3);



// Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]


function filterEven(arr) {
    var arr1 = arr.filter(element => element % 2 == 0);
    console.log(arr1);
}
filterEven([6, 11, 9, 0, 3]);


// Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']

function filterEven(arr) {
    var arr1 = arr.filter(element => element.toLowerCase().includes("js"));
    console.log(arr1);
}
filterEven(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']);





// Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]


function filterEven(arr) {
    var arr1 = arr.filter((element) => Number.isInteger(element)
    );
    console.log(arr1);
}
filterEven([1.6, 11.34, 9.23, 7, 3.11, 8]);





// Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// 	Output: 45, 553


function elContains5(...args) {
    var arr = args.filter(element => element.toString().includes('5'));
    console.log(arr);
}
elContains5(23, 11.5, 9, 'abc', 45, 28, 553);




// Write a function that returns indexes of the elements greater than 10. 
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: 1, 2, 5



function findIndex(arr) {
    var indexArr = [];
    arr.forEach((e, i) => {
        if (e > 10) {
            indexArr.push(i);
        }
    });
    console.log(indexArr);
}

findIndex([1.6, 11.34, 29.23, 7, 3.11, 18]);




//   Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
// Write a function that prints out the names of persons older than 25. 
// Write a function that check if there is a person older than 40.
// Write a function that checks if all persons are older than 20.





// Write a function that checks if the given array is an array of positive integer values. 
// 	Input: [3, 11, 9, 5, 6]
// 	Output: yes

// 	Input: [3, -12, 4, 11]
// 	Output: no


function checkIfPositive(arr) {
     var check = arr.every(element => element > 0);
     if(check) {
        console.log('yes');
     } else {
         console.log('no');
     }
}

checkIfPositive([3, -12, 4, 11]);




// Write a function that calculates the product of the elements of the array. 
// Input: [2, 8, 3]
// Output:  48


function product(arr) {
    let prod = arr.reduce((a, b) => a * b, 1);
    console.log(prod);
}
product([2, 8, 3]);




// Write a function that calculates the maximum of the given array. 
// Input: [2, 7, 3, 8, 5.4] 
// 	Output: 8



function maximum(...args) {
let max= args[0];
args.forEach(element => {
    if(element> max){
        max=element
    }
});
console.log(max);
console.log(args);

}
maximum (2, 17, 3, 8, 5.4);







