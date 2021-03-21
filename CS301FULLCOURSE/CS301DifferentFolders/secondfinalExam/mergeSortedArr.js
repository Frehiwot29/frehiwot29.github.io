"use strict";
/*eslint-disable*/
/**
 * rite a function that merges two sorted arrays into one single sorted array'
 * Make use of shift and push array methods.
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
function mergesSortedarr(arr1, arr2) {
    let mergResult = [];
    for (let i = 0; i < arr1.length; i++) {
        mergResult.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        mergResult.push(arr2[i]);
    }
    return mergResult;
}
let num = [1, 2, 3, 4,];
let num1 = [5, 6, 7];
console.log(mergesSortedarr(num, num1).sort());