"use strict";
/**
 * Write a function that takes a string parameter and returns the middle character of the string. 
 * If string is of even length then function should return 
 * the middle two characters.
 */
/**
 * 
 * @param {String} str to
 * @return {String} str 
 */
function stringMiddle(str) {
    let length = str.length - 1;
    for (let i = 0; i < str.length; i++) {
        if (length % 2 === 0) {
            return str[length / 2];

        } else {
            let middle = [length + length + 1] / 2;
            return str[middle];
        }

    }
}
console.log(stringMiddle("mamndhs"));