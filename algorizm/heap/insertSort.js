"use strict";
/*eslint-disable*/
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        let temp = arr[i]
        while (0 < j && temp < arr[j - 1]) {
            arr[j - 1] = arr[j];
            j--;
            //temp = arr[j];
        }
        arr[j] = temp;
    }
    return arr;
}
let arr = [1, 7, 8, 10, 2, 3, 4, 5, 6];
insertionSort(arr)
console.log(arr);
/*function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = arr[i];
        // The last element of our sorted subarray
        let j = i - 1;
        while ((j > -1) && (current < arr[j])) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
let arr = [5, 2, 4, 6, 1, 3];
insertionSort(arr);
console.log(arr);*/