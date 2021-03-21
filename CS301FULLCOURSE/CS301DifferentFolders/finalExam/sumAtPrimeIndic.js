"use strict";
/*eslint-disable*/
/**
 * Write a function that given an array of integers returns the sum of elements
 * at the prime indices. For e.g. for an array [1,5,6,7,8,3] result would be a sum of
 *  6+7+3=16 which are values at the prime indices of the array.
 */
function sumPrimeIndices(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(i))
            sum += arr[i];

    }
    return sum;
}
function isPrime(n) {
    if (n === 1 || n === 0) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
let arr = [1, 5, 6, 7, 8, 3];
console.log(sumPrimeIndices(arr));
/*
function sumOfPrimeIndex(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(i))
            sum += arr[i];
    }
    return sum
}
function isPrime(n) {
    if (n === 1 || n === 0)
        return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
let arr = [1, 5, 6, 7, 8, 3];
console.log(sumOfPrimeIndex(arr))
*/