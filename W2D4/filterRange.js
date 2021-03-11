"use strict";
/*eslint-disable*/
/**
 *  Write a function filterRange(arr, a, b) that gets an array arr, 
 *    looks for elements with 
     values >= a and values<= b and return a result as an array.
 * @param {Array} arr given 
 * @param {number} a to compare
 * @param {number} b to compare
 * @return{Array} of number
 */
function filterRange(arr, a, b) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }
    }
    return result;
}
let num = [2, 3, 4, 5, 6, 7, 7, 8, 9];
let num1 = 4;
let num2 = 7;
console.log(filterRange(num, num1, num2));

