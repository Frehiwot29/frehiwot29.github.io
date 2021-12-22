"use strict";
let scores = [10, 20, 30, 40, 50];
/**
 * 
 * @param {number } arr to
 * @return {number} arr avarge
 */
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    return sum / arr.length;

}
console.log(findAverage(scores));

let scores2 = [];
for (let i = 0; i < 10; i++) {
    scores2[i] = Math.ceil(Math.random() * 10);

}
console.log(findAverage(scores2));
