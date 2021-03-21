"use strict";
/**
 * 
 * @param {number} num1 to
 * @param {number} num2 to
 * @return {number} my own
 */
function swapFunction(num1, num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;

    console.log(num1, num2);

}
let abc = 5;
let bcd = 7;
swapFunction(abc, bcd);