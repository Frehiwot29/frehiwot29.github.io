"use strict";
/**
 * @param {array} str to check
 * @return {array} arr ispaliondram
*/
function isPalindrom(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[(str.length - i) - 1]) {
            return false;
        }

    }
    return true;
}
/**
 * 
 * @param {Array} strArr to test
 * @return {Array} count
 */
function countPalindrom(strArr) {
    let count = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (isPalindrom(strArr[i])) {
            count++;
        }
    }
    return count;

}
let arr = ["mom", "helleh", "dad"];
console.log(countPalindrom(arr.filter()));