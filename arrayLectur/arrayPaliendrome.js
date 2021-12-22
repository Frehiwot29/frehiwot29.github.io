"use strict";
/**
 * 
 * @param {array}  arr check wether palindrom or not 
 * @return {boolean} true or false
 */
function checkPaliendrom(arr) {
    let copy = [];
    for (let num1 of arr) {
        copy.push(num1);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr.pop() !== arr.shift()) {
            return false;
        }
    }
    return true;
}
let num = [1, 2, 2, 5, 2, 2, 3];
console.log(checkPaliendrom(num));