"use strict";
/**
 * @param {array} arr to reverse
 * @return {array} the reversed one
*/
function reverse(arr) {
    let temp = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        temp[j] = arr[i];
        j++;
    }
    return temp;
}
let input = [1, 2, 3, 4, 5];
console.log(reverse(input));