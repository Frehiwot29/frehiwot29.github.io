"use strict";
/*eslint-disable*/
/**
 * 15.[4] Write a function named somethingOdd that takes 
 * an array of numbers as input and returns the product of all 
 * the array values at 
 * the odd indices. You can use a simple for loop.
 */
let arr = [2, 5, 3, 7]
function someThingOdd(arr) {
    let product = 1;
    for (let n in arr) {
        if (n % 2 === 0)
            product *= arr[n]
    }
    return product;
}
console.log(someThingOdd(arr))