"use strict";
/*eslint-disable*/
function reverseNumber(number) {
    let revNumber = 0;
    while (number > 0) {
        revNumber = (revNumber * 10) + (number % 10);
        number = Math.floor(number / 10);
    }
    return revNumber;
}
function reversedPrime(num) {
    let reversed = reverseNumber(num);
    let result;
    for (let i = 0; i < reversed; i++) {
        if (reversed % i === 0) {
            result = false;
            break;
        } else {
            result = true;

        }
    }
    return result;

}
let num = 32;
console.log(reversedPrime(num));