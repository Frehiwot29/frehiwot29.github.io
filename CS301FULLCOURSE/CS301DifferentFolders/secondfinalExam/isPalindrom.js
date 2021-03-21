"use strict";
/*eslint-disable*/
/**
 * 14. Write a function that takes an array of strings and returns array of 
 * palindrome strings only
 */
function isPalindrom(str) {
    let str1 = str.toLowerCase();
    let i = 0;
    let j = str1.length - 1;
    while (i < j) {
        if (str1[i] !== str1[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
console.log(isPalindrom("maadaam"));