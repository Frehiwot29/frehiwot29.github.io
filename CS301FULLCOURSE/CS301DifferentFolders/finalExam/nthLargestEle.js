"use strict";
/*eslint-disable*/
/**
 * Write a JavaScript function to get nth largest element from an unsorted array. 
 * Go to the editor
    console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));  Ans:89
 */
function largest(arr, num) {
    let myArr = arr;
    let result = 0;
    for (let i = 0; i < myArr.length; i++) {
        if (i === num) {
            result = myArr[i];
        }
    }
    return result;
}
let number = [43, 56, 23, 89, 88, 90, 99, 652];
let nu = 4;
console.log(largest(number.sort(), nu));