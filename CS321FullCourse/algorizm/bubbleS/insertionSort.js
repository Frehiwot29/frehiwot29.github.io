"use strict";
/*eslint-disable*/
function insertionSort(arr) {
    let currentVal;
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}
console.log(insertionSort([2, 1, 9, 76, 67, 80, 4]));