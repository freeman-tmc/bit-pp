// spajanje sortiranih nizova
function merge(a, b){
    var i;
    var j;
    var k;
    var c = [];

    for(i = 0, j = 0, k = 0; i < a.length && j < b.length; k++){
        if(a[i] < b[j]){
            c[k] = a[i];
            i++;
        } else {
            c[k] = b[j];
            j++;
        }
    }

    if(i == a.length){     // ako smo na kraju a
        for( /*j=j*/ ; j < b.length; j++){
            c[k] = b[j];
            k++;
        }
    } else {               // ako smo na kraju b
        for( /*i=i*/ ; i < a.length; i++){
            c[k] = a[i];
            k++;
        }
    }
    return c;
}

console.log(merge([1,3,5],[1,2,4,6]));

//-------------------nadovezati dva niza nesortirana

function merge1(a, b){
    for(var i = 0; i < b.length; i++){
        a[a.length] = b[i]; 
    }
    return a;
}

console.log(merge1([1,3,5],[7,2,4,6]));

//------------------------------------------

function merging(a, b){
    var c = [];
    var j = 0;
    for(i = 0; i < a.length; i++){
        c[j] = a[i];
        j++;
        c[j] = b[i];
        j++;
    }
    return c;
}
console.log(merging([1,3,5],[7,2,4]));

//-----------------------------------------9

function separator(str, a){
    var str1 = "";
    for(var i = 0; i < str.length; i++){
        if(str[i] === " "){
            str1 = str1 + a;
        } else  if (a == undefined){
            str1 = str1 + "-";
        } else {
            str1 = str1 + a; 
        }
    }
    return str1;
}

console.log(separator("My random string",));