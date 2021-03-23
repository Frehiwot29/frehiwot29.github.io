"use strict";
///*eslint-disable*/
/**
 * Q2. Define a function sum() and a function multiply() that sums and multiplies (respectively)
all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and
multiply([1,2,3,4]) should return 24.
 */
/**
 * 
 * @param {Array} arr to sum
 * @return {number} number to sum
 */
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum([1, 2, 3, 4]));
console.log(sum([1, 2, 3, 4]));
console.log(sum([1, 2, 3, 4]));
console.log(sum([1, 2, 3, 4]));

/**
 * 
 * @param {Array} arr to multiply
 * @return{number} number 
 */
function multiply(arr) {
    let multip = 1;
    for (let i = 0; i < arr.length; i++) {
        multip *= arr[i];

    }
    return multip;
}
console.log(multiply([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));