"use strict";
/**
 * Given a positive integer, return its corresponding column title 
 * as appear in an Excel Sheet.For example:  1 →A, 2→B, 3→C,…,26→z,27→AB, →28->AB, …
 * @param {String} str to
 * @return {String} string
 */
function excellSheet(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result *= 26;
        result += str.charAt(i) - "A" + 1;

    }
    return result;
}
console.log(excellSheet("BCD"));