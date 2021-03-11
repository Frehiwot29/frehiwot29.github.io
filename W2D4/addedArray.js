"use strict";
/**
 * Write a function addend(arr) that accepts an array 
 * of numbers as parameters and returns the sum of first and last elements of the array.
 * @param {number} arr to add 
 * @return {number} arr
 */
function addend(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[0] + arr[arr.length - 1];
    }
    return sum;
}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(addend(arr1));