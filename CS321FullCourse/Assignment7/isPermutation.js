"use strict";
/*eslint-disable*/
const Sorts = require('./HW07-ArraySorter.js');
function isPermutation(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let sort = new Sorts.ArraySorter();
    sort.heapSort(arr1)
    sort.heapSort(arr2)
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}
let arr1 = [1, 4, 2]
let arr2 = [4, 1, 2]
console.log("expected true: " + isPermutation(arr1, arr2))
let arr3 = [5, 7, 9, 2]
let arr4 = [2, 9, 7, 3]
console.log("expected false: " + isPermutation(arr3, arr4))

