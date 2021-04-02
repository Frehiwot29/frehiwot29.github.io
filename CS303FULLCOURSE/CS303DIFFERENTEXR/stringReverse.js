"use strict";
/**
 * 
 * @param {Stering} str to
 * @return {String} reverse string 
 */
function strReverse(str) {
    if (str === null || str === "") {
        return;
    } else {
        strReverse(str.substring(1));
        console.log(str.charAt(0));
    }

}
strReverse("Frehiwot", "\n");