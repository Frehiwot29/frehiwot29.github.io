"use strict";
/**
 *  Given an array of integers, write a function that 
 * finds the pair in array whose sum is closest to 0. 
       If there are more than one pair, return any pair.
       For e.g., [4,2, -1,3,-2,-3] → [2,-2]
 * @param {Array} arr to
   @return {Array} sum of zero
 */
function sumToZero(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                result.push(arr[i]);
            }
        }
    }
    return result;
}
let num = [4, 2, -1, 3, -2, -3];
console.log(sumToZero(num));
