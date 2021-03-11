/**
 * Write a function named checkPrime that accepts a parameter and returns true if the argument
    is a prime number otherwise returns false.
    a. Now write a program that prompts user to input a number and calls the function
        checkPrime to see if the entered number is a prime number or not.
 * 
*/
"use strict";
const prompt = require("prompt-sync")();
/**
 * 
 * @param {number} num is a number  
 * @returns {boolean} true
 */
function checkPrime(num) {
    let i;
    for (i = 2; i < num; i++) {

        if (num % i === 0) {
            break;
        }
    }
    if (num === i) {
        return true;

    } else {
        return false;
    }

}
let toTestNumber = parseInt(prompt("Enter the number to test: "));
let isPrime = checkPrime(toTestNumber);
if (isPrime === true) {
    console.log("you Entered a prime one number");
} else {
    console.log("you Entered a number which is not a prime ");
}

