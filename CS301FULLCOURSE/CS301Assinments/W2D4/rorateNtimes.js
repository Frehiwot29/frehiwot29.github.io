"use strict";
/**
 * 
 * @param {array} arr  rotate array 
 * @param {number} num to rotate n times
 * @return {array} arr is result
 */
function rotateNtimes(arr, num = 1) {
    return [...arr.slice(num, arr.length), ...arr.slice(0, num)];

}
let arr = [1, 2, 3, 4, 5];
console.log(rotateNtimes(arr, 1));
console.log(rotateNtimes(arr, 2));
console.log(rotateNtimes(arr, 3));
console.log(rotateNtimes(arr, 4));
console.log(rotateNtimes(arr, 5));
