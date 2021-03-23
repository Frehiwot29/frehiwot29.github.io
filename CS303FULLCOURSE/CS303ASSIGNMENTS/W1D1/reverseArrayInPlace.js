"use strict";
///*eslint-disable*/
/**
 * 
 * @param {Array} arr to find reverse inplace
 * @return {Array} reverse array
 */
function reverseArrayInPlace(arr) {
    let length = arr.length;
    let loop = Math.floor(length / 2);
    for (let i = 0; i < loop; i++) {
        let holdNum = arr[i];
        let swapPos = length - 1 - i;
        arr[i] = arr[swapPos];
        arr[swapPos] = holdNum;
    }
    return arr;
}

let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));
console.log(reverseArrayInPlace(["A", "B", "C"]));