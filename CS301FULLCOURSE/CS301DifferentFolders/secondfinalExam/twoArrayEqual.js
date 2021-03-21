"use strict";
/*eslint-disable*/
/**
 * Two arrays are considered equal if they have exact same elements, even if order may differ. 
   Write a function that tests weather two arrays are equal.
    e.g. [1,2,3] is equal to [1,2,3] and [3,1,2] but not equal to [1,2] or [2,1,3,4]
 */
function twoArrayEqual(arr1, arr2) {
    let result;
    if (arr1.length !== arr2.length) return false;
    let comparater = (a, b) => a - b;
    arr1.sort(comparater);
    arr2.sort(comparater);
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}
let num1 = [1, 2, 3, 6];
let num2 = [3, 1, 2, 6];
console.log(twoArrayEqual(num1, num2));