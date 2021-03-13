"use strict";
/*
Write a JavaScript function isSumOfPrimesEven that takes an array of positive integers as an argument and returns 
true if the sum of all theprime elements in the given array is even otherwise returns false. 
 If the array is empty or if the array does not contain any prime element it should return false.

Input                  Output
[1,2,3,4,5,6]          true
[]                     false
[1,6,9,10]             false
[1,2,2,3,9]            false
*/
/**
 * 
 * @param {Array} arr to
 * @return {number} to comput
 */
function sumOfPrimeEven(arr) {

    let primeSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr === []) return false;
        primeSum += isPrime(arr[i]);
    }
    if (primeSum % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
/**
 * 
 * @param {number} num to
 * @return {number} to 
 */
function isPrime(num) {
    num = Math.abs(num);
    for (let i = 2; i < num; i++) {
        if (num % i !== 0) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(isPrime([7]));
console.log(sumOfPrimeEven([1, 2, 3, 4, 5, 6]));
console.log(sumOfPrimeEven([]));
console.log(sumOfPrimeEven([1, 6, 9, 10]));
console.log(sumOfPrimeEven([1, 2, 2, 3, 9]));


