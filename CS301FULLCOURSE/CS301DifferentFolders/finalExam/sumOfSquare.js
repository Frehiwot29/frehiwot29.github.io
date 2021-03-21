"use strict";
/*eslint-disable*/
/**
 *  Write a JavaScript program to find the sum of squares of a numeric vector.
 */
function sumOfSquare(arr) {
    let sumOfSq = 0;
    let product = 1;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        product = Math.pow(arr[i], 2);
        sumOfSq += product;
        result = sumOfSq;
    }
    return result;
}
let num = [1, 2, 3, 4];
console.log(sumOfSquare([1, 2, 3, 4]));