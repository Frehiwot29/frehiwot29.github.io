"use strict";
/**
 * 
 * @param {Number} from this
 * @param {Number} toNum end number
 * @return {Number} to
 */
function printNumberGo(from, toNum) {
    let current = from;
    /**
     * @returns{number} to strat
     */
    function goo() {
        console.log(current);
        if (current === toNum) {
            clearInterval(timerId);
        }
        current++;
    }
    goo();
    let timerId = setInterval(goo, 1000);
}
printNumberGo(5, 10);