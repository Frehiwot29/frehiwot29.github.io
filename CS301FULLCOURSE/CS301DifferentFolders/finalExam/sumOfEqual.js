"use strict";
/*eslint-disable*/
/**
 * Write a function isSumEqual that takes two array parameters and returns true
 *  if the sum of elements in both arrays are equal.
 */
function isSumEqual(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum2 += arr2[i];
    }
    return sum1 === sum2;
}
let num1 = [1, 2, 3];
let num2 = [0, 6];
console.log(isSumEqual(num1, num2));