"use strict";
/*eslint-disable*/
/**
 * Write a function, vowelcount (or function) that will take a string as innput 
 * and return an object that has property a,e,i,o,u.The object property values will
 * be the count of the instance of that vowel in the string .
 * use str.splite("") and best method switch
 * @param {String} str vowel
 * @return {String} character 
 */
function vowelCount(str) {
    const letters = str.split("");
    const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (const letter of letters) {
        switch (letter.toLowerCase()) {
            case "a":
                vowels.a += 1;
                break;
            case "e":
                vowels.e += 1;
                break;
            case "i":
                vowels.i += 1;
                break;
            case "o":
                vowels.o += 1;
                break;
            case "u":
                vowels.u += 1;
                break;
        }
    }
    return vowels;
}
console.log(vowelCount("it is a cold day in january"));