"use strict";
///*eslint-disable*/
/**
 * Here we make two counters: counter and counter2 using the same makeCounter function.
 * Are they independent? What is the second counter going to show? 
 * 0,1 or 2,3 or something else?
 * @return {nomber} number of count
 */
function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}
let counter = makeCounter();
let counter2 = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter2()); // 0
console.log(counter2()); // 1
/**
 * The answer: 0,1.Functions counter and counter2 are created by different
 * invocations of makeCounter.So they have independent outer Lexical Environments,
 *  each one has its own count.
 */