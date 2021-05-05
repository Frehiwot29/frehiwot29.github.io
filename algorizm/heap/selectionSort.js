"use strict";
/*eslint-disable*/
function selectionSort(arr) {
    let last = arr.length - 1;
    for (let i = 0; i < last; i++) {
        let nextMin = findNextMinIndex(arr, i, last);
        swap(arr, i, nextMin);
    }
}
function findNextMinIndex(arr, bottom, top) {
    let min = arr[bottom];
    let minIndex = bottom;
    for (let i = bottom; i < top; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}
let curr = new selectionSort();
let num = [1, 5, 3, 4, 7, 8];
console.log(selectionSort(num));