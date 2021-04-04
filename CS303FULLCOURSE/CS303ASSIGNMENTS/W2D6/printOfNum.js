"use strict";
/**
 * Write a function printNumbers(from, to) that outputs a number every second, 
 * starting from from and ending with to.Make two variants of the solution.
 * Q.1 Using setInterval.
 * @param {Number} from the given 
 * @param {Number} toNum a number
 * @return {Number} to
 */
function printNumbers(from, toNum) {
    let current = from;
    let timerId = setInterval(function () {
        console.log(current);
        if (current == toNum) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
printNumbers(5, 15);