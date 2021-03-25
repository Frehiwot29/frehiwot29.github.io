"use strict";
/*eslint-disable*/
/*const arr = [1, 2, 5, 16, 3, 108];
function isEvenlog(number) {
    if (number % 2 === 0) {
        console.log(number);
    }

}
arr.forEach(isEvenlog);*/
//Exr
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