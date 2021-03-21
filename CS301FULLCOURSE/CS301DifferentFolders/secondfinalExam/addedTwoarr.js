"use strict";
/*eslint-disable*/
/**
 * Write a function addend(arr) that accepts an array of numbers as parameters 
 * and returns the sum of first and last elements of the array
 */
function addedArray(arr) {
    let sum = 0;
    let l = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[0] + arr[l];
    }
    return sum;
}
let array = [1, 2, 3, 4, 5, 6];
console.log(addedArray(array));