"use strict";
/**
 * @param {array} arr1 to merge
 * @param {array} arr2 to merge
 * @return {array} arr
*/
function mergingArray(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        arr = arr1[i].shift();
        arr2[i].push(arr);
    }
    return arr;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
console.log(mergingArray(arr1, arr2));