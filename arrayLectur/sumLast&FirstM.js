"use strict";
/**
 * 
 * @param {array} arr to test sum of two
 * @return {Array} arr 
 */
function sumOfLaFile(arr) {
    let counter;
    let sum = arr[0] + arr[arr.length - 1];
    if (arr.length % 2 === 0) {
        let middle = (arr.length / 2) - 1;
        let average = (arr[middle] + arr[middle - 1]) / 2;
        counter = Math.round(average);

    } else {
        let result = (arr.length - 1) / 2;
        counter = arr[result];
    }
    return sum === counter;



}
console.log(sumOfLaFile([1, 2, 3, 7, 4, 5, 6]));

