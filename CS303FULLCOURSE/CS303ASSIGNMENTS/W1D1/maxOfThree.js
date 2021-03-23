"use strict";
///*eslint-disable*/
/**
 * Q1. Define a function maxOfThree() that takes three numbers as arguments and returns the 
largest of them. 
 */
/**
 * 
 * @param {number} num1 number
 * @param {number} num2 number
 * @param {number} num3 number
 * @return {number} number the max one
 */
function maxOfThree(num1, num2, num3) {
    let result = 0;
    if (num1 > num2 && num1 > num3) {
        result = num1;
    } else if (num2 > num1 && num2 > num3) {
        result = num2;
    } else if (num3 > num1 && num3 > num2) {
        result = num3;

    }
    return result;
}
console.log(maxOfThree(2, 3, 4));
console.log(maxOfThree(4, 3, 2));
console.log(maxOfThree(2, 7, 4));



