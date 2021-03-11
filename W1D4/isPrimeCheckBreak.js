"use strict";
/**
 * b. This time think of a logic to use break statement so that you can break early from the
      loop, right when you know number is not prime. For example, you know number 8 is not
     prime right on the first loop because it is perfectly divisible by 2 itself, that's why further
     testing is not required. If the number is prime loop will proceed until the end.
 *  
*/
const prompt = require("prompt-sync")();

let num = prompt("Please enter a number to test if it is pime: ");
let isPrime = true;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime);