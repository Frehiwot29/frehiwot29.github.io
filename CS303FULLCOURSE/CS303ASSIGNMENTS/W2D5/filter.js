"use strict";
/**
 * 
 * @param {Array} arr to filter
 * @return {Array} num 
 */
function inArray(arr) {
    return function (num) {
        return arr.includes(num);
    };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

/**
 * filter in between 
 */
/**
 * 
 * @param {number} num1 in between
 * @param {number} num2 in between
 * @returns {Array} to filter in between
 */
function inBetween(num1, num2) {
    return function (num3) {
        return num3 >= num1 && num3 <= num2;
    };
}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1.filter(inBetween(3, 6))); // 3,4,5,6