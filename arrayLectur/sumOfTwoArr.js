"use strict";
/**
    Write a function sumArrays, that takes two arrays as parameters
   (you can assume of same
   length) then returns a new array by adding two array values at
   the corresponding indices.
 * @param {array} arr1 input to merge
 * @param {array} arr2 input to merge
 * @return {array} arr merging two array
 */
function sumArrays(arr1, arr2) {
    let sumArray = [];
    for (let i = 0; i < arr1.length; i++) {
        sumArray[i] = arr1[i] + arr2[i];

    }
    return sumArray;

}
console.log(sumArrays([1, 2, 3], [3, 4, 5]));