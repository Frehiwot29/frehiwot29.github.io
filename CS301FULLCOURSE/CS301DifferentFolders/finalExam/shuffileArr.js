"use strict";
/*eslint-disable*/
/**
 * Write a JavaScript program to shuffle an array.
 */
function shuffileArr(arr) {
    let l = arr.length;
    let i;
    let temp;
    while (l > 0) {
        i = Math.floor(Math.random() * l);
        l--;
        temp = arr[l];
        arr[l] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
let num = [1, 2, 3, 4, 5, 6];
console.log(shuffileArr(num));