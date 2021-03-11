"use strict";
/**
 *A prime number (or a prime) is a natural number greater than 1 that is not 
    a product of twosmaller natural numbers. 
    In other words, it is a number that is only perfectly divisible by number
     1 and itself. Write a JavaScript program to test weather user input is a prime number or not.
     a. Your logic should be based on factor count. i.e., 
     prime number will have 0 factors (notcounting 1 and itself), 
     while composite will have 1 or more factors.
    
 * 
*/

const prompt = require("prompt-sync")();

let n = prompt("Please enter a number to test if it is prime: ");
let factorcount = 0;

for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        factorcount++;
    }
}
let isPrime = factorcount === 0;
console.log(isPrime);


