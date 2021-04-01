"use strict";
/**
 * 
 * @param {number} number to sum
 * @return {number} the sum of
 */
function sumOfAll(number) {
    if (number === 0) {
        return 0;
    } else {
        return number + sumOfAll(number - 1);
    }
}
//console.log(sumOfAll(10));
/**
 * 
 * @param {number} num to
 * @return {number} result of factorial
 */
function fiactorialCalc(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * fiactorialCalc(num - 1);
    }
}
//console.log(fiactorialCalc(5));
/**
 * 
 * @param {Number} num of fib
 * @return {number} num
 */
function fibonacciNum(num) {
    if (num <= 1) {
        return num;
    } else {
        return fibonacciNum(num - 1) + fibonacciNum(num - 2);
    }
}
//console.log(fibonacciNum(7));