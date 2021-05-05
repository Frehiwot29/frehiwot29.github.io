"use strict";
/**
 * 
 * @param {Array} arr min
 * @returns {Array} find 
 */
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
const arr1 = [1, -2, 3, 4, 5, 6, 34, 61, 78, 12, 23, 89];
const output = selectionSort(arr1);
console.log(output);
console.log(arr1);
