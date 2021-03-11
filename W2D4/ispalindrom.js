"use strict";
/**
 * @param {array} array to check paliondrom
 * @return {boolean} true or false 
*/
const arr = ["carecar", 1344, 12321, "did", "cannot"];
const isPalindrome = elll => {
    const str = String(elll);
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] === str[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
};
const findPalindrome = arr => {
    return arr.filter(elll => isPalindrome(elll));
};
console.log(findPalindrome(arr));