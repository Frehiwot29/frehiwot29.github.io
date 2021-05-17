"use strict";
/**
 * 
 * @param {Array} arr to double
 * @return {Array} new array
 */
function doubleArr(arr) {
    let newArr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        newArr.push(2 * arr[i]);

    }
    return newArr;
}
console.log(doubleArr([1, 2, 3, 4, 5]));