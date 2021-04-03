"use strict";
/**
 * @returns{number} number to count object
 */
function Counter() {
    let count = 0;
    this.upp = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}
let counter = new Counter();
console.log(counter.upp()); // 1
console.log(counter.upp()); // 2
console.log(counter.down()); // 1
/**
 * Surely it will work just fine.
 * Both nested functions are created within the same outer Lexical Environment, 
 * so they share access to the same count variable:
 */