"use strict";
//arrow function
/**
 * 
 * @param {number} mySum of num1 and num2
 * @param {number} num1 to find sum
 * @param {number} num2 to find sum
 * @return {number} num1 and num2
 */
let compute = (mySum, num1, num2) => { return mySum(num1, num2); };
let mySum = (num1, num2) => { return num1 + num2; };
console.log(compute(mySum, 2, 3));
