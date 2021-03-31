"use strict";
/*eslint-disable*/
function multiplyAll(arr){
    return arr.reduce((mul,n)=>mul*n,1)
}
console.log(multiplyAll([10,5,3]))