"use strict";
/**
 * 
 * @param {String} str to check
 * @return {String} return str
 */
function checkSpam(str) {
    let result;
    let resultStr = str.toLowerCase();
    if (resultStr.includes("lottory") || resultStr.includes("prize")) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

console.log(checkSpam("i get a\"prize\"because i won \"lottory\" "));
console.log(checkSpam("i get a it because i won \"lottory\"it "));
console.log(checkSpam("i get a it because i won it "));