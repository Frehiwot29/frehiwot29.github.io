"use strict";
/**
 * 
 * @param {Array} arr to
 * @return {Array}  the array of ave and max
 */
function computeCharges(arr) {
    let max = arr[arr.length - 1];
    let sum = 0;
    let average;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            sum += arr[i][j];
            average = Math.floor(sum / arr.length - 1);
            result.push(average);
            if (arr[i][j] > max) {
                max = arr[i][j];
                result.push(max);
            }
        }

    }
    return result;

}
const charges = [[1, 2, 3, 4, 5], [10, 20, 30, 60], [300, 200, 100]];
console.log(computeCharges(charges));