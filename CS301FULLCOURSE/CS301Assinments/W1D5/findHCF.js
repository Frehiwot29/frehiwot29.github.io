"use strict";
/**
 * 
 * @param {number}  num1 compute hcf  
 * @param {number}   num2 compute hcf
 * @return {number} find of the Math.min num1  num2
 */
function computeHCF(num1, num2) {
    while (Math.max(num1, num2) % Math.min(num1, num2) !== 0) {
        if (num1 > num2) {
            num1 %= num2;
        }
        else {
            num2 %= num1;
        }
    }
    // When the while loop finishes the minimum of x and y is the HCF.
    return Math.min(num1, num2);
}
let result = computeHCF(27, 81);
console.log(result);