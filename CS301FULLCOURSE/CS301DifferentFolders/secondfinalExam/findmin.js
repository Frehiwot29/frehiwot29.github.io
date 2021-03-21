"use strict";
/*eslint-disable*/
/**
 *  Write a function findMin that takes an array as a parameter and returns 
 * the minimum value.Now use this function to find minimum value in the 
 * array [2,3, -1,-4,3,2,1]
 * @param {*} arr 
 * @returns 
 */
function findMin(arr) {
    let min = arr[0];
    //let max = arr[arr.length];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            result.push(min);
        }
    }
    return result;
}
let array = [1, 2, 3, 4, 5, -2];
console.log(findMin(array));