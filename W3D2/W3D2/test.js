"use strict";
/**
 * 
 * @param {number } num to compare
 * @return {number} number digiting
 */
function countDigit(num) {

    if (num === 0) {
        return 0;

    } else if (num === 1) {

        return 1;
    } else {
        return 1 + countDigit(Math.floor(num / 10));
    }
}
console.log(countDigit(62663));

/**
* 
* @param {number} base to calculate 
* @param {number} num to multiple x by 
* @return {number} number
*/
function power(base, num) {
    if (num === 1) {
        return base;
    } else {
        return base * power(base, num - 1);
    }
}
console.log(power(2, 3));

/**
 *
 * @param {String} str to reverse
 * @return {String} reversed String
 */
function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverseString("hello"));
module.exports = { reverseString, power, countDigit };