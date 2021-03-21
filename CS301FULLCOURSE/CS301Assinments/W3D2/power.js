"use strict";
/**
 * 
 * @param {number} base to calculate 
 * @param {number} num to multiple x by 
 * @return {number} number
 */
function power(base, num) {
    if (num === 0) {
        return 1;
    } else {
        return base * power(base, num - 1);
    }
}
console.log(power(2, 3));