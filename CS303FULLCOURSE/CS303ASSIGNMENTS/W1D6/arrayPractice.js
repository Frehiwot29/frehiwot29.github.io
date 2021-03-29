"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge };
//add all of your function names here that you need for the node mocha tests

// const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
// const peopleArray = [
//     { name: "Sam", age: 15 },
//     { name: "William", age: 6 },
//     { name: "Lucy", age: 13 },
//     { name: "Barney", age: 80 }];
/**
 * 
 * @param {Array} arr to double
 * @return {Array} array
 */
function doubleNums(arr) {
    return arr.map(item => item * 2);

}
//console.log(doubleNums(numArray));
/**
 *
 * @param {Array} arr to doubleage
 * @return {Array} array
 */
function doubleAges(arr) {
    return arr.map(item => item.age * 2);



}
//console.log(doubleAges(peopleArray));
/**
 * 
 * @param {Array} arr to Even
 * @return {Array} array
 */
function filterEven(arr) {
    return arr.filter(item => item % 2 === 0);


}
//console.log(filterEven(numArray));
/**
 * 
 * @param {Array} arr to over10
 * @return {Array} array
 */
function filterOver10(arr) {
    return arr.filter(item => item.age > 10);


}
//console.log(filterOver10(peopleArray));
/**
 * 
 * @param {Array} arr to Even number
 * @return {Array} array
 */
function findEvenNum(arr) {
    return arr.find(item => item % 2 === 0);

}
//console.log(findEvenNum(numArray));
/**
 * 
 * @param {Array} arr to Fven Age
 * @return {Array} array
 */
function findEvenAge(arr) {
    return arr.find(item => item.age % 2 === 0);

}
//console.log(findEvenAge(peopleArray));
/**
 * 
 * @param {Array} arr to includes Even number
 * @return {Array} array
 */
function includesEvenNum(arr) {
    return arr.includes(item => item % 2 === 0);
}
//console.log(includesEvenNum(numArray));
/**
 * 
 * @param {Array} arr to includes EvenAge
 * @return {Array} array
 */
function includesEvenAge(arr) {
    return arr.includes(item => item.age % 2 === 0);
}
//console.log(includesEvenAge(peopleArray));
// //reduce
// /*function sumOfNumber(arr) {
//     let sum = 0;
//     for (let num2 of arr) {
//         sum += num2;

//     }
//     return sum;
// }

// function averageOfNumber(arr) {
//     let sum = 0;
//     for (let num3 of arr) {
//         sum += num3;

//     }
//     return sum / arr.length;
// }

// function maxNumber(arr) {
//     let max = arr[arr.length];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) { }
//         max = arr[i];


//     }
//     return max;
// }

// function maxAge(arr) {
//     let maxAge = arr[arr.length];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].age > maxAge)
//             maxAge = arr[i];

//     }
//     return maxAge;
// }*/

