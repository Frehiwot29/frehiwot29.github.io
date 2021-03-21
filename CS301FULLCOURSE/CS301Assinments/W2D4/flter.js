"use strict";
/*eslint-disable*/
/**
 * Write a JavaScript program that number input from the user at once as comma 
 * separated values and stores it into an array and do following operations
     a. Filters out negative values.
 * @param {*} arr 
 */
function filterNega(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result.push(arr[i]);
        }
    }
    return result;

}
console.log(filterNega([2, 3, 4, -5, 6, -2]));