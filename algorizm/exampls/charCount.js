"use strict";
/**
 * 
 * @param {String} str of char
 * @returns {Object} number char
 */
function charCount(str) {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLocaleLowerCase();
        if (result[char] > 0) {
            result[char]++;
        }
        else {
            result[char] = 1;
        }
    }
    return result;
}
console.log(charCount("My Name is fre!"));