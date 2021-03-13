"use strict";
/**
 * 
An array is called a perfectly odd array if every element at the odd indices of the array is also odd. Write a function named isPerfectlyOdd that takes an array of integers as a parameter and checks whether it is perfectly odd. Return false if the array is an empty array.

Input                         Output
[]                            false
[2,3,4,5,7,8]                 false 
[3,9,9,5,5,7,9]               true
 *
 */
/**
 * 
 * @param {Array} arr to
 * @return {number} num
 */
function isPerfectlyOdd(arr) {
    let isPerfect;
    for (let i = 1; i < arr.length; i++) {
        if (isOdd(i) % i !== 0) {
            isPerfect = true;

        } else {
            isPerfect = false;
        }

    }
    return isPerfect;
}
/**
 * 
 * @param {number} num to
 * @return {number} number
 */
function isOdd(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
isPerfectlyOdd([]);