"use strict";
/*eslint-disable*/
/**
 * Write a function that takes a string parameter and returns the middle character
 *  of the string. If string is of even length then function should return
 *  the middle two characters
 * @param {*} str 
 */
function middleString(str) {
    let l = str.length;
    let middle = Math.floor(l / 2);
    if (l % 2 !== 0) {
        return str[middle];
    }
    return str.substring(middle - 1, middle + 1);

}
let str = "frehiwot";
console.log(middleString(str));