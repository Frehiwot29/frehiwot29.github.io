"use strict";
/**
 * 
 * @param {Array} arr for
 * @param {Object} fun to 
 * @return{array} the filter one
 */
function myFilter(arr) {
    return arr.filter(item => item % 2 === 0);
}
let number = [4, 5, 6, 7, 8, 9];
console.log(myFilter(number));

