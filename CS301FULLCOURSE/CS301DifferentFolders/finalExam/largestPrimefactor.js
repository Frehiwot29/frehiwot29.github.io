"use strict";
/**
 * write a function named largestPrimeFactor that will return the largest prime factor
 * of a number. if the number is <=1 it should return 0.
 * example if n=10 so 10=5*2 so 5 and 2 are prime factor of 10 so, the largest is 5.
 * @param {number} num to
 * @return {number} number of largest 
 */
function largestPrimefactor(num) {
    if (num <= 1) return 0;
    let largestPrimefactor = 2;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            if (isprime(i)) {
                largestPrimefactor = i;
            }
        }
    }
    return largestPrimefactor;

}
/**
 * 
 * @param {number} num1 to
 * @return {boolean} true or false
 */
function isprime(num1) {
    if (num1 === 1 || num1 === 0) return false;
    for (let i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            return false;
        } else {
            return true;
        }

    }

}
let numer = 867;
console.log(largestPrimefactor(numer));