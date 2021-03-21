"use strict";
/*eslint-disable*/
/**
 * Do matrix addition and print result on matrix format for following
 */
function additionMatrix(arr1, arr2) {
    let result = [];
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2[i].length; j++) {
            sum = arr1[i][j] + arr2[i][j];
            result.push(sum);
        }
    }
    return result;
}
let num1 = [[1, 2, 3, 4], [1, 2, 3, 4]];
let num2 = [[1, 2, 3, 4], [1, 2, 3, 4]];
console.log(additionMatrix(num1, num2));