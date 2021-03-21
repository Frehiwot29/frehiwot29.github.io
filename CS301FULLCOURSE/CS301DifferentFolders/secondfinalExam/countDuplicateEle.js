"use strict";
/*eslint-disable*/
/**
 * Write a function to count total number of duplicate elements in an array.
 */
function countDuplicate(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j])
                count++;
        }

    }
    return count;
}
let num = [1, 2, 3, 4, 3, 4, 5, 6, 5, 6];
console.log(countDuplicate(num));