"use strict";
/**
 * 
 * @param {Array} arr reverse
 * @returns {Array} new
 */
function revresArray(arr) {
    let newArray = [];
    for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
        newArray[j] = newArray[i];
    }
    return newArray.join("");
}
console.log(revresArray(1, 2, 3, 4, 5, 6));