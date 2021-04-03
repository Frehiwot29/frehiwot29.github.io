"use strict";
/**
 * 
 * @param {Array} arr to filter
 * @return {Array} num 
 */
function inArray(arr) {
    return function (num) {
        return arr.includes(num);
    };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
/**
 * filter in between 
 */
/**
 * @param {number} num1 in between
 * @param {number} num2 in between
 * @returns {Array} to filter in between
 */
function inBetween(num1, num2) {
    return function (num3) {
        return num3 >= num1 && num3 <= num2;
    };
}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1.filter(inBetween(3, 6))); // 3,4,5,6
/**
 * Q2.Write function sum that works like this: sum(a)(b) = a+b.
 * Yes, exactly this way, using double parentheses (not a mistype).
 * @param {Number} num1 number to sum 
 * @returns{Number} to sum num1 and num2
 */
function sum(num1) {
    return function (num2) {
        return num1 + num2; // takes "num1" from the outer lexical environment
    };
}
console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4
/**
 * 
 * @returns {number} number
 */
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let shooter = function () { // create a shooter function,
            console.log(i); // that should show its number
        };
        shooters.push(shooter); // and add it to the array
        i++;
    }
    // ...and return the array of shooters
    return shooters;
}
let army = makeArmy();
// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
/**
 * 
 * @param {String} fieldName name
 * @return {String} name
 */
function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}