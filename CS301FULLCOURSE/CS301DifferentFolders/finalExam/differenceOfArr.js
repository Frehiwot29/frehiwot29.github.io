"use strict";
/*eslint-disable*/
/**
 * Write a JavaScript function to find the difference of two arrays
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
function arrDifferance(arr1, arr2) {
    let temp = [];
    arr1 = arr1.toString().split(',').map(Number);
    arr2 = arr2.toString().split(',').map(Number);
    for (let i in arr1) {
        if (arr2.indexOf(arr1[i] === -1))
            temp.push(arr1[i]);

    }
    for (let i in arr2) {
        if (arr1.indexOf(arr2[i] === -1))
            temp.push(arr2[i]);
    }
    return temp.sort((a, b) => a - b);
}
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [1, 2, 3, 6, 7, 8];
console.log(arrDifferance(array1, array2));