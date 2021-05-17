"use strict";
/**
 * 
 * @param {Array} arr to sort
 * @returns {Array} the sorted on
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }
    }
    return arr;
}
console.log(bubbleSort([1, 2, 56, 7, 200, 8, 90, 34, 56, 76, 54, 890, 678]));