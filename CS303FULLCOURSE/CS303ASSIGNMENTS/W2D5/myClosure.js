"use strict";
/**
 * 
 * @param {Object} arr is array 
 * @returns{Object} return function
 */
function inArray(arr) {
    return function (num1) {
        return arr.includes(num1);
    };
}
/**
 * 
 * @param {Number} num1 is integer
 * @param {Number} num2 is integer
 * @returns{Boolean} return boolean
 */
function inBetween(num1, num2) {
    return function (num) {
        return num >= num1 && num <= num2;
    };
}
/**
 * 
 * @param {String} fieldName is key;
 * @returns{Object}  return sorted object
 */
function byField(fieldName) {
    return (num1, num2) => num1[fieldName] > num2[fieldName] ? 1 : -1;
}
/**
 * 
 * @returns{Object} return array of function 
 */
function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            return i;
        };
        shooters.push(shooter);
    }
    return shooters;
}
