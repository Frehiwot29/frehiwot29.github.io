"use strict";
/*eslint-disable*/
/**
 * Write a JavaScript program to check whether a number is Perfect number or not?
   Perfect number is a positive integer which is equal to the sum of its proper positive divisors.
   For example: 6 is the first perfect number
   Proper divisors of 6 are 1, 2, 3
   Sum of its proper divisors = 1 + 2 + 3 = 6.
   Hence 6 is a perfect number
 */
function perfectNumber(num) {
    let sum = 0;
    let result;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
        if (sum === num) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}
console.log(perfectNumber(8));