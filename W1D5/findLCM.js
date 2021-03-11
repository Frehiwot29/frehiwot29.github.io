"use strict";
/**
 * 
 * @param {number} num1 to find lcm  
 * @param {number} num2 to find lcm
 * @return {number} lcm number from the two  
 */
function calculateLCM(num1, num2) {
    let larger = Math.max(num1, num2);
    let smaller = Math.min(num1, num2);
    while (larger % smaller !== 0) {
        larger += larger;
    }
    return larger;
}

let result = calculateLCM(9, 27);
console.log(result);