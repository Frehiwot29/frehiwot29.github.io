"use strict";
/**
 * @param {number} arr to
 * @return {number} arr
 */
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

    }
    return min;
}
let result = [2, 3, -1, -4, 3, 2, 1];
console.log(findMin(result));



