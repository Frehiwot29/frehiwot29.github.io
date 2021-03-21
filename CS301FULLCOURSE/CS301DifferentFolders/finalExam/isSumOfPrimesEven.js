"use strict";
/*eslint-disable*/
/**
 *Q4. Write a JavaScript function isSumOfPrimesEven that takes an array of positive
 * integers as an argument and returns true if the sum of all the prime elements
 * in the given array is even otherwise returns false. If the array is empty or
 * if the array does not contain any prime element it should return false.
 * 
Input                                             Output
[1,2,3,4,5,6]                                      true
[]                                                 false
[1,6,9,10]                                         false
[1,2,2,3,9]                                        false
 */
function isSumOfPrimesEven(arr) {
    if (arr.length === 0) return false;
    let sum = 0;
    for (let n of arr) {
        if (isPrime(n)) {
            sum += n;
        }
    }
    if (sum === 0)
        return false;
    return sum % 2 === 0;
}
function isPrime(n) {
    if (n === 1 || n === 0) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
let num = [1, 2, 3, 4, 5, 6];
let num1 = [];
let num2 = [1, 6, 9, 10];
let num3 = [1, 2, 2, 3, 9];
console.log(isSumOfPrimesEven(num));
console.log(isSumOfPrimesEven(num1));
console.log(isSumOfPrimesEven(num2));
console.log(isSumOfPrimesEven(num3));
