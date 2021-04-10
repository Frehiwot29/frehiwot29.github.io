"use strict";
/*eslint-disable*/
function myCounter() {
    let count = 0;
    return function (x) {
        if (x > 3) {
            console.log("Warning: increment was by value greater than 3");
        } else {
            return count++;
        }
    }
}
const mycounter = myCounter();
mycounter(2);