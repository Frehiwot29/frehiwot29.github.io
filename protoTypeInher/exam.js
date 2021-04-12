"use strict";
/*eslint-disable*/
/**
 * function makeCounter() {
 * let count = 0;
 * return function() { 
 * return count++; 
 * };
 * }
 * Now modify makeCounter so that the callback it returns accepts an argument for the increment value. 
 * It should also return a warning string whenever it has been incremented by a value greater than 3. E.g.,
 * const mycounter = makeCounter();myCounter(10); //will return "Warning: increment was by value greater than
 *  3"where x is the current count value as normal.Also, your counter should still handle the case where 
 * it is called with no argument and increments by 1 as normal.
 * You can write this in vscode or an editor and then copy paste here.
 * @returns 
 */
function makeCounter() {
    let count = 0;
    return function (increament) {
        if (increament === undefined) {
            count = count + 1;
        } else {
            count = count + increament;
        }
        if (increament > 3) {
            return "waring increament was by value greater than 3";
        } else {
            return count;
        }
    }
}
const mycounter = makeCounter();
console.log(mycounter());
console.log(mycounter(2));
console.log(mycounter(20));
console.log(mycounter(3));