"use strict";
/*eslint-disable*/
/**
 *  Write a JavaScript program to compute the sum and product of an array of integers.
 * @param {*} arr 
 * @returns 
 */
function sumOfSquare(arr) {
    let sum = 0;
    let product = 1;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result.push(sum);
        // product *= arr[i];
        //result.push(product);
    }
    return result;
}
let num = [1, 2, 3, 4];
console.log(sumOfSquare([1, 2, 3, 4]));
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]];
// console.log(matrix);
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }