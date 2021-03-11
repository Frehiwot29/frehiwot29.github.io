"use strict";
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
        /**
         * return str.length
        */
    }
}
console.log(reverseString("hello"));