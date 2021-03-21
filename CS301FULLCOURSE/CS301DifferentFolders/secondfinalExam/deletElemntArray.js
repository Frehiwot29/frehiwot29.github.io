"use strict";
/*eslint-disable*/
/**
 * . Write a function deleteArrayElement that takes two parameters, 
 * first an array and second parameter is an array index to delete element from. 
 * You should do this without using any inbuilt functions.
 * 
 */
function deletArray(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === num) {
            result.push(arr[i]);
        }
    }
    return result;
}
let arr1 = [1, 2, 3, 4, 5, 6];
let index = 3;
console.log(deletArray(arr1, index));//to delet 4