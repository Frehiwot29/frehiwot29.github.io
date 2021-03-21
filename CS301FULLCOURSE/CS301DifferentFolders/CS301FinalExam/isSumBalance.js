"use strict";
/*eslint-disable*/
function isSumBalance(arr) {
    if (arr.length === 0) return false;
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }
    return sumEven === sumOdd;
}
let num = [1, 2, 3, 4, 5, 6];
console.log(isSumBalance(num));