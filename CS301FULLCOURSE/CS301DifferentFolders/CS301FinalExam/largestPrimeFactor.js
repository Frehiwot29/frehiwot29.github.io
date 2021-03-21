"use strict";
/*eslint-disable*/
function largestPrimeFactor(num) {
    if (num <= 1) return 0;
    let largest;
    for (let i = 2; i <= num; i++) {
        if (num % i === 0 && isPrime(i)) {
            largest = i;
            break;
        }
    }

    return largest;
}
function isPrime(num) {
    if (num === 1 || num === 0) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(largestPrimeFactor(10));
console.log(largestPrimeFactor(5));
console.log(largestPrimeFactor(456));
console.log(largestPrimeFactor(1));


