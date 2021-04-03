"use strict";
/**
 * Q2.Write function sum that works like this: sum(a)(b) = a+b.
 * Yes, exactly this way, using double parentheses (not a mistype).
 * @param {Number} num1 number to sum 
 * @returns{Number} to sum num1 and num2
 */
function sum(num1) {
    return function (num2) {
        return num1 + num2; // takes "num1" from the outer lexical environment
    };
}
console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4
/**
 * ReferenceError: Cannot access 'x' before initialization
 * The result is: error.
 * Try running it:
 */
let num = 1;
/**
* @returns{number} number 
*/
function func() {
    console.log(num); // ReferenceError: Cannot access 'x' before initialization
    let num = 2;
}
func();