"use strict";

/**
 * Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum
    of values on the odd indices.
 * @param {array}  arr sum index of 
 * @return {array} the result
*/
function sumOddIndicesValues(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            temp += arr[i];

        }

    }
    return temp;

}
console.log(sumOddIndicesValues([1, 2, 3, 4, 5, 6]));