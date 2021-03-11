"use strict";
/**
 * 
 * @param {array} arr1 to sort
 * @param {array} arr2 to sort
 * @return {array} arr1 and  
 */
function mergesSortedarr(arr1, arr2) {

    let arr = [];
    arr = arr1.concat(arr2).sort();

    return arr;
}
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
console.log(mergesSortedarr(arr1, arr2));

