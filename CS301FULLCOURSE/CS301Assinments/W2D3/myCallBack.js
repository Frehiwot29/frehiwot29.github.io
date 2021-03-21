// function 
"use strict";
/**
 * 
 * @param {function} mySum this a function  
 * @param {number} num1 to find sum
 * @param {number} num2 to find sum
 * @return {number} the sum of num1 and num2
 */
function compute(mySum, num1, num2) {
    return mySum(num1, num2);
}
/**
 * 
 * @param {number} num1 to find sum
 * @param {number} num2 to find sum
 * @return {number} num1 and num2 
 */
function mySum(num1, num2) {
    return num1 + num2;
}
console.log(compute(mySum, 2, 3));