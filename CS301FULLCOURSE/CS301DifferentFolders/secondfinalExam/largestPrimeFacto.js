"use strict";
/*eslint-disable*/
function isPrime(n) {
    if (n === 1 || n === 0)
        return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
function largestPrimeFactor(n) {
    if (n <= 1)
        return 0;
    let largestPrime;
    for (let i = 2; i <= n; i++) {
        if (n % i === 0 && isPrime(i)) {
            largestPrime = i;
        }
    }
    return largestPrime;
}
console.log(largestPrimeFactor(5))
console.log(largestPrimeFactor(10))
console.log(largestPrimeFactor(345))