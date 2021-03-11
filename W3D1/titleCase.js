"use strict";
/**
 * 
 * @param {String} str to
 * @return {String} str 
 */
function titleCase(str) {
    return str[0].toUpperCase() + str.substr(1, str.length - 1);
}
console.log(titleCase("jackson"));
