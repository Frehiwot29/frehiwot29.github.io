
/**
 * Write a Java program to calculate the factorial value of a given number. E.g.,
 *  factorial 4 =4*3*2*1 = 24
*/
"use strict";

const prompt = require("prompt-sync")();
let num = +prompt("Enter the number: ");
let result = 1;
for (let i = num; i >= 1; i--) {
    result = i * result;
    //console.log(result)
}
console.log(result);