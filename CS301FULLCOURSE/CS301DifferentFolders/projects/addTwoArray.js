"use strict";
/**
 *  Write a function, that given two arrays representing two non-negative 
 * integers with digits, adds the two numbers, and return it as an array.
    add_two_numbers
 * Input                       Output        Explanation
   [3,4,2], [4,6,5]           [7,0,8]        342+465=807
   [1,1], [1,2,3]             [1,3,4]        11+123=134
   [1,1], [9,9]               [1,1,0]        11+99=110
 * @param {Array} arr1 to add digite
 * @param {Array} arr2 to add digits
 * @return {number} to find the sum
 */
function addTwoArray(arr1, arr2) {
    let sum = 0;
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let i = 0; i < arr2.length; i++) {
            sum = arr1[i] + arr2[i];
            result.push(Math.floor(sum / 10));
        }

    }
    return result;

}
let num1 = [3, 4, 2];
let num2 = [4, 6, 5];
console.log(addTwoArray(num1, num2));