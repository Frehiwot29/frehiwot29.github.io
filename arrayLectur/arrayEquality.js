"use strict";
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
/**
 * 
 * @param {number} fArray in
 * @param {number} sArray in
 * @return {number} finding equality
 */
function arrayEqualty(fArray, sArray) {
    if (fArray.length !== sArray.length) return false;
    for (let i = 0; i < fArray.length; i++) {
        if (fArray[i] !== sArray[i]) {
            return false;
        }

    }
    return true;

}
console.log(arrayEqualty(arr1, arr2));







