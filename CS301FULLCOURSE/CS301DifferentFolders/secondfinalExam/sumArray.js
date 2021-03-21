"use strict";
/*eslint-disable*/
/**
 * Write a function sumArrays, that takes two arrays as parameters 
 * (you can assume of same length) then returns a new array by adding 
 * two array values at the corresponding indices.
 * Inputs output [1,2,3,4,5] , [5,4,3,2,1] =>  [6,6,6,6,6]
  */
function sumArray(arr1, arr2) {
    let sum = 0;
    let newArray = [];
    for (let i = 0; i < arr1.length; i++) {
        sum = arr1[i] + arr2[i];
        newArray.push(sum);
    }
    return newArray;
}
let array1 = [1, 2, 3, 4, 5];
let array2 = [5, 4, 3, 2, 1];
console.log(sumArray(array1, array2));