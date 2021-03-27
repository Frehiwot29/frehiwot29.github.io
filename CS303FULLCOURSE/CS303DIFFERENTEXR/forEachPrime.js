"use strict";
/*eslint-disable*/
// function isPrimeNumber(num) {
//     if (isPrime(num)) {
//         return true;
//     }
//     return false;
// }
// function isPrime(num) {
//     if (num === 1 || num === 0)
//         return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// const number = [2, 3, 4, 5, 6, 7, 11];
// //number.forEach(isPrimeNumber);
// const myprime = number.filter(isPrimeNumber);
// const myArr = number.find(isPrimeNumber);
// console.log("my prime number", myprime);
// console.log("my first prime number", myArr);

function isPrimeNumber(num) {
    if (isPrime(num) === true) {
        console.log(num);
    }
}
function isPrime(num) {
    if (num === 1 || num === 0)
        return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
const number = [2, 3, 4, 5, 6, 7, 11];
//number.forEach(isPrimeNumber);
const myprime = number.forEach(isPrimeNumber);
//const myArr = number.find(isPrimeNumber);
console.log("my prime number", myprime);
//console.log("my first prime number", myArr);