"use strict";
/**
 * 
 * @param {array} arr to check which is prime
 * @return {boolean} true or false
 */
function findSumIsPrime(arr) {
    let sum = 0;
    //let isPrime = true;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[0] + arr[arr.length - 1];
        if (sum % 2 !== 0)
            return false;
        //isPrime = false;
        // isPrime = true;
    }
    return sum;
    // return isPrime;
}
console.log(findSumIsPrime([2, 2, 3, 4, 5, 6]));