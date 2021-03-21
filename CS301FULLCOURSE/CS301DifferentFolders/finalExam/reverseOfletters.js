"use strict";
/**
 * Q2.write afunction reveredAll, which takes a string of words and return a string    
 *  for which both words and characters in every words are reversed order.
 * for example if the input is "Hi how are you", 
 * the out put should be "uoy era woh iH" .
 * @param {String} str to reverse
 * @return {String} str reversed
 */
function reverseAll(str) {
    let words = str.split();
    let reversedWords = [];
    for (let i = words.length - 1; i >= 0; i--) {
        for (let j = words[i].length; j >= 0; j--) {
            reversedWords.push(words[i][j]);

        }
    }
    return reversedWords.join("").toString();
}
let arr = "Hi how are you";
console.log(reverseAll(arr));
