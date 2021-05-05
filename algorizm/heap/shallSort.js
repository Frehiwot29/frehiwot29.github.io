"use strict";
/*eslint-disable*/
function shellSort(arr) {
    let maxGap = Math.floor((arr.length - 1) / 3);
    let h = 1;
    while (h <= maxGap) {
        h = h * 3 + 1;
    }
    while (0 < h) {
        segmentInserationSort(arr, h);
        h = (h - 1) / 3;
    }
}
function segmentInserationSort(arr, gap) {
    for (let i = gap; i < arr.length - 1; i++) {
        let j = i;
        let temp = arr[i];
        while ((gap - 1) < j && temp < arr[j - gap]) {
            arr[j - gab] = arr[j]
            j = j - gab;

        }
        temp = arr[j];
    }
    return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(shellSort(arr, 5));