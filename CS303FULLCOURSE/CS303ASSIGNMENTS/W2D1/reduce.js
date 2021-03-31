"use strict";
/**
 * 
 * @param {Array} arr to
 * @return {number} num
 */
function myReduce(arr) {
    return arr.reduce((item, index) => item * index, 1);
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(myReduce(array));