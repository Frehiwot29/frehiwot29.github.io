"use strict";
/**
 * 
 * @param {Array} arr sum
 * @returns {Array} sum of zero
 */
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }

        }
    }
}
console.log(sumZero([1, 2, -3, 4, -5, 6, 3, 5]));