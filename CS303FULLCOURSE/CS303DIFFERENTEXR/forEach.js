"use strict";
/*eslint-disable*/
/**
 * use forEach to log all  the even element of an array to the console
 * [1,5,16,3,108]
 */
const arr = [1, 2, 5, 16, 3, 108];
function isEvenlog(number, index, array) {
    if (number % 2 === 0) {
        console.log(index, ". ", number, "from the array: ", array);
    }
}
const forE = arr.forEach(isEvenlog);
console.log("forE: ", forE);
/**
 * use filter ,find and findindex to find
 * -all the even numbers
 * -the first even number
 * -the index of the first even number
 */
const numbers = [1, 5, 18, 2, 77, 108];
function isEven(number) {
    if (number % 2 === 0) {
        return true;

    } else {
        return false;
    }
}
const filtered = numbers.filter(isEven);
const myfound = numbers.find(isEven);
console.log("filtered: ", filtered);
console.log("found is :", myfound);

