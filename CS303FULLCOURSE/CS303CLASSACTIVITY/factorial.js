"use strict";
/*eslint-disable*/
//write recuersivlly and iteriablly for factorial
//by for loop
function factorial(number) {
    let total = 1;
    for (let i = 1; i <= number; i++) {
        total = total * i;
    }
    return total;
}
console.log(factorial(5));

/////factorial
function numfactorial(number) {
    if (number === 1) {
        return 1;
    } else {
        return number * numfactorial(number - 1);
    }
}
console.log(numfactorial(5));

//count letter by recurision
function countLetter(str, letter) {
    //base case
    if (str.length === 0) {
        return 0;
    } else {
        //reduction
        //check if the first letter in string is the letter
        if (str[0] === letter) {
            return 1 + countLetter(str.substring(1), letter);
        } else {
            return countLetter(str.substring(1), letter);
        }
    }
}
console.log(countLetter("aaaaddfsh", "a"));

