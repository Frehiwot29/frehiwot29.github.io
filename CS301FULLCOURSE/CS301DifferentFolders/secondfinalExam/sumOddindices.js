"use strict";
/*eslint-disable*/
/**
 * Write a function sumOddIndicesValues that takes an array as a parameter 
 * and returns the sum of values on the odd indices. 
              Input Result
            [1,3,4,6,4,7,2] 3+6+7 i.e. 16
 */
function sumOddIndices(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}
let array = [1, 3, 4, 6, 4, 7, 2];
console.log(sumOddIndices(array));