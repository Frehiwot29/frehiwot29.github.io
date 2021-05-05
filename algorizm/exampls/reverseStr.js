"use strict";
/**
 * 
 * @param {Array} arr array
 * @returns {Array} to find arr
 */
function revresArr(arr) {
    let strArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        strArr.push(arr[i]);

    }
    return strArr;

}
console.log(revresArr([1, 2, 3, 4, 5, 6]));