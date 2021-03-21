"use strict";
/**
 *Q1. write a function named isSumbalanced that takes an array as argument and tests if 
 * the sum of odd elements in the array is equal to sum of even elements. 
 * it should return false if array is empity.
 * 
 * @param {Array} arr to get sum Of Even or odd
 * @return {boolean} true or false 
 */
function isSumbalanced(arr) {
    if (arr.length === 0) return false;
    let sumEven = 0;
    let sumOdd = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }

    return sumEven === sumOdd;
}
let arr1 = [1, 2, 3, 3, 4, 4, 5, 6];
console.log(isSumbalanced(arr1));
