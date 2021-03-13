"use strict";
/**
 * Write a function isSumEqual that takes two array parameters and 
 * returns true if the sum of elements in both arrays are equal.
*/
/**
 * 
 * @param {Array} arr1 to
 * @param {Array} arr2 to
 * @return {boolean}  to
 */
function isSumEqual(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
        sum2 += arr2[j];
    }

    return (sum1 === sum2);
}
console.log(isSumEqual([1, 2, 3, 4], [1, 2, 3, 4]));