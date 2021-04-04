"use strict";
/**
 * Write a function printNumbers(from, to) that outputs a number every second, 
 * starting from from and ending with to.Make two variants of the solution.
 * Q.2 Using nested setTimeout.
 * @param {Number} from the given
 * @param {Number} too this number
 * @return{Number} the result
 */
function printNumbers(from, too) {
    let current = from;
    setTimeout(function goo() {
        console.log(current);
        if (current < too) {
            setTimeout(goo, 1000);
        }
        current++;
    }, 1000);
}
printNumbers(5, 10);