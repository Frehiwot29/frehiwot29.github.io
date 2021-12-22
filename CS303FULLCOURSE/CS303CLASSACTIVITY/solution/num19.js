"use strict";
/*eslint-disable*/
let array =[10,20,30,40]
let returnVal= array.map(helper);

function helper(n,index){
    return n*index
}

console.log(returnVal); 
console.log(array)
// [0, 20, 60, 120] console.log(array);