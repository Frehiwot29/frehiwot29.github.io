"use strict";
///*eslint-disable*/
/**
 * Q3. Write a function findLongestWord() that takes an array of words and returns the length of 
the longest one. 
 */
/**
 * 
 * @param {Array} arr to compare
 * @return {number} number length of the longest
 */
function findLongestWord(arr) {
    let longests = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longests) {
            longests = arr[i];
        }
    }
    return longests;
}
let num = ["AdonayF", "SimonF", "KalabF", "AsterF", "FrehiwotK"];
let num2 = ["this", "is", "a", "test", "longest"];
console.log(findLongestWord(num2));
console.log(findLongestWord(num));