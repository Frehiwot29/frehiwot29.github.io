"use strict";
/**
 * Write a function named getMiddle that returns the value of the middle element in an array. If
    the array has an even number of elements, then this function must return the average of the two middle elements.
 * @param {array} arr to check the middle
 * @return {array} arr to check the middle
 */
function getMiddle(arr) {
    let middle = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr.length - 1) % 2 !== 0) {
            middle = arr[Math.floor(arr.length / 2)];
            // (arr[middle] + arr[middle - 1]) / 2;
        } else {
            middle = (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2;
            //middle=arr[Math.random((arr.length - 1) / 2)];
        }
    }
    return middle;
}
let array = [1, 2, 3, 4, 5, 6];
console.log(getMiddle(array));