"use strict";
/*eslint-disable*/
/**
 * 
 * @param {String} str1 to pull over suff
 * @param {String} str2 to pull over suff
 * @return {String} the true of the two string
 */
function commonSuffex(str1, str2) {
    let suffex = "";
    let count = 0;
    let length1 = str1.length - 1;
    let length2 = str2.length - 1;
    while (true) {
        if (str1[length1 - count] === str2[length2 - count]) {
            suffex = str1[length1 - count] + suffex;
            count++;
        } else {
            break;
        }
    }
    return suffex;
}
console.log(commonSuffex("swiming", "waing"));