"use strict";
/**
 * 
 * @param {array} arr to rotat
 * @return {array} arr  
 */
function rotateLeft(arr) {

    let left = arr.pop();
    arr.unshift(left);
    return arr;

}
let num = [23, 34, 45, 67];
console.log(rotateLeft(num));
